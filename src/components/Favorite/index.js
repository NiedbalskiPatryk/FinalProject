import React, { useState, useEffect, useContext } from 'react';
import "./style.scss"
import { MyContext } from "../../App"
import SingleMovieInfo from "../SingleMovieInfo"
import { toast } from 'react-toastify';

const Fav = () => {
    const [favMovieId, setfavMovieId] = useState([]);
    const [favMovieInfo, setfavMovieInfo] = useState({})
    const { state: { language } } = useContext(MyContext);
    const [display, setDisplay] = useState(false);

    // useEffect(() => {
    //     fetch("http://localhost:4000/favoriteMovies")
    //         .then(res => res.json())
    //         .then(res => setfavMovieId(res))
    // }, []);

    useEffect(() => {
        fetchMovie()
    }, []);

    const fetchMovie = () => {
        fetch("http://localhost:4000/favoriteMovies")
            .then(res => res.json())
            .then(res => setfavMovieId(res))
    }


    const seeMore = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f3f0e045dad6e5691568c0932c0e161&language=${language}`)
            .then(res => res.json())
            .then(res => setfavMovieInfo(res));
        setDisplay(display === false ? true : false);
        if (display) {
            setDisplay(false)
        }
    }

    const deleteFav = (id) => {
        fetch(`http://localhost:4000/favoriteMovies/${id}`, {
            method: "DELETE"
        }).then(res => {
            toast.info('Usunięto', {
                position: toast.POSITION.TOP_CENTER
            })

        }).then(res => fetchMovie())
    };

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
        <>
            <section className="container favorite">
                <div className="row">
                    <h1 className="col-12">{switchlanguge(language, "Twoje ulubione filmy to:", "Your favorite movies are:", "Deine Lieblingsfilme sind:", "Ваши любимые фильмы:")}{text}</h1>
                </div>
            </section>
            <div className="container main">
                <div className="row">
                    {(display && <SingleMovieInfo setDisplay={setDisplay} movieInfo={favMovieInfo} />)}
                    <table className=" table">
                        <thead>
                            <tr>
                                <th scope="col">{switchlanguge(language, "L.p.", "L.p.", "L.p.", "Л.П.")}{text}</th>
                                <th scope="col">{switchlanguge(language, "Tytuł", "Title", "Titel", "название")}{text}</th>
                                <th scope="col">{switchlanguge(language, "Data", "Release", "Freisetzung", "дата")}{text}</th>
                                <th scope="col">{switchlanguge(language, "Ocena", "Rating", "Bewertung", "рейтинг")}{text}</th>
                                <th scope="col">{switchlanguge(language, "Więcej:", "More:", "Mehr:", "Больше:")}{text}</th>
                                <th scope="col">{switchlanguge(language, "Usuń:", "Delete:", "Löschen:", "Удалить:")}{text}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favMovieId.map((el, i) => (
                                <tr key={el.title}>
                                    <td>{i + 1}</td>
                                    <td>{el.title}</td>
                                    <td>{el.release}</td>
                                    <td>{el.rating}/10</td>
                                    <td><button className="buttonFav" onClick={(event) => seeMore(el.id)}>{switchlanguge(language, "Zobacz więcej", "See more", "Mehr sehen", "Увидеть больше")}{text}</button></td>
                                    <td><button className="buttonFav" onClick={(event) => deleteFav(el.id)}>{switchlanguge(language, "Usuń", "Remove", "Entfernen", "удалить")}{text}</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Fav;
