import React from 'react';
import '../App.css';
import { Table } from 'reactstrap';
import _ from 'lodash';

import Recipe from './Recipe';

export default function RecipeList(props) {

    const {
        data
    } = props;

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    {_.reverse(data).map((recipe) => (
                        <tr><td><Recipe onLoadFunction={props.onLoadFunction} name={recipe.name} description={recipe.description} /></td></tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

}