/**
 * 获取sessionStorage的值
 * @param {String} 键
 * @param {*} 当键的值不存在时['', null, undefined, 0, false]的默认值(为'')
 * @param {Boolean} 是否转为JSON格式(默认为true)
 */
function getSessionStorage(key) {
  // defaultValue = window.sessionStorage.getItem(key)
  // if (value) {
  //   return parseJSON ? JSON.parse(value) : value
  // }
  return window.sessionStorage.getItem(key)
}

/**
 * 设置sessionStorage的值
 * @param {String} 键
 * @param {*} 要保存的值
 * @param {Boolean} 是否转为JSON格式(默认为true)
 */
function setSessionStorage(key, value) {
  window.sessionStorage.setItem(key, value)
}

export {
  getSessionStorage,
  setSessionStorage
}
