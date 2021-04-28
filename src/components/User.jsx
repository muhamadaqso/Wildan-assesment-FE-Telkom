import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

    render() {
        const user = this.state.user;

        return (
            <div className="container mt-4">
                <h1>This User Page</h1>
                <p>{user}</p>
            </div>
        );
    }
}

export default User;
