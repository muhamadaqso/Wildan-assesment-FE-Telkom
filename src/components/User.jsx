import React from 'react';
import { Link } from 'react-router';
import { Spinner, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faUser } from '@fortawesome/free-solid-svg-icons';

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
            <div className="container mt-4 user-info">
                
                <Button variant="primary" href="/"><FontAwesomeIcon icon={faAngleLeft} className="mr-1" />Back</Button>
                <hr/>
                <div className=" text-center mt-3">
                    <div className="row">
                        <div className="col-md-6 shadow-sm mx-auto  py-4 ">
                            <Link className="user-info-profile" to={`/user/${user.login}`}>
                                <img src={user.avatar_url} alt={`${user.login} avatar`}/>
                                <div className="my-3">
                                <span className="px-2 py-1" > <FontAwesomeIcon icon={faUser} className="mr-2" />{user.login}</span>
                                </div>
                                <h6 className="mt-2">{user.name}</h6>
                                <p>{user.bio}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <hr/>

                    <div className="row">
                        <div className="col-4 text-center cursor-pointer">
                            <p className="mb-1 font-weight-semibold">{user.public_repos}</p>
                            <p>Repository</p>
                        </div>
                        <div className="col-4 text-center cursor-pointer">
                            <Link  to={`/user/${user.login}/followers`}>
                                <p className="mb-1 font-weight-semibold">{user.followers}</p>
                                <p>Followers</p>
                            </Link>
                        </div>
                        <div className="col-4 text-center cursor-pointer">
                            <p className="mb-1 font-weight-semibold">{user.following}</p>
                            <p>following</p>
                        </div>
                    </div>

                    <hr/>
                    <div>
                        {this.props.children}
                    </div>
            </div>
        );
    }
}

export default User;
