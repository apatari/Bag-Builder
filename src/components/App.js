

import { Button, Navbar, Nav } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DiscBag from './DiscBag';
import Header from './Header';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Collection from './Collection';
import AddDisc from './AddDisc';

function App() {

  const [discs, setDiscs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/discs")
        .then(res => res.json())
        .then(data => setDiscs(data))
    }, [])

  return (
    <div >

      <Header />

      <Switch>
        <Route exact path="/">
          <DiscBag discs={discs} />
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
