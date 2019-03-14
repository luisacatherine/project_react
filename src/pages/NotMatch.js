import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/index.css';
import logo from "../logo.svg";

class NotMatch extends Component{
    render(){
        return(
            <div className="NotMatch">
                <div className="container-sign">
                    <div className="text-center">
                        <img src={logo} style={{ width: '25%' }}/>
                        <h3>Pages not found</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotMatch;