import React from 'react';
import { ModalCard } from '@vkontakte/vkui';

import {MODAL_REWARD} from './Modal';

import Icon44SmileOutline from '@vkontakte/icons/dist/44/smile_outline';

export default (modalClose, modalParams) => {
  return (<ModalCard
    id={MODAL_REWARD}
    onClose={modalClose}
    icon={<Icon44SmileOutline />}
    header="Отметка подтверждена!"
    caption={modalParams ? 'Вам начислино '+modalParams.value+' баллов' : ''}
  >
  </ModalCard>);
};
