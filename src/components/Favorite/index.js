import React, { useState, useEffect, useContext } from 'react';
import "./style.scss"
import { MyContext } from "../../App"
import SingleMovieInfo from "../SingleMovieInfo"

const Fav = () => {
    const [favMovieId, setfavMovieId] = useState([]);
    const [favMovieInfo, setfavMovieInfo] = useState({})
    const { state: { language }, setLanguage } = useContext(MyContext);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/favoriteMovies")
            .then(res => res.json())
            .then(res => setfavMovieId(res))
    }, []);

    console.log(display)

    const seeMore = (id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4f3f0e045dad6e5691568c0932c0e161&language=${language}`)
            .then(res => res.json())
            .then(res => setfavMovieInfo(res));
        setDisplay(display === false ? true : false);
        if (display) {
            setDisplay(false)
        }
    }


    return (
        <>
            <section className="container favorite">
                <div className="row">
                    <h1 className="col-12">Twoje ulubione filmy to:</h1>
                </div>
            </section>
            <div className="container main">
                <div className="row">
                    {(display && <SingleMovieInfo setDisplay={setDisplay} movieInfo={favMovieInfo} />)}
                    <table className=" table">
                        <thead>
                            <tr>
                                <th scope="col">L.p.</th>
                                <th scope="col">Tytuł</th>
                                <th scope="col">Data</th>
                                <th scope="col">Ocena</th>
                                <th scope="col">Więcej:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favMovieId.map((el, i) => (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{el.title}</td>
                                    <td>{el.release}</td>
                                    <td>{el.rating}/10</td>
                                    <td><button className="buttonFav" onClick={(event) => seeMore(el.id)}>Zobacz więcej</button></td>
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
