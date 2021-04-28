// import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <div className="main-app">
                <header className="main-header">
                    <Navbar bg="dark" variant="dark">
                      <Navbar.Brand href="/" className="mx-auto">- Github Source -</Navbar.Brand>
                    </Navbar>
                </header>
                <main className="main-content">
                    {/* {this.props.children} */}
                </main>
            </div>
  );
}

export default App;
