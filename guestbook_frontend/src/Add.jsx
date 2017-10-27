import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Add extends Component {

    static propTypes = {
        addEntry: PropTypes.func
    }

    constructor() {
        super(...arguments);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        let content = this.refs.content;
        this.props.addEntry(content.value);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Add Entry
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <textarea className="form-control" ref="content" rows="3" required></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit" onClick={ this.handleClick }>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}