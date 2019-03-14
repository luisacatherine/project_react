import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import { connect } from "unistore/react";
import { actions } from "../store";
import logo from "../logo.svg";
import { Link } from 'react-router-dom';

class SignIn extends Component {
    doLogIn = () => {
        this.props.postLogin().then(() => {
            console.log("this", this);
            this.props.history.replace("/profile")
        });
    }
    render(){
        console.log("sign in props", this.props);
        return(
            <section className="content signin container">
                <div className="container-sign text-center">
                    <img src={logo} style={{ width: '25%' }}/>
                    <h3 className="text-center">Movies</h3>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className = "form-control"
                                onChange={e => this.props.setField(e)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className = "form-control"
                                onChange={e => this.props.setField(e)}
                            />
                        </div>
                        <button class="btn btn-primary btn-block" onClick={() => this.doLogIn()}>SIGN IN</button><br/>
                        <p>Belum punya akun? Daftar<Link to='/signup' className='nav-link' style={{display: 'inline'}}>di sini!</Link></p>
                    </form>
                </div>
            </section>
        )
    }
}

export default connect("is_login", actions)(withRouter(SignIn));