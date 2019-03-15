import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
// import photoAction from '../img/action.jpg'
import { Link } from 'react-router-dom';
import image from '../img/imageEvent.png'
import '../style/style.css';
import '../style/index.css';

class Carousel extends Component {
    render(){
        return(
        <section>
            <div id="front-banner">
                <div class="banner-element"><img src="./assets/img/profile.png" alt="" id="profile-img"/></div>
                <div class="banner-element"><h1><span class="wow2">Are You Ready</span><span class="wow">For The Powerful Event</span> </h1></div>
                <Link to='/home' className='nav-link'><div class="banner-element"><button type="button" class="btn btn-danger">NEXT</button></div></Link>
            </div>
        </section>
        )
    }
}

export default Carousel

