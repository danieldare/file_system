import React from 'react';
import './App.css';
import FileManager from './components/FileManager/FileManager';
import {  BrowserRouter, Route  } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    <Route
          to="*"
          component={({ location, history }) => {
          return <FileManager
          history={history}
          location={location.pathname}
        />
          }
        }
        />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
