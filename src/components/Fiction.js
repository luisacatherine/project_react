import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import photoFiction from '../img/fiction.jpg'
import { Link } from 'react-router-dom';

class Fiction extends Component {
    render(){
        return(
            <div className="Fiction">
                <div className="text-center">
                    <h2 style={{marginTop: '20px'}}>Fiction</h2>
                    <img src={photoFiction} style={{width: '100%'}} className="picture"/>
                    <Link to="/fiction">
                        <button type="button" className="btn btn-primary">
                            See Movies
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Fiction