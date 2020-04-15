import React from 'react';
import { ModalCard } from '@vkontakte/vkui';

import {MODAL_NOT_HOME} from './Modal';

import Icon28BlockOutline from '@vkontakte/icons/dist/28/block_outline';

export default (modalClose, modalParams) => {
  return (<ModalCard
    id={MODAL_NOT_HOME}
    onClose={modalClose}
    icon={<Icon28BlockOutline />}
    header="Вы покинули дом"
    caption="Пожалуйста, соблюдайте карантин."
  >
  </ModalCard>);
};
