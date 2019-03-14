import React from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css'
import '../style/bootstrap.min.css'
import '../style/index.css'
import { connect } from 'unistore/react';
import { actions } from '../store';

const Header = props => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Movie</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile' className='nav-link'>Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/signin' style={{ display: props.is_login ? 'none' : 'block' }} className='nav-link'>Log In</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' onClick={()=> props.postSignout()} style={{ display: props.is_login ? 'block' : 'none' }} className="nav-link">Log Out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default connect("is_login", actions)(Header)

