// import { Link } from 'react-router-dom';
import { Navbar} from 'react-bootstrap';
import Search from './Search'

function App() {
  return (
    <div className="main-app">
                <header className="main-header">
                    <Navbar bg="dark" variant="dark">
                      <Navbar.Brand href="/" className="mx-auto">- Github Source -</Navbar.Brand>
                    </Navbar>
                </header>
                <main className="main-content">
                    <Search />
                </main>
            </div>
  );
}

export default App;
