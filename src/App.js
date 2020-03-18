import React, { useState } from 'react';
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
import Navigation from './components/Navigation';

export const MyContext = React.createContext(null);

function App() {
  const [state, setstate] = useState({ language: "pl-PL" });
  const setLanguage = (lng) => {
    setstate(prev => ({ ...prev, language: lng }))
  }
  console.log(state.language)
  return (
    <MyContext.Provider value={{ state, setLanguage }}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/fav" component={Fav}></Route>
          <Route path="/top" component={Top}></Route>
          <Route path="/popular" component={Popular}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </Router >
    </MyContext.Provider>
  );
}

export default App;
