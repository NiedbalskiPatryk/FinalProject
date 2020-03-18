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
import { toast, ToastContainer } from 'react-toastify';
import Footer from "./components/Footer"


export const MyContext = React.createContext(null);

function App() {
  const [state, setstate] = useState({ language: "pl-PL" });

  const api = "http://localhost:4000/favoriteMovies";


  const addToFavorite = (title, img, rating, id, release) => {
    const body = { title, img, rating, id, release };
    fetch(`${api}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(id => {
        toast.success('Dodano', {
          position: toast.POSITION.TOP_CENTER
        });
      })
      .catch(err => {
        toast.error("Movie already in favourites !", {
          position: toast.POSITION.TOP_CENTER
        });
      })

  };


  const setLanguage = (lng) => {
    setstate(prev => ({ ...prev, language: lng }))
  }
  console.log(state.language)
  return (
    <MyContext.Provider value={{ state, setLanguage, addToFavorite }}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/fav" component={Fav}></Route>
          <Route path="/top" component={Top}></Route>
          <Route path="/popular" component={Popular}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </Router >
      <ToastContainer autoClose={6000} />
      <Footer />
    </MyContext.Provider>
  );
}

export default App;
