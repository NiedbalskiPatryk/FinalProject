import React, { useState, useEffect } from 'react';
// import SingleMovie from "../SingleMovie"

const Fav = () => {
    const [favMovieId, setfavMovieId] = useState([]);
    const [favMovie, setfavMovie] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/favoriteMovies")
            .then(res => res.json())
            .then(res => setfavMovieId(res))
    }, []);

    // const arr = favMovieId.map(el => `https://api.themoviedb.org/3/movie/${el.id}?api_key=4f3f0e045dad6e5691568c0932c0e161&language=en-US`)

    console.log(favMovieId)
    // console.log(favMovie)

    // console.log(arr)

    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=4f3f0e045dad6e5691568c0932c0e161&language=en-US


    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="col-12">Twoje ulubione filmy to:</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <table className="col-12 table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {favMovieId.map(el => (
                                <tr>
                                    <td>{el.id}</td>
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
