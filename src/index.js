import './scss/app.scss';


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './redux/store';
import App from './App';
import {Provider} from 'react-redux';

window.store = store;

console.log(store.getState());


store.subscribe(() => console.log('хринилище изменилось: ',store.getState()));


store.dispatch({ type: 'counter/decremented' });

const inc = () => {
  store.dispatch({ type: 'counter/incremented' });
}


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <button onClick={()=>{inc()}}>кнопка</button>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
