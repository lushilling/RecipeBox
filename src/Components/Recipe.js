import React from 'react';
import '../App.css';
// import axios from 'axios';

export default function Recipe(props) {

    // let handleClick = () => {
    //     let itemToDelete = {
    //         username: props.username,
    //         content: props.content
    //     }

    //     axios.delete("http://localhost:5000/item/deleteItem", { data: itemToDelete })
    //         .then(res => props.onLoadFunction())
    // }

    return (
        <tr>
            <td>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <p>{props.ingredients}</p>
                <p>{props.image}</p>
                {/* <button onClick={handleClick}>Delete Post</button> */}
            </td>
        </tr>
    );
}