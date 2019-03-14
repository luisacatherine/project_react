import React, { Component } from 'react';
import axios from 'axios';
import '../style/App.css';
import '../style/bootstrap.min.css';
import Movie from "../components/Movie"

const urlMovie = 'https://api-todofancy.herokuapp.com/api/movies'

class RomanceMovies extends Component {
    constructor(props){
        super(props);
        this.state = {
            listMovies: []
        }
    }

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlMovie)
            .then(function(response){
                var newArray = response.data.movies.filter(function(el){
                    return el.Category === 'romance'
                })                
                self.setState({listMovies: newArray});
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render(){
        const {listMovies} = this.state;
        return(
            <div className="RomanceMovies">
                <div className="container">
                    {listMovies.map((item, key) => {
                        return <Movie key={key} title={item.Title} year={item.Year} poster={item.Poster} synopsis={item.Synopsis}/>
                    })}
                </div>
            </div>
        )
    }
}

export default RomanceMovies