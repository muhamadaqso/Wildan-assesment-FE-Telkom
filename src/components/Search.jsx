import React from 'react';
import logo from '../assets/github-logo.png'
import { browserHistory as history } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
            <div className="container text-center mt-5">
                <div className="w-50 mx-auto mb-4">
                    <img className="w-75" src={logo} alt=""/>
                </div>
                <form className="row justify-content-center" onSubmit={this._handleSubmit}>
                    <div className="col-8">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
                        <input ref="userInput" className="form-control" type="text" placeholder="Enter a github username.." />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default Search;
