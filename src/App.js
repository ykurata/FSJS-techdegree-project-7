import React, { Component } from 'react';
import  {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

// app components
import axios from 'axios';
import Form from './components/Form';
import Nav from './components/Nav';
import Results from './components/Results';
import NotFound from './components/NotFound';

// flickr api key
import apiKey from './config';


class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      catsPhotos: [],
      dogsPhotos: [],
      flowersPhotos: [],
      loading: true,
      searchText: ''
    };
  }

  componentDidMount() {
    this.performSearch();
    this.getPhotos("cats", "catsPhotos");
    this.getPhotos("dogs", "dogsPhotos");
    this.getPhotos("flowers", "flowersPhotos");
  }

  getPhotos = (query, photos) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          [photos]: response.data.photos.photo,
          loading: false,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  // Search photos from api
  performSearch = (query) => {
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


  // render each components
  render() {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          <Form onSearch={this.performSearch} />
          <Nav />
            <Switch>
              <Route exact path="/" render={ () => <Results data={this.state.catsPhotos}  />} />
              <Route path={`/search/${this.state.searchText}`} render={ () => <Results data={this.state.photos} text={this.state.searchText} />} />
              <Route path="/cats" render={ () => <Results data={this.state.catsPhotos}  />} />
              <Route path="/dogs" render={ () => <Results data={this.state.dogsPhotos}  />} />
              <Route path="/flowers" render={ () => <Results data={this.state.flowersPhotos}  />} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
