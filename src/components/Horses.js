import React, { Component } from 'react';

// app components
import axios from 'axios';
import Form from './Form';
import Nav from './Nav';
import Results from './Results';
import NotFound from './NotFound';

// flickr api key
import apiKey from '../config';


class Horses extends Component {
  constructor() {
    super();
    this.state = {
      horsesPhotos: [],
      loading: true,
      searchText: '',
    };
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "horses") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          horsesPhotos: response.data.photos.photo,
          loading: false,
          searchText: query
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="container">
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Results data={this.state.horsesPhotos} text={this.state.searchText}/>
        }
      </div>
    );
  }
}

export default Horses;
