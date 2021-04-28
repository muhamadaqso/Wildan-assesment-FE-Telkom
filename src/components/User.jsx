import React from 'react';
import { Link } from 'react-router';
import { Spinner, Button } from 'react-bootstrap';

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

        if (!this.state.user) {
            return (<div className="user-page text-center mt-5"><Spinner animation="border" role="status"></Spinner> LOADING...</div>);
        }
        
        const user = this.state.user;

        return (
            <div className="container mt-4">
                <Button variant="primary" href="/">Back</Button>
                <div className="user-info text-center mt-3">
                    <div className="row">
                        <div className="col-md-6 shadow-sm mx-auto  py-4 ">
                            <Link className="user-info-profile" to={`/user/${user.login}`}>
                                <img src={user.avatar_url} alt={`${user.login} avatar`}/>
                                <div className="my-3">
                                    <span className="px-2 py-1" >{user.login}</span>
                                </div>
                                <h6 className="mt-2">{user.name}</h6>
                                <p>{user.bio}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default User;
