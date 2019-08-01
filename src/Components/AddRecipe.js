import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    FormText
} from 'reactstrap';
import '../App.css';
import axios from "axios";

export default class Post extends React.Component {

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

        if (newRecipe.name === "" || newRecipe.description === "" || newRecipe.ingredients === "" || newRecipe.image === "") {
            this.setState({ error: "Please fill out all fields correctly" })
        } else {
            this.setState({ error: "" })
        }

        console.log(newRecipe);
        axios.post("http://localhost:5000/recipe/createrecipe", newRecipe)
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
                    <label for="image" id="imageLabel">Image Url: </label>
                    <input type="url" id="image" class="form-control" />
                    <br />
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                    <br />
                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>

                {/* <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Input Recipe Name:</Label>
                        <Input />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Description</Label>
                        <Input valid />
                        <FormFeedback valid>Sweet! that name is available</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Ingredients</Label>
                        <Input invalid />
                        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Input without validation</Label>
                        <Input />
                        <FormFeedback tooltip>You will not be able to see this</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Valid input</Label>
                        <Input valid />
                        <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Invalid input</Label>
                        <Input invalid />
                        <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                        <FormText>Example help text that remains unchanged.</FormText>
                    </FormGroup>
                </Form> */}

            </div>
        );
    }
}
