import React, { useState, useContext } from 'react';
import SingleMovie from "../SingleMovie"
import "./style.scss"
import { MyContext } from "../../App"

const Main = () => {
    const [value, setValue] = useState("");
    const [movies, setMovie] = useState([]);
    // const [language, setLanguage] = useState("");
    const { state: { language }, setLanguage } = useContext(MyContext);

    const handleChange = (event) => {
        setValue(event.target.value)
        searchMovies(event.target.value)
    };

    console.log(language)
    const searchMovies = (query) => {
        if (!query.length) {
            return setMovie([])
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f3f0e045dad6e5691568c0932c0e161&language=${language}&page=1&include_adult=false&query=${query}`)
            .then(res => res.json())
            .then(res => setMovie(res.results))
    }

    const selectedOption = e => {
        e.preventDefault();
        setLanguage(e.target.value);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <main className="col-12">
                        <h1>Witaj w aplikacji do wyszukiwania filmów</h1>
                        <form>
                            <label htmlFor="">Wpisz tytuł filmu jaki szukasz:</label>
                            <input type="text" onChange={handleChange} value={value} />
                            <label htmlFor="">Wybierz język</label>
                            <div className="select">
                                <select onChange={selectedOption} name="" id="">
                                    <option value="pl-PL">PL</option>
                                    <option value="en-US">EN</option>
                                    <option value="ru-RU">RU</option>
                                    <option value="de-DE">DE</option>
                                </select>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
            <div className="container main">
                <div className="row relative">
                    {movies.slice(0, 6).map(movie => {
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