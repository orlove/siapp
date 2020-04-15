import React from 'react';
import { ModalCard } from '@vkontakte/vkui';

import Icon28CompassOutline from '@vkontakte/icons/dist/28/compass_outline';

export default (MODAL_NOT_ALLOW_LOCATION, modalClose, permission) => {
  return (<ModalCard
    id={MODAL_NOT_ALLOW_LOCATION}
    onClose={() => modalClose()}
    icon={<Icon28CompassOutline />}
    header="Вам нужно разрешить доступ к геопозиции"
    caption="Без данного разрешения приложение не сможет начислять вам баллы"
    actions={[{
      title: 'Повторить',
      mode: 'primary',
      action: permission
    }]}
  >
  </ModalCard>);
}
