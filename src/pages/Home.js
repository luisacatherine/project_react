import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import Search from '../components/Search';
import Content1 from '../components/HomeContent1';
import EventContent from '../components/EventContent';
import DetailEvent from '../components/DetailEvent';
// import '../style/jquery.min.js';
// import '../style/bootstrap.bundle.min.js';

class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div className="container-fluid" style={{padding: '0px'}}>
                    <div className="row">
                        <div className="col-md-12">
                            <Content1 />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <EventContent />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <DetailEvent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home