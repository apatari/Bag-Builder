import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiscBag from './DiscBag';
import Header from './Header';

function App() {
  return (
    <div className="App">

      <Header />

      <DiscBag />


    </div>
  );
}

export default App;
