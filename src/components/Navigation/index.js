import React from 'react';
import "./style.scss";
import {
    HashRouter as Router,
    NavLink,
} from 'react-router-dom';

const Navigation = () => {
    return (

        <div className="container navbar navbar-dark bg-dark">
            <div className="row">
                <nav className="container">
                    <ul className="row">
                        <Router>
                            <li className="col-3"> <NavLink to="/" >Strona główna</NavLink></li>
                            <li className="col-3"> <NavLink to="/fav" >Ulubione</NavLink></li>
                            <li className="col-3"> <NavLink to="/popular" >Dzisiaj polecane</NavLink></li>
                            <li className="col-3"> <NavLink to="/top" >Top wszechczasów</NavLink></li>
                        </Router>
                    </ul >
                </nav >
            </div>
        </div>

    );
}

export default Navigation;
