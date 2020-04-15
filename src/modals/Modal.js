import React from 'react';
import { ModalRoot, ModalCard } from '@vkontakte/vkui';

// Redux
import { connect } from 'react-redux';
import { openModal } from '../redux/actions/modal';

import AreAtHome from './AreAtHome';
import NotAllowLocation from './NotAllowLocation';
import NotAllowMessages from './NotAllowMessages';
import Reward from './Reward';
import Skipped from './Skipped';
import NotHome from './NotHome';
import NoGeodata from './NoGeodata';

export const MODAL_ARE_AT_HOME = 'modal_are-at-home';
export const MODAL_NOT_ALLOW_MESSAGES = 'modal_not-allow-messages';
export const MODAL_NOT_ALLOW_LOCATION = 'modal_not-allow-location';
export const MODAL_REWARD = 'modal_reward';
export const MODAL_SKIPPED = 'modal_skipped';
export const MODAL_NOT_HOME = 'modal_not-home';
export const MODAL_NO_GEODATA = 'modal_no-geodata';

class Modal extends React.Component {

  setActiveModal(activeModal) {
    return this.props.onOpenModal(activeModal);
  }

  close() {
    return this.setActiveModal(null);
  }

  render() {
    return (
      <ModalRoot
        activeModal={this.props.activeModal}
        onClose={this.close}
      >
        {AreAtHome(MODAL_ARE_AT_HOME, () => {this.close()}, this.props.permission)}
        {NotAllowLocation(MODAL_NOT_ALLOW_LOCATION, () => {this.close()}, this.props.permission)}
        {NotAllowMessages(MODAL_NOT_ALLOW_MESSAGES, () => {this.close()}, this.props.permission)}
        {Reward(() => {this.close()}, this.props.modalParams)}
        {Skipped(() => {this.close()})}
        {NotHome(() => {this.close()})}
        {NoGeodata(() => {this.close()})}
      </ModalRoot>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
	return state.modal ? {
    activeModal: state.modal.activeModal,
    modalParams: state.modal.modalParams,
  } : {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onOpenModal: (activeModal) =>
			new Promise((resolve) =>
				openModal(activeModal).then((action) => {
					dispatch(action);
					resolve();
				})
			)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
