import React from 'react';
import { ModalCard } from '@vkontakte/vkui';

import {MODAL_SKIPPED} from './Modal';

import Icon56RecentOutline from '@vkontakte/icons/dist/56/recent_outline';

export default (modalClose, modalParams) => {
  return (<ModalCard
    id={MODAL_SKIPPED}
    onClose={modalClose}
    icon={<Icon56RecentOutline />}
    header="Пропущено!"
    caption="К сожалению прошло больше 10 минут с момента отправки сообщения."
  >
  </ModalCard>);
};
