/**
 * Комбинаяия редукторов
 */
import { combineReducers } from 'redux';
import level from './level';
import modal from './modal';

const appReducer = combineReducers({
    modal,
    level
});

const rootReducer = (state, action) => {
  // При разлогиневании пользователя стираем все состояние
  /*if (action.type === 'LOGOUT') {
    state = undefined
  }*/

  return appReducer(state, action)
}

export default rootReducer;
