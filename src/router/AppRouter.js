import React, { Component } from 'react';
import MainRoute from "./MainRoute";
import {withRouter} from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/index.css';

import Header from "../components/Header";

class AppAjax extends Component {
    postSignout = () => {
        this.props.postLogout();
        console.log(this.props.is_login)
        this.props.history.push("/");
    };

	render() {
    	return (
      		<div className="AppAjax">
              <Header postSignout={this.postSignout} />
              <MainRoute />
      		</div>
    	);
  	}
}

export default connect("is_login",actions)(withRouter(AppAjax));