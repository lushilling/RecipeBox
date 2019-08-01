import React from 'react';
import '../App.css';
import axios from 'axios';

export default function Recipe(props) {

    let handleClick = () => {
        let itemToDelete = {
            name: props.name,
            desciption: props.desciption
        }

        axios.delete("http://localhost:5000/recipe/deleterecipe", { data: itemToDelete })
            .then(res => props.onLoadFunction())
    }

    return (
        <tr>
            <td>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <p>{props.ingredients}</p>
                <p>{props.image}</p>
                <button onClick={handleClick}>Delete Recipe</button>
            </td>
        </tr>
    );
}