import React, { useState, useEffect, useContext } from 'react';
import SingleMovie from "../SingleMovie"
import "./style.scss"
import { MyContext } from "../../App"

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const { state: { language } } = useContext(MyContext);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4f3f0e045dad6e5691568c0932c0e161&language=${language}&page=1`)
            .then(res => res.json())
            .then(res => setPopular(res.results))
    }, []);

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
            <section className="container">
                <div className="row">
                    <h1 className="col-12">{switchlanguge(language, "Lista najbardziej populanych filmów w dniu", "List of the most popular movies of the day", "Liste der beliebtesten Filme des Tages", "Список самых популярных фильмов дня")} {text} {new Date().toLocaleDateString()}</h1>
                    <div className="container">
                        <div className="row relative">
                            {popular.slice(0, 6).map(movie => {
                                return (<SingleMovie
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    img={movie.poster_path}
                                    release={movie.release_date}
                                    rating={movie.vote_average}
                                    overview={movie.overview} />)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Popular;
