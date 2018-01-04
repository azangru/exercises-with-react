import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { AppContainer } from 'react-hot-loader';

function render(Root) {
  ReactDOM.render(<AppContainer><Root/></AppContainer>, document.getElementById('root'));
}

render(App);

if(module.hot) {
  module.hot.accept('./containers/app', () => {
    render(require('./containers/app').default);
  });
}
