import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.css'
import '../css/bootstrap.min.css'
import '../css/style.css';
// import putriayako from '../img/putriayako.jpeg'


const Movie = props => {
return (

    <div class="container" style={{width: '100%'}}>
        <div class="well">
            <div class="media">
                {/* <a class="pull-left" href="#">
                    <img class="media-object" src={props.img} style={{height: '200px', width: '155px'}}/>
                </a> */}
            <div class="media-body">
            <br></br>
                {/* <h4 class="media-heading text-left">{props.title}</h4><br></br> */}
                    <p class="text-left">{props.name}</p><br></br>
                    <p class="text-left">{props.code}</p>
                </div>
                </div>
                </div>
                </div>
                    
                );
                };

Movie.propTypes = {
name: PropTypes.string.isRequired,
code: PropTypes.string.isRequired
};
  


export default Movie;


