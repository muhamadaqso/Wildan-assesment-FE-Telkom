import React from 'react';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
        .then(response => response.json())
        .then(
            followers => {
                this.setState({
                    followers: followers
                });
            }
        );
    }

    render() {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
        }
            
            const followers = this.state.followers;
            const items = [];
            for (const [index, value] of followers.entries()) {
                items.push(
                    <div className="col-md-4 mb-2" key={index}>
                        <div className="d-flex">
                            <img src={value.avatar_url} alt=""/>
                            <p className="ml-2">{value.login}</p>
                        </div>
                    </div>
                )
              }

            console.log(followers)
            return (
            <div className="followers-page container">
                <h6>Followers of {this.props.params.username} :</h6>
                <div className="row mt-3">
                    {items}
                </div>
            </div>
            );
    }
}

export default Followers;