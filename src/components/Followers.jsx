import React from 'react';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = [];
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
        return (
            <div>
                follwers page
            </div>
        )
    }
}

export default Followers;