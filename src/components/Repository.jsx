import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Repository extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then(
            repos => {
                this.setState({
                    repos: repos
                });
            }
        );
    }

    render() {
        if (!this.state.repos) {
            return <div>LOADING REPOSITORY...</div>
        }
            
            const repos = this.state.repos;
            const items = [];
            for (const [index, value] of repos.entries()) {
                items.push(
                    <div className="col-md-4 mb-3 cursor-pointer" key={index} 
                    onClick={() => this.handleClick(value.login)}>
                        <div className="text-center p-3 shadow-sm">
                            <img src={value.avatar_url} alt=""/>
                            <p className="mt-3">{value.login} <FontAwesomeIcon icon={faAngleRight} className="ml-2" /></p>
                        </div>
                    </div>
                )
              }

            return (
            <div className="followers-page container">
                <h6>{this.props.params.username}'s' Repository:</h6>
                <div className="row mt-4">
                    {items}
                </div>
            </div>
            );
    }
}

export default Repository;
