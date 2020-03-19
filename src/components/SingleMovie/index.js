import React, { useState, useContext } from 'react';
import "./style.scss"
import { MyContext } from "../../App"



const SingleMovie = props => {
    const { title, img, release, rating, overview, id } = props;
    const [display, setDisplay] = useState("none");
    const [display2, setDisplay2] = useState("block");
    const { addToFavorite, state: { language } } = useContext(MyContext);

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

    const handleClick = (e) => {
        e.preventDefault();
        setDisplay(display === "none" ? "block" : "none");
        setDisplay2(display2 === "none" ? "block" : "none")
    }
    const imgLink = "http://image.tmdb.org/t/p/w185/"
    const imgLinkBig = "http://image.tmdb.org/t/p/w500/"
    return (
        <>
            <div className={`${display} absolute container`} >
                <div className="row absoluteRow">
                    <img className="col-5" src={imgLinkBig + img} alt="" />
                    <div className={`absoluteDiv col-7`}>
                        <button onClick={handleClick}>X</button>
                        <div className="titleDateRating">
                            <h5>{title}</h5>
                            <p className="date">{release}</p>
                            <p className="rating">{rating}/10</p>

                        </div>
                        <p className={`overview`}>{overview}</p>
                    </div>
                </div>
            </div>
            <div className={` col-lg-4 col-sm-6 col-12 single-movie`} key={id}>
                <div className="container">
                    <div className="row">
                        <h5 className="col-12">{title}</h5>
                    </div>
                    <div className="row">
                        <img className="col-6" src={imgLink + img} alt="" />
                        <div className="col-6 movieInfo">
                            <p className="date">{release}</p>
                            <p className="rating">{rating}/10</p>
                            <button onClick={handleClick}>{switchlanguge(language, "Zobacz opis", "See more", "Siehe Beschreibung", "Посмотреть описание")}{text}</button>
                            < button onClick={() => addToFavorite(title, img, rating, id, release)}>{switchlanguge(language, "Dodaj do ulubionych", "Add to Favorites", "Zu den Favoriten hinzufügen", "Добавить в избранное")}{text}</button>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleMovie;
