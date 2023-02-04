import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catWatcher from './saga';
import catSlice from './reducer'

const saga = createSagaMiddleware()

const store = configureStore({
  reducer :{
    cats : catSlice
  },
  middleware : [saga],
});

saga.run(catWatcher)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

