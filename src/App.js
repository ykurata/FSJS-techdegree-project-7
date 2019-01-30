import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Nav from './components/Nav';
import Results from './components/Results';
import apiKey from './config';



class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      searchText: ''
    };
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false,
          searchText: query
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.photos);
    return (
      <div className="container">
        <Form onSearch={this.performSearch} />
        <Nav />
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Results data={this.state.photos} text={this.state.searchText}/>
        }
      </div>
    );
  }
}

export default App;
