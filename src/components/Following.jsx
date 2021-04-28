import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Following extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/following`)
        .then(response => response.json())
        .then(
            following => {
                this.setState({
                    following: following
                });
            }
        );
    }

    handleClick(e)  {
        window.location = '/user/'+ e;
      };
    

    render() {
        if (!this.state.following) {
            return <div>LOADING FOLLOWING...</div>
        }
            
            const following = this.state.following;
            const items = [];
            for (const [index, value] of following.entries()) {
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
                <h6>Following of {this.props.params.username} :</h6>
                <div className="row mt-4">
                    {items}
                </div>
            </div>
            );
    }
}

export default Following;