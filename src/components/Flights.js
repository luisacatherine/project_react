import React from 'react';
import PropTypes from 'prop-types';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/index.css';

const Flights = (props) => {
    return(
        <div className="Flights">
            <div className="container">
                <div className="movieBox">
                    {/* <div className="row"> */}
                        <p className="movie-synopsis">Origin Airport: {props.originAirport}</p>
                        <p className="movie-synopsis">Origin City: {props.originCity}</p> 
                        <p className="movie-synopsis">Destination Airport: {props.destinationAirport}</p> 
                        <p className="movie-synopsis">Destination City: {props.destinationCity}</p> 
                        <p className="movie-synopsis">Price: {props.price}</p>
                        <p className="movie-synopsis">Tanggal Berangkat: {props.berangkat}</p>
                        <p className="movie-synopsis">Tanggal Pulang: {props.pulang}</p>
                    {/* </div> */}
                </div>           
            </div>
        </div>
    );
};

Flights.propTypes = {
    originAirport: PropTypes.string,
    originCity: PropTypes.string,
    destinationAirport: PropTypes.string,
    destinationCity: PropTypes.string,
    price: PropTypes.number,
    berangkat: PropTypes.string,
    pulang: PropTypes.string
}

export default Flights;