import React from 'react';
import '../App.css';
import { Table } from 'reactstrap';
import _ from 'lodash';

import Recipe from './Recipe';

export default function Thread(props) {

    const {
        data
    } = props;

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    {_.reverse(data).map((recipe, index) => (
                        <Recipe key={index} onLoadFunction={props.onLoadFunction} name={recipe.name} email={recipe.description} />
                    ))}
                </tbody>
            </Table>
        </div>
    );

}