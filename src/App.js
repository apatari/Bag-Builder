import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiscBag from './DiscBag';
import Header from './Header';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Collection from './Collection';
import AddDisc from './AddDisc';

function App() {
  return (
    <div >

      <Header />

      <Switch>
        <Route exact path="/">
          <DiscBag />
        </Route>
        <Route exact path="/collection">
          <Collection />
        </Route>
        <Route exact path="/new">
          <AddDisc />
        </Route>
      </Switch>

      


    </div>
  );
}

export default App;
