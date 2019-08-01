import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './App';
import AddRecipe from './Components/AddRecipe';

export default function Routing() {

    return (
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/AddRecipe" component={AddRecipe} />
        </Router>
    )
}
