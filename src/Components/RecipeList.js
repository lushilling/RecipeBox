import React from 'react';
import '../App.css';
import { Table } from 'reactstrap';
import _ from 'lodash';

import Recipe from './Recipe';

export default function RecipeList (props) {

    const {
        data
    } = props;

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    {_.reverse(data).map((recipe, name) => (
                        <Recipe key={name} onLoadFunction={props.onLoadFunction} name={recipe.name} description={recipe.description} />
                    ))}
                </tbody>
            </Table>
        </div>
    )

}