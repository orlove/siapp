import React from 'react';
import { ModalCard } from '@vkontakte/vkui';

import Icon28Messages from '@vkontakte/icons/dist/28/messages';

export default (MODAL_NOT_ALLOW_MESSAGES, modalClose, permission) => {
  return (<ModalCard
    id={MODAL_NOT_ALLOW_MESSAGES}
    onClose={() => modalClose()}
    icon={<Icon28Messages />}
    header="Вам нужно разрешить отправку сообщений"
    caption="Без данного разрешения приложение не сможет отправлять вам уведомления."
    actions={[{
      title: 'Повторить',
      mode: 'primary',
      action: permission
    }]}
  >
  </ModalCard>);
}
