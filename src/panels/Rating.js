import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import { Panel, PanelHeader, PanelHeaderButton, List, Cell, Group, ScreenSpinner, Div, Avatar } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import bridge from '@vkontakte/vk-bridge';
import Api from '../core/api/Api';

// Redux
import { connect } from 'react-redux';
//import { selectRegion } from '../redux/actions/region';

import './Rating.css';

const osName = platform();

class Rating extends React.Component {

	constructor(props) {
    super(props);
    this.state = {isLoading: true};
  };

	// Компонент примонтирован
	componentDidMount() {

		Api.rating.global((table) => {
			this.setState({isLoading: false, table: table});
		});

		/*const this_ = this;

		async function fetchData() {
			const token = await bridge.send("VKWebAppGetAuthToken", {"app_id": 7405679, "scope": "friends"});
			const fds = await bridge.send("VKWebAppCallAPIMethod", {
				"method": "friends.get",
				"params": {
					"fields": "photo_200_orig",
					//"count": 10,
					"access_token": token.access_token,
					"v": "5.103"
				}
			});

			this_.setState({isLoading: false, friends: fds.response.items});
		}

		fetchData();*/
  };

	render() {
		return (
			<Panel id={this.props.id}>
				<PanelHeader
					left={<PanelHeaderButton onClick={() => {this.props.navigate('level')}}>
						{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</PanelHeaderButton>}
				>
					Рейтинг
				</PanelHeader>
				{!this.state.isLoading && <Group>
		      <List className="RatingList">
						<Cell expandable>
							<Div></Div><Div>Уровень</Div>
						</Cell>
						{this.state.table.map((friend) => {
              return (
								<Cell
									key={"friend_" + friend.uid}
									before={friend.photo_200 ? <Avatar src={friend.photo_200}/> : null}
									description="Пример для всех"
								>
			        		<Div>
										{`${friend.first_name} ${friend.last_name}`}
									</Div>
									<Div>
										{friend.value}
									</Div>
								</Cell>
							);
						})}
					</List>
				</Group>}
				{this.state.isLoading && <ScreenSpinner size='large' />}
			</Panel>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
  return {
			//friends: state.rating.friends
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      /*onSelectRegion: (region) =>
        new Promise((resolve) =>
          selectRegion(region).then((action) => {
            dispatch(action);
            resolve();
          })
        )*/
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
