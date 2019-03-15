import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
// import Search from '../components/Search';
import background from '../img/imageEvent.png';
import Carousel from '../components/Carousel';

class Cover extends Component {
    render(){
        return(
            <div className="Home">
                <div className="container" style={{backgroundImage: {background}}}>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel />
                        </div>
                        {/* <div className="col-md-9">
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cover