import React, { Component } from 'react';

// app components
import axios from 'axios';
import Results from './Results';

// flickr api key
import apiKey from '../config';


class Dogs extends Component {
  constructor() {
    super();
    this.state = {
      dogsPhotos: [],
      loading: true,
      searchText: '',
    };
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "dogs") => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogsPhotos: response.data.photos.photo,
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
          : <Results data={this.state.dogsPhotos} text={this.state.searchText}/>
        }
      </div>
    );
  }
}

export default Dogs;
