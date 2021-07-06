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
