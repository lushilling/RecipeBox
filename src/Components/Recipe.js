import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

export class Recipe extends React.Component {
    render(props) {

        return (
            <tr>
                <td>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <p>{props.ingredients}</p>
                    <p>{props.image}</p>
                    <button><Link to={this.props.name}>{this.props.name}</Link></button>
                </td>
            </tr>
        );
    }
}