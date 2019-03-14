import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import Action from "../components/Action"
import Romance from '../components/Romance';
import Fiction from "../components/Fiction.js";
import Comedy from "../components/Comedy"

class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Romance />
                        </div>
                        <div className="col-md-3">
                            <Action />
                        </div>
                        <div className="col-md-3">
                            <Fiction />
                        </div>
                        <div className="col-md-3">
                            <Comedy />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home