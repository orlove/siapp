/**
 * Методы для работы с регионами
 */

const api = {rating: {
  /**
   * Рейтинг срежи всех
   * @param {Function} handler обработчик ответа в случае успеха
   */
  global: (handler) => {
    return api.request({method: 'rating/global', handler: handler});
  }
}};

export default api;
