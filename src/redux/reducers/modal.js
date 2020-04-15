/**
 * Редуктор модальных окон
 */

export default function reducer(state = null, action) {
  switch (action.type) {
    // Открыть модальное окно
    case 'MODAL_OPEN':
      return Object.assign({}, state, {activeModal: action.activeModal, modalParams: action.modalParams});

    default:
      return state;
    }
}
