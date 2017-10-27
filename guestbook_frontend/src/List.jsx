import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
    static propTypes = {
        entries: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        let entries = this.props.entries.map((entry) => (
            <li className="list-group-item" key={ entry.id }>{ entry.content }</li>
        ));

        return (
            <ul className="list-group">
                { entries }
            </ul>
        );
    }
}