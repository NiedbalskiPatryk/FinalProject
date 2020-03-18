import React, { useState } from 'react';
import "./style.scss";
import {
    HashRouter as Router,
    NavLink,
} from 'react-router-dom';

const Navigation = () => {
    const [display, setDisplay] = useState("none");
    const [display2, setDisplay2] = useState("none");



    const handleClick = (e) => {
        e.preventDefault();
        setDisplay(display === "none" ? "inline-block" : "none");
        setDisplay2(display2 === "none" ? "flex" : "none");

    }


    // style={{ display: display }}
    return (
        <div className="container">
            <div className="row">
                <nav className="col-12">
                    <ul>
                        <div className="logoDiv">
                            <div className="logo"></div>
                            <i onClick={handleClick} className={`fas fa-bars`}></i>
                        </div>
                        <div className={`${display2} navList`}>
                            <Router>
                                <li> <NavLink to="/" >Strona główna</NavLink></li>
                                <li> <NavLink to="/fav" >Ulubione</NavLink></li>
                                <li> <NavLink to="/popular" >Dzisiaj polecane</NavLink></li>
                                <li> <NavLink to="/top" >Top wszechczasów</NavLink></li>
                            </Router>
                        </div>


                    </ul >
                </nav >
            </div>
        </div >
    );
}

export default Navigation;
