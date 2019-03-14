import React, { Component } from 'react';
import axios from 'axios';
import '../style/App.css';
import '../style/bootstrap.min.css';
import Flights from "../components/Flights";

const baseUrl = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/'
var origin = 'SFO'
var destination = 'JFK'
var tgl_berangkat = '2019-04-01'
var tgl_pulang = '2019-05-01'
const urlFlight = baseUrl + origin +'-sky/' + destination + '-sky/' + tgl_berangkat + '/' + tgl_pulang
// const urlFlight = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2019-04-01/2019-05-01'
const api_key = 'dc80876585msh11e893058b92dcfp1c00d0jsn0f4e5dd46070'

class PagesFlight extends Component {
    constructor(props){
        super(props);
        this.state = {
            listFlights: [],
            listCity: []
        }
    }

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlFlight, {
                headers: {
                    'X-RapidAPI-Key': api_key
                }
            })
            .then(function(response){
                self.setState({listFlights: response.data.Places});
                self.setState({listCity: response.data.Quotes});
                console.log(response.data.Places[0]);
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render(){
        const {listFlights} = this.state;
        const {listCity} = this.state;
        var originCityName = '';
        var originName='';
        var destinationName='';
        var destinationCityName='';
        var minimumPrice=0
        return(
            <div className="PagesFlight">
                <div className="container">
                    {listFlights.map((item, key) => {
                        if (key === 0){
                            originName = item.Name;
                            originCityName = item.CityName;
                        }
                        else if (key === 1){
                            destinationName = item.Name;
                            destinationCityName = item.CityName;
                        }
                    })}
                    {listCity.map((item, key) => {
                        minimumPrice = item.MinPrice;
                    })}
                    <Flights originAirport={originName} originCity={originCityName} destinationAirport={destinationName} 
                    destinationCity={destinationCityName} price={minimumPrice} berangkat={tgl_berangkat} pulang={tgl_pulang}/>
                </div>
            </div>
        )
    }
}

export default PagesFlight