import React, { useState, useEffect } from 'react';
import SingleMovie from "../SingleMovie"

const Top = () => {
    const [top, setTop] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetch("    https://api.themoviedb.org/3/movie/top_rated?api_key=4f3f0e045dad6e5691568c0932c0e161&language=pl-PL&page=1")
            .then(res => res.json())
            .then(res => setTop(res.results))
    }, []);

    return (
        <>
            <section className="container">
                <div className="row">
                    <h1 className="col-12">Top 20 Najlepszych filmów wszech czasów to:</h1>
                    <div className="container">
                        <div className="row">
                            {top.map(movie => {
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
