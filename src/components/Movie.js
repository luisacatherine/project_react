import React from 'react';
import PropTypes from 'prop-types';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/index.css';

const Movie = (props) => {
    return(
        <div className="Movie">
            <div className="container">
                <div className="movieBox">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="movie-poster" src={props.poster}></img>
                        </div>
                        <div className="col-md-10">
                            <h2 className="movie-title">{props.title}</h2>
                            <p className="movie-year">{props.year}</p>
                            <p className="movie-synopsis">{props.synopsis}</p> 
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    );
};

Movie.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    synopsis: PropTypes.string,
    poster: PropTypes.string
}

export default Movie;