import React, { useState, useEffect, useContext } from 'react';
import SingleMovie from "../SingleMovie";
import { MyContext } from "../../App"


const Top = () => {
    const [top, setTop] = useState([]);
    const { state: { language } } = useContext(MyContext);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=4f3f0e045dad6e5691568c0932c0e161&language=${language}&page=1`)
            .then(res => res.json())
            .then(res => setTop(res.results))
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
                    <h1 className="col-12">{switchlanguge(language, "Top 6 Najlepszych filmów wszech czasów to:", "The Top 20 Best Movies of All Time are:", "Die Top 20 der besten Filme aller Zeiten sind:",
                        "Топ 20 лучших фильмов всех времен:")}{text}</h1>
                    <div className="container">
                        <div className="row relative">
                            {top.slice(1, 7).map(movie => {
                                return (
                                    <SingleMovie
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

export default Top;
