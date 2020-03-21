import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { initialState, reducer } from "./reducers";
import { StateProvider } from "./store";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

