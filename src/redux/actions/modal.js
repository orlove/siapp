/**
 * Действия с модальными окнами
 */

/**
 * Открыть модальное окно
 *
 * @param  {String} activeModal
 * @param  {Object} params
 * @return {Promise}
 */
export const openModal = (activeModal, modalParams) => {
  return new Promise((resolve, reject) => {
      resolve({
        type: 'MODAL_OPEN',
        activeModal: activeModal,
        modalParams: modalParams
      });
  });
};
