import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Add from './Add';
import List from './List';

export default class App extends Component {

    static propTypes = {
        entries: PropTypes.arrayOf(PropTypes.object),
        actions: PropTypes.object
    }

    render() {
        return (
            <div className="container">
                <h1>Guest Book</h1>

                <Add addEntry={ this.props.actions.addEntry }/>
                <List entries={ this.props.entries }/>

                <button type="button" className="btn btn-danger" 
                    onClick={ this.props.actions.clearEntries }>Clear Entries</button>
            </div>
        );
    }
}