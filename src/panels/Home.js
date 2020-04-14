import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Group, Cell, Div, ScreenSpinner } from '@vkontakte/vkui';

import bridge from '@vkontakte/vk-bridge';
import Api from '../core/api/Api';

// Redux
import { connect } from 'react-redux';
//import { openRegionsList } from '../redux/actions/region';__

class Home extends React.Component {

	constructor(props) {
    super(props);
    this.state = {};
  }

	render() {
		return (
			<Panel id={this.props.id}>
				<ScreenSpinner size='large' />
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

export default connect(mapStateToProps/*, mapDispatchToProps*/)(Home);
