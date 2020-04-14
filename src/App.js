import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import { ScreenSpinner, ModalRoot, ModalCard } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28CompassOutline from '@vkontakte/icons/dist/28/compass_outline';

import bridge from '@vkontakte/vk-bridge';
import Api from './core/api/Api';

// Redux
import { connect } from 'react-redux';
import { updateLevel } from './redux/actions/level';

import Home from './panels/Home';
import Begin from './panels/Begin';
import Level from './panels/Level';
import Rating from './panels/Rating';

const MODAL_BEFORE_BEGIN = 'before-begin';
const MODAL_NOT_ALLOW_MESSAGES = 'not-allow-messages';
const MODAL_NOT_ALLOW_LOCATION = 'not-allow-location';

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

		this.modalClose = () => {
			this.setState({activeModal: null});
		};

		this.begin = (geodata) => {
			let body = Object.assign({}, this.state.user);

			if(geodata) {
				Object.assign(body, {lat: geodata.lat, long: geodata.long})
			}

			Api.home.begin(body, (result) => {
				if(result) {
					this.props.onLevelUpdate(result);
					this.navigate('level');
				}
			});
		}

		/** Запрос разрешений */
		this.permission = () => {
			this.modalClose();
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
								this.setActiveModal(MODAL_NOT_ALLOW_LOCATION);
							}
						});
				})
				// Не разрешил отправлять сообщения
				.catch(() => {
					this.setActiveModal(MODAL_NOT_ALLOW_MESSAGES);
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
				this_.props.onLevelUpdate(level).then(() => {this_.navigate('level')});
			} else {
				this_.navigate('begin');
			}
		}
		fetchData();
	}

	setActiveModal (activeModal) {
		this.setState({activeModal: activeModal || null});
	}

	render() {
		return (
			<View activePanel={this.state.activePanel} modal={
				<ModalRoot
					activeModal={this.state.activeModal}
					onClose={this.modalBack}
				>
					<ModalCard
						id={MODAL_BEFORE_BEGIN}
						onClose={() => this.setActiveModal(null)}
						icon={<Icon28HomeOutline />}
						header="Вы подтверждаете что находитесь дома?"
						caption={<p>Баллы будут начисляться только за нахождение там, где вы находитесь сейчас.<br />Не забудьте разрешить данные о местоположении.</p>}
						actions={[{
							title: 'Да, подтверждаю',
							mode: 'primary',
							action: this.permission
						}]}
					>
					</ModalCard>
					<ModalCard
						id={MODAL_NOT_ALLOW_LOCATION}
						onClose={() => this.setActiveModal(null)}
						icon={<Icon28CompassOutline />}
						header="Вам нужно разрешить доступ к геопозиции"
						caption="Без данного разрешения приложение не сможет начислять вам баллы"
						actions={[{
							title: 'Повторить',
							mode: 'primary',
							action: this.permission
						}]}
					>
					</ModalCard>
					<ModalCard
						id={MODAL_NOT_ALLOW_MESSAGES}
						onClose={() => this.setActiveModal(null)}
						icon={<Icon28Messages />}
						header="Вам нужно разрешить отправку сообщений"
						caption="Без данного разрешения приложение не сможет отправлять вам уведомления."
						actions={[{
							title: 'Повторить',
							mode: 'primary',
							action: this.permission
						}]}
					>
					</ModalCard>
				</ModalRoot>}
			>
				<Home id='home' fetchedUser={this.state.user} navigate={this.navigate} />
				<Begin id='begin' fetchedUser={this.state.user} navigate={this.navigate} start={() => {this.setActiveModal(MODAL_BEFORE_BEGIN)}} />
				<Level id='level' fetchedUser={this.state.user} navigate={this.navigate} permission={this.permission} />
				<Rating id='rating' navigate={this.navigate} />
			</View>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log('App.mapStateToProps', state, ownProps);
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
			)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
