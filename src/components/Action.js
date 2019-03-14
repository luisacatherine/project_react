import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import photoAction from '../img/action.jpg'
import { Link } from 'react-router-dom';

class Action extends Component {
    render(){
        return(
            <div className="Action">
                <div className="text-center">
                    <h2 style={{marginTop: '20px'}}>Action</h2>
                    <img src={photoAction} style={{width: '100%'}} className="picture"/>
                    <Link to="/action">
                        <button type="button" className="btn btn-primary">
                            See Movies
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Action