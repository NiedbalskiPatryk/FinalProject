import React, { useState, useEffect } from 'react';
import "./style.scss"

const SingleMovieInfo = (props) => {
    const { movieInfo, setDisplay } = props;

    const [state, setstate] = useState(movieInfo);

    const imgLinkBig = "http://image.tmdb.org/t/p/w300/"

    console.log(movieInfo)
    const handleClick = (e) => {
        setDisplay(false);
    }

    return (
        <>
            <div className="container absolute">
                <div className={`row absoluteRow`}>
                    <img className="col-5" src={imgLinkBig + movieInfo.poster_path} alt="" />
                    <div className={`absoluteDiv col-7`}>
                        <button onClick={handleClick} >X</button>
                        <div className="titleDateRating">
                            <h5>{movieInfo.title}</h5>
                            <p className="date">{movieInfo.release_date}</p>
                            <p className="rating">{movieInfo.vote_average}/10</p>
                        </div>
                        <p className={`overview`}>{movieInfo.overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleMovieInfo;
