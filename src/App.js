import React from 'react';
import './style.scss';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Main from "./components/Main/"
import Fav from "./components/Favorite/"
import Top from "./components/Top"
import Popular from "./components/Popular"

function App() {
  return (
    <>
      <Router>
        <nav className="container navbar navbar-dark bg-dark">
          <div className="row">
            <NavLink className="col-3 nav-item" to="/" >Strona główna</NavLink>
            <NavLink className="col-3 nav-item" to="/fav" >Ulubione</NavLink>
            <NavLink className="col-3 nav-item" to="/popular" >Dzisiaj polecane</NavLink>
            <NavLink className="col-3 nav-item" to="/top" >Top wszechczasów</NavLink>
          </div>
        </nav>
        <Switch>
          <Route path="/fav" component={Fav}></Route>
          <Route path="/top" component={Top}></Route>
          <Route path="/popular" component={Popular}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
