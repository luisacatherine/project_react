import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import photoComedy from '../img/comedy.jpg'
import { Link } from 'react-router-dom';

class Comedy extends Component {
    render(){
        return(
            <div className="Comedy">
                <div className="text-center">
                    <h2 style={{marginTop: '20px'}}>Comedy</h2>
                    <img src={photoComedy} style={{width: '100%'}} className="picture"/>
                    <Link to="/comedy">
                        <button type="button" className="btn btn-primary">
                            See Movies
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Comedy