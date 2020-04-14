/**
 * Редуктор балов
 */

export default function reducer(state = null, action) {
  switch (action.type) {
    // Обновление уровня
    case 'LEVEL_UPDATE':
      return Object.assign({}, state, {level: action.level});

    default:
      return state;
    }
}
