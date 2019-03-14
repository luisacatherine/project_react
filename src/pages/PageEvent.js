import React, { Component } from 'react';
import axios from 'axios';
import '../style/App.css';
import '../style/bootstrap.min.css';
import Event from "../components/Event"

const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json';
const apikey = '7GS6QfjLAXaIbIliHeSJJldaJSU3L9NL';
const dmald = '1';
const size = '100';

const urlEvent = baseUrl +  "?apikey=" + apikey + "&dmald=" + dmald + "&size=" + size


class EventGet extends Component {
    constructor(props){
        super(props);
        this.state = {
            ListEvent: []
        }
    }

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlEvent)
            
            .then(function(response){
                var allData = (response.data._embedded.events);
                self.setState({ListEvent: allData})
                console.log(allData)
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render(){
        const {ListEvent} = this.state;
        
        return(
            <div className="ActionMovies">
                <div className="container">
                
                    {ListEvent.map((item, key) => {
                        console.log(ListEvent)
                        if (typeof item.priceRanges === "undefined"){
                            // alert("1")
                            return <Event key={key} name={item.name} url={item.url} 
                            image={item.images[0].url} startSale={item.sales.public.startDateTime} 
                            startDate={item.dates.start.localDate} 
                            // endDate={item.dates.end.localDate}
                            // startDate={null} 
                            endDate={"2019-03-14"} 
                            priceMin={"2019-03-14"} 
                            priceMax={"2019-03-14"}
                            longitude = {item._embedded.venues[0].location.longitude}
                            latitude = {item._embedded.venues[0].location.latitude}
                            />
                        } else if (typeof item.dates.start === "undefined" || typeof item.dates.end === "undefined") {
                            // alert("2")
                            return <Event key={key} name={item.name} url={item.url} 
                            image={item.images[0].url} startSale={item.sales.public.startDateTime}
                            startDate={"2019-03-14"}
                            endDate={"2019-03-14"}
                            priceMin={item.priceRanges[0].min} 
                            priceMax={item.priceRanges[0].max}
                            longitude = {item._embedded.venues[0].location.longitude}
                            latitude = {item._embedded.venues[0].location.latitude}
                            />
                        } else {
                            // alert("3")
                            return <Event key={key} name={item.name} url={item.url} 
                            image={item.images[0].url} startSale={item.sales.public.startDateTime} 
                            startDate={item.dates.start.localDate} 
                            endDate={item.dates.end.localDate}
                            priceMin={item.priceRanges[0].min} 
                            priceMax={item.priceRanges[0].max}
                            longitude = {item._embedded.venues[0].location.longitude}
                            latitude = {item._embedded.venues[0].location.latitude}
                            />
                        }

                    })}
                </div>
            </div>
        )
    }
}

export default EventGet