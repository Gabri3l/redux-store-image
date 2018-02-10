import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import UploadFile from './components/UploadFile';
import counter from './reducers';

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <UploadFile
      onFileLoaded={
        (imageFile) => store.dispatch({
          type: 'LOAD_FILE',
          payload: imageFile
        })
      }
    />,
    rootEl,
  );
};
render();
store.subscribe(render);
