/**
 *
 */

const api = {home: {
  /**
   * Список регионов России или стран
   * @param {Object} body данные пользователя с координатами дома
   * @param {Function} handler обработчик ответа в случае успеха
   */
  begin: (body, handler) => {
    return api.post({method: 'home/begin', body: body, handler: handler});
  },

  /**
   * Получает уровень
   * @param {Integer} uid ид. пользователя
   * @param {Function} handler обработчик ответа в случае успеха
   */
  level: (uid, handler) => {
    return api.request({method: 'home/level?uid='+uid, handler: handler});
  },

  /**
   * Подтвердить нахождение дома
   * @param {Integer} uid ид. пользователя
   * @param {Float} lat
   * @param {Float} long
   * @param {Function} handler обработчик ответа в случае успеха
   */
  confirm: (uid, lat, long, handler) => {
    let params = {uid: uid};

    if(lat) {
      params.lat = lat;
      params.long = long;
    }

    return api.request({method: 'home/confirm?'+Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&'), handler: handler});
  },
}};

export default api;
