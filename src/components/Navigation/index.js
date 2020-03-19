import React, { useState, useContext } from 'react';
import "./style.scss";
import {
    HashRouter as Router,
    NavLink,
} from 'react-router-dom';
import { MyContext } from "../../App"


const Navigation = () => {
    const [display, setDisplay] = useState("none");
    const [display2, setDisplay2] = useState("none");
    const [flag, setFlag] = useState(false);
    const { state: { language }, setLanguage } = useContext(MyContext);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplay(display === "none" ? "inline-block" : "none");
        setDisplay2(display2 === "none" ? "flex" : "none");
        setFlag(flag === false ? true : false)
    }

    var text;
    const switchlanguge = (language, text1, text2, text3, text4) => {
        switch (language) {
            case "pl-PL":
                text = text1
                break;
            case "en-US":
                text = text2;
                break;
            case "de-DE":
                text = text3;
                break;
            case "ru-RU":
                text = text4;
                break;
            default:
                console.log("eerrrorrr")
        }
    }

    return (
        <div className="container">
            <div className="row">
                <nav className="col-12">
                    <ul>
                        <div className="logoDiv">
                            <div className="logo"></div>
                            {(!flag && <i onClick={handleClick} className={`fas fa-bars`}></i>)}
                            {(flag && <i onClick={handleClick} className="fas fa-times"></i>)}
                        </div>
                        <div className={`${display2} navList`}>
                            <Router>
                                <li> <NavLink to="/" >{switchlanguge(language, "Strona główna", "Home", "Zuhause", "дома")}{text}</NavLink></li>
                                <li> <NavLink to="/fav" >{switchlanguge(language, "Ulubione", "Favorite", "Favoriten", "Избранные")}{text}</NavLink></li>
                                <li> <NavLink to="/popular" >{switchlanguge(language, "Dzisiaj polecane", "Recommended", "Heute empfohlen", "Рекомендуется сегодня")}{text}</NavLink></li>
                                <li> <NavLink to="/top" >{switchlanguge(language, "Top wszechczasów", "Top of all time", "Top aller Zeiten", "Топ всех времен")}{text}</NavLink></li>
                            </Router>
                        </div>


                    </ul >
                </nav >
            </div>
        </div >
    );
}

export default Navigation;
