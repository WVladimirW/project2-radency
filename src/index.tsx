import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/state'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

let rerenderEntireTree = (state: any): void => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

