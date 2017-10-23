import React, { Component } from 'react';

export default class AddEntry extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div class="panel-heading">
                    Add Entry
                </div>
                <div className="panel-body">
                    <form action="/" method="POST">
                        <div className="form-group">
                            <textarea className="form-control" name="content" rows="3" required></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}