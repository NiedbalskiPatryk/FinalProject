import React, { useState, useContext } from 'react';
import SingleMovie from "../SingleMovie"
import "./style.scss"
import { MyContext } from "../../App"

const Main = () => {
    const [value, setValue] = useState("");
    const [movies, setMovie] = useState([]);
    const { state: { language }, setLanguage } = useContext(MyContext);

    const handleChange = (event) => {
        setValue(event.target.value)
        searchMovies(event.target.value)
    };

    console.log(movies)
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
            <div className="container">
                <div className="row">
                    <main className="col-12">
                        <h1> {switchlanguge(language, "Witaj w aplikacji do wyszukiwania filmów",
                            "Welcome to the movie search application", "Willkommen in der Filmsuchanwendung",
                            "Добро пожаловать в приложение для поиска видео")} {text}</h1>
                        <form>
                            <label htmlFor="">{switchlanguge(language, "Wpisz tytuł filmu:", "Enter the title of the movie you are looking for:", "Geben Sie den Titel des gesuchten Films ein:", "Введите название фильма, который вы ищете:")}{text}</label>
                            <input type="text" onChange={handleChange} value={value} />
                            <label htmlFor="">{switchlanguge(language, "Wybierz język", "Choose language", "Wähle eine Sprache", "Выбрать язык")}{text}</label>
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