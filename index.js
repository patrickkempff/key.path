/*!
 * key.path <https://github.com/patrickkempff/key.path>
 *
 * Copyright (c) 2017, Patrick Kempff.
 * Licensed under the MIT License.
 */
 
const key = path => {
  return typeof path === 'string' ? path.split('.') : path
}

export const valueForKeyPath = (path, obj) => {
  return key(path).reduce((k1, k2) => (k1 && k1[k2]) ? k1[k2] : null, obj)
}
