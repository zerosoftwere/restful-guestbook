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
       fetch('http://localhost:8000/api/entries/')
        .then(response => response.json())
        .then(entries => this.setState({entries: entries}))
        .catch(err => console.log('Error fetching data', err));
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
     * Add entry to datastore.
     */
    addEntry(content, callback) {
        let prevEntries = this.state.entries;
        let nextEntries = prevEntries.slice();

        fetch('http://localhost:8000/api/entries/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: content })
        })
        .then(response => response.json())
        .then(entry => {
            nextEntries.unshift(entry);
            this.setState({entries: nextEntries});
            callback()
        })
        .catch((err) => {
            console.log('Error fetching data:', err);
            callback();
        });
    }

    /**
     * Clear all entries from datastore.
     */
    clearEntries() {
        fetch('http://localhost:8000/api/entries/', {
            method: 'DELETE'
        }).then(() => {
            this.setState({entries: []});
        }).catch((err) => {
            console.log('Error occured:', err);
        });
    }
}