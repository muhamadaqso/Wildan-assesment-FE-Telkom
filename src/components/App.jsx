import React from 'react';
import { Navbar} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div className="main-app">
                <header className="main-header shadow-sm">
                     <Navbar bg="dark" variant="dark">
                      <Navbar.Brand href="/" className="mx-auto">- Github Source -</Navbar.Brand>
                    </Navbar>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;
