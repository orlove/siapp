import React from 'react';
import { ModalCard } from '@vkontakte/vkui';

import Icon28HomeOutline from '@vkontakte/icons/dist/28/home_outline';

export default (MODAL_ARE_AT_HOME, modalClose, permission) => {
  return (<ModalCard
    id={MODAL_ARE_AT_HOME}
    onClose={() => modalClose()}
    icon={<Icon28HomeOutline />}
    header="Вы подтверждаете что находитесь дома?"
    caption={<p>Баллы будут начисляться только за нахождение там, где вы находитесь сейчас.<br />Не забудьте разрешить данные о местоположении.</p>}
    actions={[{
      title: 'Да, подтверждаю',
      mode: 'primary',
      action: permission
    }]}
  >
  </ModalCard>);
}
