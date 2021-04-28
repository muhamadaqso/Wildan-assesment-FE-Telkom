import React from 'react';
import empty from '../assets/empty-state.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

    handleClick(e)  {
        window.open(e, '_blank');
      };

    render() {
        if (!this.state.repos) {
            return <div>LOADING REPOSITORY...</div>
        }
            
            const repos = this.state.repos;
            const items = [];

            
            for (const [index, value] of repos.entries()) {
                items.push(
                    <div className="col-md-4 mb-3 cursor-pointer" key={index} 
                    onClick={() => this.handleClick(value.html_url)}>
                        <div className="p-3 shadow-sm">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>{value.full_name}</p>
                                </div>
                                <div className="col-auto ml-auto">
                                    <span className="px-2 py-1">{value.size}  <FontAwesomeIcon icon={faStar} className="ml-1" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
              }

        if (items.length === 0) {
            return (
                <div className="container">
                    <div className="text-center">
                    <img className="w-100" src={empty} alt=""/>
                    </div>
                </div>
            );
        }


            return (
            <div className="repos-page container">
                <h6>{this.props.params.username}'s' Repository:</h6>
                <div className="row mt-4">
                    {items}
                </div>
            </div>
            );
    }
}

export default Repository;
