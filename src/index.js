
// import reRender from "./render";

import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.scss';

import store from "./redux/state";
import reportWebVitals from './reportWebVitals';

let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState());

store.subscribe(reRender);

reportWebVitals();
