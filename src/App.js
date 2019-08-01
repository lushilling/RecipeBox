import React from 'react';
import './App.css';
import axios from 'axios';

import NavigationBar from './Components/NavigationBar';
import RecipeList from './Components/RecipeList';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.onLoad();
  }

  onLoad = () => {
    axios.get("http://localhost:5000/recipe/all")
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  render() {
    return (
      <div >
        <NavigationBar />
        <RecipeList onLoadFunction={this.onload} data={this.state.data}/>
      </div >
    )
  }
}

