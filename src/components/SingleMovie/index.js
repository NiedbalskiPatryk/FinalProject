import React from 'react';
import "./style.scss"

const SingleMovie = props => {
    const { title, img, release, rating, overview, id } = props;

    const imgLink = "http://image.tmdb.org/t/p/w185/"
    return (
        <>
            <div className="col-sm-12 col-md-5 col-lg-5 col-xl-4 single-movie" key={id}>
                <h3>{title}</h3>
                <img src={imgLink + img} alt="" />
                <p className="date">{release}</p>
                <p className="rating">{rating}</p>
                <p className="overview">{overview}</p>
            </div>

        </>

    );
}

export default SingleMovie;
