import React from 'react';
import '../App.css';

export default class Recipe extends React.Component {
    render(props) {

        return (
            <tr>
                <td>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <p>{props.ingredients}</p>
                    <p>{props.image}</p>
                    <button>More Info</button>
                </td>
            </tr>
        );
    }
}