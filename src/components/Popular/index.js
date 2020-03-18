import React, { useState, useEffect, useContext } from 'react';
import SingleMovie from "../SingleMovie"
import "./style.scss"
import { MyContext } from "../../App"

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const { state: { language }, setLanguage } = useContext(MyContext);

    console.log(language)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4f3f0e045dad6e5691568c0932c0e161&language=${language}&page=1`)
            .then(res => res.json())
            .then(res => setPopular(res.results))
    }, []);

    console.log(popular);

    return (
        <>
            <section className="container">
                <div className="row">
                    <h1 className="col-12">Lista najbardziej populanych filmów w dniu {new Date().toLocaleDateString()}</h1>
                    <div className="container">
                        <div className="row relative">
                            {popular.map(movie => {
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
