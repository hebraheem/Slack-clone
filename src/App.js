import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css';
import Chat from './Chat'
import Login  from './Login';
import {useStateValue} from './StateProvider';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  //const [user, setUser] = useState("");
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h2>welcome</h2>
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
