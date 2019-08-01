import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavigationBar from './Components/NavigationBar';
import AddRecipe from './Components/AddRecipe';
import RecipeList from './Components/RecipeList';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  onLoad = () => {
    axios.get("http://localhost:5000/recipe/all")
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  componentDidMount() {
    this.onLoad();
  }


  render() {
    return (
      <div >
        <Router>
          <NavigationBar />

          <Route exact path="/" render={() => <RecipeList onLoadFunction={this.onload} data={this.state.data} />} />

          <Route path="/AddRecipe" component={AddRecipe} render={() => <AddRecipe onLoadFunction={this.onload} data={this.state.data} />} />

        </Router>
      </div >
    )
  }
}

