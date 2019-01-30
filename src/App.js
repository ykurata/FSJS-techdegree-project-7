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
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Horses from './components/Horses';

// flickr api key
import apiKey from './config';


class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      searchText: '',
      catsPhotos: [],
      dogsPhotos: [],
      HorsesPhotos: []
    };
  }
  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = "sunsets") => {
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
      <BrowserRouter>
        <div className="container">
          <Form onSearch={this.performSearch} />
          <Nav />
            <Switch>
              {
                (this.state.loading)
                ? <p>Loading...</p>
                : <Route exact path="/" render={ () => <Results data={this.state.photos} text={this.state.searchText}/>} />
              }

              {
                (this.state.loading)
                ? <p>Loading...</p>
                : <Route path="/cats" component={Cats} />
              }

              {
                (this.state.loading)
                ? <p>Loading...</p>
                : <Route path="/dogs" component={Dogs} />
              }

              {
                (this.state.loading)
                ? <p>Loading...</p>
                : <Route path="/horses" component={Horses} />
              }

              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
