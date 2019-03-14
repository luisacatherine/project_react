import React, { Component } from 'react';
import axios from 'axios';
import '../css/bootstrap.min.css';
import '../css/listBlog.css';
// import Search from '../components/Search';
// import ListNews from '../components/ListNews';
import Movie from '../components/Blog';
import Navbar from '../components/Navbar';
import action from '../img/action.jpg';
import putriayako from '../img/putriayako.jpeg'

const urlMovie = " http://aviation-edge.com/v2/public/nearby?key=27dd45-83d3ac&lat=-5.466667&lng=122.6333&distance=500";

class Romance extends Component {
  constructor (props){
    super(props);
    this.state = {
      listMovie: []
    };
  }

  componentDidMount = () => {
    const self = this;
    axios 
      .get(urlMovie)
      .then(function (response) {
        self.setState({ listMovie: response.data});
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);        
      });
  }
  
  render() {
    console.log("here")
    const {listMovie} = this.state;
    console.log({listMovie})
    // console.log(listMovie[0])
    // console.log(listMovie[0].nameAirport)
    return (
      <div className="App">
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        <div class="row">
            <div class="col-md-12">
                <Navbar />
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                  {listMovie.map((item, key) => {
                    console.log(item.nameAirport)
                    const name = item.nameAirport === null ? "" : item.nameAirport
                    const code = item.codeIataAirport === null ? "" : item.codeIataAirport
                    return <Movie key={key} name={name} code={code} />
                  })}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Romance;