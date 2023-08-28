import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiscBag from './DiscBag';

function App() {
  return (
    <div className="App">

      <Navbar className='bg-success text-white p-3 bg-opacity-75'>
        <Navbar.Brand className='fw-bolder fs-2' >Bag Builder</Navbar.Brand>
        <Nav className='p-2 fs-4 text-white'>
          <Nav.Link className='text-white me-3' >View Bag</Nav.Link>
          <Nav.Link className='text-white me-3' >Select Discs</Nav.Link>
          <Nav.Link className='text-white me-3' >Add New Discs</Nav.Link>
        </Nav>
        
      </Navbar>

      <DiscBag />


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button className="btn-success"> Test</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
