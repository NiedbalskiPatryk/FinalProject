import React from 'react';
import './App.css';
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
        <NavLink to="/" >Strona główna</NavLink>
        <NavLink to="/fav" >Ulubione</NavLink>
        <NavLink to="/popular" >Dzisiaj polecane</NavLink>
        <NavLink to="/top" >Top wszechczasów</NavLink>
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
