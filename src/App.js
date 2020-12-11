import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css';
import Chat from './Chat'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch >
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path ="/">
              <h2>welcome</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
