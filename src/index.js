// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { sendToVercelAnalytics } from './vitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals(sendToVercelAnalytics);
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';

import App from './components/app';
import { CurrencyProvider } from './contexts/currency-context';
import store from './redux/store';
import history from './history';

// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
