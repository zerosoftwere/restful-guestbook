import React, { Component } from 'react';
import AddEntry from './AddEntry';
import ListEntry from './ListEntry';

export default class App extends Component {
    render() {
        return (
            <div class="container">
                <h1>Guest Book</h1>
                <AddEntry/>
                <ListEntry/>
                <button type="button" className="btn btn-danger">Clear</button>
            </div>
        );
    }
}