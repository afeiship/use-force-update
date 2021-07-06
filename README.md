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

## usage
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React, { useState } from 'react';
  import ReactDOM from 'react-dom';
  import useForceUpdate from '../src/main';
  import './assets/style.scss';

  const ForceComponent = () => {
    const [count, setCount] = useState({ value: 0 });
    const forceUpdate = useForceUpdate();
    return (
      <div className="is-counter">
        <button
          className="button is-primary"
          onClick={(e) => {
            console.log('update value use forceUdpate');
            count.value = count.value + 1;
            forceUpdate();
          }}>
          increase
        </button>
        <span>{count.value}</span>
        <button
          className="button is-danger"
          onClick={(e) => {
            console.log('set count use a new object.');
            setCount({ value: count.value - 1 });
          }}>
          decrease
        </button>
      </div>
    );
  };

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/use-force-update">
          <ForceComponent />
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
