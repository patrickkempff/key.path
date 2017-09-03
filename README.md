# key.path

Performant micro library for managing values for the derived property identified by a 
given key path. 

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install key.path --save 
```

Install with [yarn](http://yarnpkg.com/)

```sh
$ yarn add key.path --save
```

## Usage

**String based key path:**

```js
import { valueForKeyPath } from 'key.path'

const post = {title: 'post', author: {name: 'Stephen King'}}

valueForKeyPath('author.name', post)
//=> Stephen King
```

**Array based key path:**

Optionally pass the key as an array (this is useful when you need to dynamically build up the property name)

```js
const post = {title: 'post', author: {name: 'Stephen King'}}

valueForKeyPath(['author', 'name'], post)
//=> Stephen King
```

## License

Copyright © 2017, [Patrick Kempff](https://github.com/patrickkempff).
Released under the [MIT license](https://github.com/patrickkempff/key.path/blob/master/LICENSE).

