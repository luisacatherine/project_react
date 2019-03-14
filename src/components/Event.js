import React from 'react';
import PropTypes from 'prop-types';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/index.css';

const Event = (props) => {
    return(
        <div className="Movie">
            <div className="container">
                <div className="movieBox">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="movie-poster" src={props.image}></img>
                        </div>
                        <div className="col-md-10">
                            <h2 className="movie-title">Event Name : {props.name}</h2>
                            <p className="movie-year">Event Link : {props.url}</p>
                            <p className="movie-synopsis">Ticket Sale : {props.startSale}</p> 
                            <p className="movie-synopsis">Event Starts : {props.startDate}</p> 
                            <p className="movie-synopsis">Event End : {props.endDate}</p> 
                            <p className="movie-synopsis">Minimum Price : {props.priceMin}</p> 
                            <p className="movie-synopsis">Maximum Price : {props.priceMax}</p> 
                            <p className="movie-synopsis">Longitude : {props.longitude}</p> 
                            <p className="movie-synopsis">Latitude : {props.latitude}</p> 
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    );
};

Event.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    startSale: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    priceMin : PropTypes.string,
    priceMax : PropTypes.string,
    longitude : PropTypes.string,
    latitude : PropTypes.string
}

export default Event;