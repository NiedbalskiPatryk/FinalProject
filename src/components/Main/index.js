import React, { useState } from 'react';
import SingleMovie from "../SingleMovie"
import "./style.scss"

const Main = () => {
    const [value, setValue] = useState("");
    const [movies, setMovie] = useState([]);
    const [language, setLanguage] = useState({
        polish: true,
        english: false,
        deutsh: false,
    });


    const handleChange = (event) => {
        setValue(event.target.value)
        searchMovies(event.target.value)
    };

    const searchMovies = (query) => {
        if (!query.length) {
            return setMovie([])
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f3f0e045dad6e5691568c0932c0e161&language=pl-PL&page=1&include_adult=false&query=${query}`)
            .then(res => res.json())
            .then(res => setMovie(res.results))
    }

    return (
        <>
            <main className="container">
                <div className="row">
                    <h1 className="col-12">Witaj w aplikacji do wyszukiwania filmów</h1>
                    <form className="col-12">
                        <label htmlFor="">Wpisz tytuł filmu jaki szukasz:</label>
                        <input type="text" onChange={handleChange} value={value} />
                    </form>
                </div>
            </main>
            <div className="container">
                <div className="row">
                    {movies.map(movie => {
                        return (
                            <>
                                <SingleMovie
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    img={movie.poster_path}
                                    release={movie.release_date}
                                    rating={movie.vote_average}
                                    overview={movie.overview} />

                            </>
                        )
                    })}
                </div >
            </div>
        </>
    );
}

export default Main;