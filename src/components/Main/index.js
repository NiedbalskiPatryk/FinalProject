import React, { useState, useEffect } from 'react';

const Main = () => {
    const [value, setValue] = useState("");
    const [popular, setPopular] = useState([])
    const [top, setTop] = useState([]);
    const [movie, setMovie] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value)
        searchMovies(event.target.value)
    };

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4f3f0e045dad6e5691568c0932c0e161&language=en-US&page=1")
            .then(res => res.json())
            .then(res => setPopular(res.results))
    }, []);

    useEffect(() => {
        fetch("    https://api.themoviedb.org/3/movie/top_rated?api_key=4f3f0e045dad6e5691568c0932c0e161&language=en-US&page=1")
            .then(res => res.json())
            .then(res => setTop(res.results))
    }, []);

    const searchMovies = (query) => {
        if (!query.length) {
            return setMovie([])
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f3f0e045dad6e5691568c0932c0e161&language=en-US&page=1&include_adult=false&query=${query}`)
            .then(res => res.json())
            .then(res => setMovie(res.results))
    }

    const img = "http://image.tmdb.org/t/p/w185/"

    console.log(movie)
    return (
        <>
            <h1>Witaj w aplikacji do wyszukiwania filmów</h1>
            <form>
                <label htmlFor="">Wpisz tytuł filmu jaki szukasz:</label><br />
                <input type="text" onChange={handleChange} value={value} />
            </form>
            <div>
                {movie.map(el => {
                    return (
                        <>
                            <h2>{el.title}</h2>
                            <img src={img + el.poster_path} alt="" />
                            <p>{el.release_date}</p>
                            <p>{el.vote_average}</p>
                            <p>{el.overview}</p>
                        </>
                    )
                })}
            </div >
        </>
    );
}

export default Main;