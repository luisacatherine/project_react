import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../css/bootstrap.css'
import '../style/bootstrap.min.css'
// import '../css/style.css';


const Bandara = props => {
return (

    <div className="container" style={{width: '100%'}}>
        <div className="well">
            <div className="media">
                {/* <a className="pull-left" href="#">
                    <img className="media-object" src={props.img} style={{height: '200px', width: '155px'}}/>
                </a> */}
            <div className="media-body">
            <br></br>
                {/* <h4 className="media-heading text-left">{props.title}</h4><br></br> */}
                    <p className="text-left">{props.name}</p><br></br>
                    <p className="text-left">{props.code}</p>
                </div>
                </div>
                </div>
                </div>
                    
                );
                };

Bandara.propTypes = {
name: PropTypes.string.isRequired,
code: PropTypes.string.isRequired
};
  


export default Bandara;


