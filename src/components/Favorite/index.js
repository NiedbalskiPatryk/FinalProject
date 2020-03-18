import React, { useState, useEffect } from 'react';
import "./style.scss"
// import SingleMovie from "../SingleMovie"

const Fav = () => {
    const [favMovieId, setfavMovieId] = useState([]);
    const [favMovie, setfavMovie] = useState([]);
    const [counter, setcounter] = useState(1);

    useEffect(() => {
        fetch("http://localhost:4000/favoriteMovies")
            .then(res => res.json())
            .then(res => setfavMovieId(res))
    }, []);

    // const arr = favMovieId.map(el => `https://api.themoviedb.org/3/movie/${el.id}?api_key=4f3f0e045dad6e5691568c0932c0e161&language=en-US`)

    console.log(favMovieId)
    // console.log(favMovapp ie)

    // console.log(arr)

    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=4f3f0e045dad6e5691568c0932c0e161&language=en-US


    return (
        <>
            <section className="container favorite">
                <div className="row">
                    <h1 className="col-12">Twoje ulubione filmy to:</h1>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <table className=" table">
                        <thead>
                            <tr>
                                <th>L.p.</th>
                                <th>Tytuł</th>
                                <th>Data</th>
                                <th>Ocena</th>
                                <th>Więcej:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favMovieId.map((el) => (
                                <tr>
                                    <td>{counter}</td>
                                    <td>{el.title}</td>
                                    <td>{el.release}</td>
                                    <td>{el.rating}</td>
                                    <td><button>Więcej!</button></td>
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
