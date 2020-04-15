import React from 'react';
import { ModalCard } from '@vkontakte/vkui';

import {MODAL_NO_GEODATA} from './Modal';

import Icon32Place from '@vkontakte/icons/dist/32/place';

export default (modalClose, modalParams) => {
  return (<ModalCard
    id={MODAL_NO_GEODATA}
    onClose={modalClose}
    icon={<Icon32Place />}
    header="Нет доступа к местоположению"
    caption="Невозможно проверить соблюдение карантина"
  >
  </ModalCard>);
};
