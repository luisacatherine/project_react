import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import photoRomance from '../img/romance.jpg'
import { Link } from 'react-router-dom';

class Romance extends Component {
    render(){
        return(
            <div className="Romance">
                <div className="text-center">
                    <h2 style={{marginTop: '20px'}}>Romance</h2>
                    <img src={photoRomance} style={{width: '100%'}} className="picture"/>
                    <Link to="/romance">
                        <button type="button" className="btn btn-primary">
                            See Movies
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Romance