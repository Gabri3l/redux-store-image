import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import UploadFile from "./components/UploadFile";
import UploadFileV2 from "./components/UploadFileV2";
import counter from "./reducers";

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootEl = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <React.Fragment>
      <h2>Handling images in Redux</h2>
      <p>Use your Redux Devtools to check how the image is stored in your state in both examples.</p>
      <UploadFile
        onFileLoaded={imageFile =>
          store.dispatch({
            type: "LOAD_FILE",
            payload: imageFile
          })
        }
      />
      <UploadFileV2
        onFileLoaded={imageFile =>
          store.dispatch({
            type: "LOAD_FILE",
            payload: imageFile
          })
        }
      />
    </React.Fragment>,
    rootEl
  );
};
render();
store.subscribe(render);
