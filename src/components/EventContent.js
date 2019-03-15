import React from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css'
import '../style/bootstrap.min.css'
import '../style/index.css'
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../style/landing-page.min.css';
import imageevent from '../img/imageevent.png'


const EventContent = props => {
    return(
        <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                <div class="col-lg-4">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                        <img src={imageevent} style={{width: '320px', height: '200px', paddingBottom: '10px'}}/>
                    </div>
                    <br></br><br></br><br></br><br></br>
                    <h5>Fully Responsive</h5>
                    <p class="lead mb-0" style={{fontWeight: '8px'}}>This theme will look great on any device, no matter the size!</p><br></br>
                    <Link to='/detailevent' className='nav-link'><button type="submit" class="btn btn-block btn-lg btn-primary" style={{width: '50%', marginLeft: '75px', fontWeight: '10px'}}>View Details</button></Link>
                    {/* <button type="submit" class="btn btn-block btn-lg btn-primary" style={{width: '50%', marginLeft: '75px'}}>View Details</button> */}
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                        <img src={imageevent} style={{width: '320px', height: '200px', paddingBottom: '10px'}}/>
                    </div>
                    <br></br><br></br><br></br><br></br>
                    <h5>Fully Responsive</h5>
                    <p class="lead mb-0" style={{fontWeight: '8px'}}>This theme will look great on any device, no matter the size!</p><br></br>
                    <Link to='/detailevent' className='nav-link'><button type="submit" class="btn btn-block btn-lg btn-primary" style={{width: '50%', marginLeft: '75px', fontWeight: '10px'}}>View Details</button></Link>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div class="features-icons-icon d-flex">
                        <img src={imageevent} style={{width: '320px', height: '200px', paddingBottom: '10px'}}/>
                    </div>
                    <br></br><br></br><br></br><br></br>
                    <h5>Fully Responsive</h5>
                    <p class="lead mb-0" style={{fontWeight: '8px'}}>This theme will look great on any device, no matter the size!</p><br></br>
                    <Link to='/detailevent' className='nav-link'><button type="submit" class="btn btn-block btn-lg btn-primary" style={{width: '50%', marginLeft: '75px', fontWeight: '10px'}}>View Details</button></Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default connect("is_login", actions)(EventContent)

  