import React from 'react';
import { browserHistory as history } from 'react-router';

/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.

This will have as an effect to navigate to a new URL, which will display the User component
Why are we doing this instead of using a <Link>? The answer is straightforward, but make sure you understand!!!
*/
class Search extends React.Component {
    constructor(props) {
        super(props);

        // Why do we need to do this?? Make sure you understand!!!
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
