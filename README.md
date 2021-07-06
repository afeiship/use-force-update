# use-force-update
> React hook use-force-update.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/use-force-update
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/use-force-update/dist/style.css";

  // or use sass
  @import "~@jswork/use-force-update/dist/style.scss";

  // customize your styles:
  $use-force-update-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import UseForceUpdate from '@jswork/use-force-update';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/use-force-update">
          <UseForceUpdate className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/use-force-update/


## license
Code released under [the MIT license](https://github.com/afeiship/use-force-update/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/use-force-update
[version-url]: https://npmjs.org/package/@jswork/use-force-update

[license-image]: https://img.shields.io/npm/l/@jswork/use-force-update
[license-url]: https://github.com/afeiship/use-force-update/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/use-force-update
[size-url]: https://github.com/afeiship/use-force-update/blob/master/dist/use-force-update.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/use-force-update
[download-url]: https://www.npmjs.com/package/@jswork/use-force-update
