import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    }

    render() {
        return (
            <div className="container text-center mt-4">
                <h2 className="mb-4">Enter a GitHub username</h2>
                <form className="row justify-content-center" onSubmit={this._handleSubmit}>
                    <div className="col-auto">
                        <input ref="userInput" className="form-control" type="text" />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-dark">Search</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Search;
