/**
 * Действия связанные с балами
 */

/**
 * Обновление балов
 *
 * @param  {Object} level
 * @return {Promise}
 */
export const updateLevel = (level) => {
  return new Promise((resolve, reject) => {
      resolve({
        type: 'LEVEL_UPDATE',
        level: level
      });
  });
};
