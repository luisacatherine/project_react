import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../style/App.css';
import '../style/bootstrap.min.css';

import Bandara from '../components/Bandara';
import EventGet from '../pages/PagesEvent';

const BaseUrlBandara = " http://aviation-edge.com/v2/public/nearby";

const key = "822db6-074dfa";
// const lat = props.longitudeSend
let lat = "-5.466667";
// const lng = props.latitudeSend
let lng = "122.6333";
const distance = "40";


class PageBandara extends Component {
  constructor (props){
    super(props);
    
    this.state = {
      listBandara: [],
      urlBandaraState : BaseUrlBandara + "?key=" + key + "&lat=" + props.latitudeSend + "&lng=" + props.longitudeSend + "&distance=" + distance
    };
  
  }

  componentDidMount = () => {
    const self = this;
    localStorage.getItem('urlBandara');

    axios 
		.get(this.state.urlBandaraState)
		.then(function (response) {
			console.log(response.data)
			self.setState({ listBandara: response.data });
        // console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);        
      });
  }



  // handleDataList = e => {
  //   // let longitudeRec = props.longitudeSend;
  //   // let latitudeRec =  props.latitudeSend;
  //   let longitudeSend = 10;
  //   let latitudeSend =  10;
  //   this.findNearbyAirport(longitudeSend,latitudeSend)
  // }

  // findNearbyAirport = async value => {
  //   // const PageBandara = (props)
  //   console.log("findNearbyAirport", value)
  //   const self = this;

  //   try {
  //     const response = await axios.get(BaseUrlBandara + "?key=" + key + "&lat=" + value + "&lng=" + value + "&distance=" + distance)
  //     self.setState({listBandara : response.data})
  //   }catch(error){
  //     console.log(error);
  //   }
    
  // };

  
  render() {

    const {listBandara} = this.state;
    // console.log({listBandara})
    return (
      <div className="App">
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
        
        
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  {listBandara.map((item, key) => {
                    console.log(item.nameAirport)
                    const name = item.nameAirport === null ? "" : item.nameAirport
                    const code = item.codeIataAirport === null ? "" : item.codeIataAirport
                    return <Bandara key={key} name={name} code={code} />
                  })}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

PageBandara.propTypes = {
  longitudeSend: PropTypes.string,
  latitudeSend: PropTypes.string
}

export default PageBandara;