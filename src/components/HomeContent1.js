import React from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css'
import '../style/bootstrap.min.css'
import '../style/index.css'
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../style/landing-page.min.css';


const Content1 = props => {
    return(
        <header class="masthead text-white text-center">
        <div class="overlay"></div>
        <div class="container-fluid" style={{margin: '0px'}}>
          <div class="row">
            <div class="col-xl-9 mx-auto">
              <h1 class="mb-5">Are You Ready For The Greatest Event Of The Year ?</h1>
            </div>
            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form>
                <div class="form-row">
                  <div class="col-12 col-md-9 mb-2 mb-md-0">
                    <input type="email" class="form-control form-control-lg" placeholder="Search event..." />
                  </div>
                  <div class="col-12 col-md-3">
                    <button type="submit" class="btn btn-block btn-lg btn-primary">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
}

export default connect("is_login", actions)(Content1)

