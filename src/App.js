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
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Flowers from './components/Flowers';

// flickr api key
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

  // Search photos from api
  performSearch = (query = "cats") => {
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
              <Route exact path="/" component={Cats} />
              <Route path={`/search/${this.state.searchText}`} render={ () => <Results data={this.state.photos} text={this.state.searchText} />} />
              <Route path="/cats" component={Cats} />
              <Route path="/dogs" component={Dogs} />
              <Route path="/flowers" component={Flowers} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
