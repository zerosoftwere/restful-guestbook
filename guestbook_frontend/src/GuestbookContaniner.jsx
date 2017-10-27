import React, { Component } from 'react';
import Guestbook from './Guestbook';
import 'whatwg-fetch';

export default class GuestbookContainer extends Component {

    constructor() {
        super(...arguments);

        this.addEntry = this.addEntry.bind(this);
        this.clearEntries = this.clearEntries.bind(this);

        this.state = {
            entries: []
        };
    }

    /**
     * Fetch data from the backend and update
     * state entries.
     */
    componentDidMount() {
        this.setState({
            entries: [
                {
                    id: 1,
                    content: 'Hello World'
                },
                {
                    id: 2,
                    content: 'Goodbye cruel World'
                },
            ]
        })
    }

    render() {
        return (
            <Guestbook
                entries = {this.state.entries}
                actions = {{
                    addEntry: this.addEntry,
                    clearEntries: this.clearEntries
                }}
            />
        )
    }

    /**
     * Add entry to current state object and update the backend.
     * revert back to previous state in terms of error and 
     * notify the user
     */
    addEntry(content) {
        console.log('Added: ' + content );
    }

    /**
     * Clear all entries from current state object and notify the backend.
     * revert back to previous state in terms of error and
     * notify the user.
     */
    clearEntries() {
        console.log('Clear Entries');
    }
}