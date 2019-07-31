import React, { Component } from 'react';
import '../App.css';
import axios from "axios";

export default class Post extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            description: "",
            ingredients: "",
            image: ""
        }
    }


    postRequest = (e) => {
        e.preventDefault();

        let newRecipe = {
            name: e.target[0].value,
            description: e.target[1].value,
            ingredients: e.target[2].value,
            image: e.target[3].value
        }

        console.log(newRecipe);
        axios.post("url", newRecipe)
            .then(response => {
                this.setState({
                    data: response.data
                });
                this.props.onLoadFunction();
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.postRequest}>
                    <label for="name" id="nameLabel">Name: </label>
                    <input type="text" id="name" class="form-control" />
                    <br />
                    <label for="decription" id="decriptionLabel">Decription: </label>
                    <input type="text" id="decription" class="form-control" />
                    <br />
                    <label for="ingredients" id="ingredientsLabel">Ingredients: </label>
                    <input type="content" id="ingredients" class="form-control" />
                    <br />
                    <label for="image" id="imageLabel">Ingredients: </label>
                    <input type="url" id="image" class="form-control" />
                    <br />
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                    <br />
                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>
            </div>
        );
    }
}




// if (newItem.username === "" || newItem.email === "" || newItem.content === "") {
//     this.setState({ error: "Please fill out all fields correctly" })
// } else {
//     this.setState({ error: "" })
// }