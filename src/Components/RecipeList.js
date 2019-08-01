import React from 'react';
import { Table } from "reactstrap";
import Recipe from './Recipe';

export default class RecipeList extends React.Component {

    render() {
        return (
            <div>
                <Table>
                    <tbody>
                        <tr>{this.props.data.map((recipe, name) => (

                                 <Recipe key={name} onLoadFunction={this.props.onLoadFunction} name={recipe.name} description={recipe.description} />       

                        ))}</tr>
                    </tbody>
                </Table>
            </div>

        );
    }
}