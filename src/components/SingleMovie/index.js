import React, { useState } from 'react';
import "./style.scss"

const SingleMovie = props => {
    const { title, img, release, rating, overview, id } = props;
    const [display, setDisplay] = useState("none");
    const [display2, setDisplay2] = useState("block");


    const handleClick = (e) => {
        e.preventDefault();
        setDisplay(display === "none" ? "block" : "none");
        setDisplay2(display2 === "none" ? "block" : "none")
    }

    const imgLink = "http://image.tmdb.org/t/p/w185/"
    return (
        <>
            <div className={`col-12 ${display} absolute container`} >
                <div className="row absoluteRow">
                    <img className="col-3" src={imgLink + img} alt="" />
                    <div className={`col-9`}>
                        <div className="absoluteDiv">
                            <h5>{title}</h5>
                            <p className="date">{release}</p>
                            <p className="rating">{rating}</p>
                            <button onClick={handleClick}>X</button>
                        </div>
                        <p className={`overview`}>{overview}</p>
                    </div>
                </div>
            </div>
            <div className={`col-6 col-lg-4 single-movie`} key={id}>
                <div className="container">
                    <div className="row">
                        <h5 className="col-12">{title}</h5>
                    </div>
                    <div className="row">
                        <img className="col-6" src={imgLink + img} alt="" />
                        <div className="col-6">

                            <p className="date">{release}</p>
                            <p className="rating">{rating}</p>
                            <button onClick={handleClick}>Zobacz opis</button>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleMovie;
