import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import { ScreenSpinner } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import bridge from '@vkontakte/vk-bridge';
import Api from './core/api/Api';

// Redux
import { connect } from 'react-redux';
import { updateLevel } from './redux/actions/level';
import { openModal } from './redux/actions/modal';

import Home from './panels/Home';
import Begin from './panels/Begin';
import Level from './panels/Level';
import Rating from './panels/Rating';
import Modal, { MODAL_ARE_AT_HOME, MODAL_NOT_ALLOW_MESSAGES, MODAL_NOT_ALLOW_LOCATION } from './modals/Modal';

class App extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
			activeModal: null,
			activePanel: 'home',
			user: null,
			locationPermissionCount: 0
		};

		this.navigate = (e, props) => {
			this.setState({activePanel: e.currentTarget ? e.currentTarget.dataset.to : e});
		};

		this.setUser = (user) => {
			this.setState({user: user});
		};

		this.begin = (geodata) => {
			let body = Object.assign({}, this.state.user);

			if(geodata) {
				Object.assign(body, {lat: geodata.lat, long: geodata.long})
			}

			Api.home.begin(body, (result) => {
				if(result) {
					this.props.onLevelUpdate(result).then(() => {
						this.navigate('level');
					});
				}
			});
		}

		/** Запрос разрешений */
		this.permission = () => {
			// Закрываем модальное окно (если открыто)
			this.props.onOpenModal(null);

			bridge.send("VKWebAppAllowMessagesFromGroup", {group_id: 193696611})
				.then(data => {
					bridge.send("VKWebAppGetGeodata", {})
						.then((data) => {
							if(data.available) {
								this.begin(data);
							}
						})
						// Не разрешил доступ к геоданным
						.catch(() => {
							const locationPermissionCount = this.state.locationPermissionCount + 1;
							this.setState({locationPermissionCount: locationPermissionCount});

							if(locationPermissionCount > 1) {
								this.begin();
							} else {
								this.props.onOpenModal(MODAL_NOT_ALLOW_LOCATION);
							}
						});
				})
				// Не разрешил отправлять сообщения
				.catch(() => {
					this.props.onOpenModal(MODAL_NOT_ALLOW_MESSAGES);
				});
		};
  }

	componentDidMount() {
		const this_ = this;

		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			this_.setUser(user);

			const level = await Api.home.level(user.id);
			if(level) {
				this_.props.onLevelUpdate(level).then(() => {this_.permission()});
			} else {
				this_.navigate('begin');
			}
		}
		fetchData();
	}

	render() {
		return (
			<View activePanel={this.state.activePanel} modal={<Modal permission={this.permission} />}
			>
				<Home id='home' fetchedUser={this.state.user} navigate={this.navigate} />
				<Begin id='begin' fetchedUser={this.state.user} navigate={this.navigate} start={() => {this.props.onOpenModal(MODAL_ARE_AT_HOME)}} />
				<Level id='level' fetchedUser={this.state.user} navigate={this.navigate} permission={this.permission} />
				<Rating id='rating' navigate={this.navigate} />
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLevelUpdate: (level) =>
			new Promise((resolve) =>
				updateLevel(level).then((action) => {
					dispatch(action);
					resolve();
				})
			),
			onOpenModal: (activeModal) =>
				new Promise((resolve) =>
					openModal(activeModal).then((action) => {
						dispatch(action);
						resolve();
					})
				)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
