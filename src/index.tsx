import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store-index';
import registerServiceWorker from './registerServiceWorker';
import { TripLayout } from './components/TripLayout';

ReactDOM.render(
  <Provider store={store}>
    <TripLayout />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
