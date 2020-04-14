import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Group, Cell, Div, View } from '@vkontakte/vkui';

import bridge from '@vkontakte/vk-bridge';
import Api from '../core/api/Api';

// Redux
import { connect } from 'react-redux';
//import { openRegionsList } from '../redux/actions/region';
//
import './Begin.css';

class Begin extends React.Component {

	constructor(props) {
    super(props);
    this.state = {};
  }

	// Открыть список областей или стран
  /*openRegionsList = (world) => {
    this.props.onOpenRegionsList(world).then(() => this.props.navigate('regions-list'));
  };*/

	render() {
		return (
			<Panel id={this.props.id}>
				<PanelHeader>Победим коронавирус вместе!</PanelHeader>
				<Group>
					<Div className="Explanation">
						Сейчас очень важно находится <b>дома</b>. Данное приложение начисляет балы за проведенное время дома. Демонстрируйте ответственное поведение личным примером!
						После принятия участия, наша группа будет отправлять вам уведомления. При получении такого сообщения, вам нужно перейти в приложение и подтвердить то, что вы находитесь дома (у приложения нет постоянного доступа к вашему местоположению, поэтому приходится подтверждать вручную).
					</Div>
					<Div>
						<Button size="xl" level="2" onClick={() => {this.props.start()}}>Сейчас я дома, начать!</Button>
					</Div>
				</Group>
			</Panel>
		);
}}

const mapStateToProps = (state, ownProps) => {
	return {
		//world: state.world
	};
};

/*const mapDispatchToProps = (dispatch) => {
	return {
		onOpenRegionsList: (world) =>
			new Promise((resolve) =>
				openRegionsList(world).then((action) => {
					dispatch(action);
					resolve();
				})
			)
	};
};*/

export default connect(mapStateToProps/*, mapDispatchToProps*/)(Begin);
