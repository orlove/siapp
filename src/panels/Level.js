import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeaderSimple, PanelHeaderButton, Button, List, Group, Cell, Div, Avatar, Header } from '@vkontakte/vkui';

import bridge from '@vkontakte/vk-bridge';
import Api from '../core/api/Api';

// Redux
import { connect } from 'react-redux';
import { updateLevel } from '../redux/actions/level';


import Icon24Poll from '@vkontakte/icons/dist/24/poll';
import Icon24ThumbUp from '@vkontakte/icons/dist/24/thumb_up';
import Icon24ThumbDown from '@vkontakte/icons/dist/24/thumb_down';
import Icon24RecentOutline from '@vkontakte/icons/dist/24/recent_outline';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import './Level.css';


class Level extends React.Component {

	constructor(props) {
    super(props);
  }

	/** Подтвердить находение дома */
	confirm() {
		bridge.send("VKWebAppGetGeodata", {})
			.then((data) => {
				Api.home.confirm(this.props.fetchedUser.id, data.lat, data.long, (level) => {
					this.props.onLevelUpdate(level);
				});
			})
			.catch(() => {
				Api.home.confirm(this.props.fetchedUser.id, null, null, (level) => {
					this.props.onLevelUpdate(level);
				});
			});
	}

	statusOfCheck(check) {
		switch(parseInt(check.status)) {
			case 1: return 'Подтверждено';
			case 2: return 'Не дома';
			case 4: return 'Поздно';
			case 8:
			case 12: return 'Нет геоданных';
			default:
				if((new Date(check.sended_c).getTime()/1000) > Math.floor(Date.now()/1000) - 600) {
					return 'Не подтверждено';
				} else {
					return 'Пропущено';
				}
		}
	}

	statusOfCheckIcon(check) {
		switch(parseInt(check.status)) {
			case 1: return (<Icon24ThumbUp style={{color: 'green'}} />);
			case 2: return (<Icon24ThumbDown style={{color: 'red'}} />);
			case 4: return (<Icon24RecentOutline style={{color: 'red'}} />);
			case 8:
			case 12: return (<Icon24Place style={{color: 'gray'}} />);
			default:
				if((new Date(check.sended_c).getTime()/1000) > Math.floor(Date.now()/1000) - 600) {
					return <Icon24Notification style={{color: 'green'}} />;
				} else {
					return <Icon24ThumbDown style={{color: 'gray'}} />;
				}
		}
	}

	levelName() {
		const city = this.props.fetchedUser.city && this.props.fetchedUser.city.title ? ' г.' + this.props.fetchedUser.city.title : '';
		return 'Нарушитель карантина 3000'+city;
	}

	render() {
		return (
			<Panel id={this.props.id}>

				<PanelHeaderSimple
					left={this.props.level.noGeodata && <Div><Button before={<Icon24Place/>} onClick={() => {this.props.permission()}} mode="destructive">Разрешить геоданные</Button></Div>}
					right={<Div><Button before={<Icon24Poll/>} onClick={() => {this.props.navigate('rating')}}>Рейтинг</Button></Div>}
				>
					#ЛУЧШЕДОМА
				</PanelHeaderSimple>

				{this.props.fetchedUser && <Group>
					<List className="RatingList">
						<Cell>
							<Div></Div>
							<Div>Уровень</Div>
						</Cell>
						<Cell
							before={this.props.fetchedUser.photo_200 ? <Avatar src={this.props.fetchedUser.photo_200}/> : null}
							description={this.levelName()}
						>
							<Div>{`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}</Div>
							<Div>{this.props.level ? this.props.level.value : '-'}</Div>
						</Cell>
					</List>
				</Group>}

				{this.props.level && this.props.level.checks && <Group>
					{this.props.level.checks.length > 0 && !this.props.level.checks[0].confirmed && <Div><Button size="xl" mode="commerce" onClick={()=>{this.confirm()}}>Я дома</Button></Div>}
					<Header>Последние проверки</Header>
					<List className="ChecksList">
						<Cell before={<Icon24ThumbUp style={{color: 'green'}} />} key="check_head">
							<Div>Время</Div>
							<Div>Результат</Div>
							<Div className="Values">Баллы</Div>
						</Cell>
						{this.props.level.checks.length == 0 && <Cell key="check_empty" style={{textAlign: 'center'}}><Div>Проверок ещё не было</Div></Cell>}
						{this.props.level.checks.map((check) => {
              return (
								<Cell key={"check_" + check.check_id} before={this.statusOfCheckIcon(check)}>
			        		<Div>
										{check.sended}
									</Div>
									<Div>
										{this.statusOfCheck(check)}
									</Div>
									<Div className="Values" style={check.value > 0 ? {color: 'green', fontWeight: 'bold'} : {}}>
										{check.value}
									</Div>
								</Cell>
							);
						})}
					</List>
				</Group>}
			</Panel>
		);
}}

const mapStateToProps = (state, ownProps) => {
	console.log('mapStateToProps', state, ownProps);
	return {
		level: state.level.level
	};
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

export default connect(mapStateToProps, mapDispatchToProps)(Level);
