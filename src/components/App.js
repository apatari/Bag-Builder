

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

    function handleAddDisc(disc) {
      setDiscs([
        ...discs, disc
      ])
    }

    function handleMoveDisc(disc) {

      fetch(`http://localhost:3000/discs/${disc.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({bagged: !disc.bagged
        })
      })
      .then(res => res.json())
      .then(updatedDisc => onUpdateDiscs(updatedDisc))
    }

    function onUpdateDiscs(updatedDisc) {
      const updatedCollection = discs.map(item => {
        if (item.id === updatedDisc.id) {
          return updatedDisc
        } else {
          return item
        }
      })
      setDiscs(updatedCollection)
    }

  return (
    <div >

      <Header />

      <Switch>
        <Route exact path="/">
          <DiscBag discs={discs} setDiscs={setDiscs} onMoveDisc={handleMoveDisc} />
        </Route>
        <Route exact path="/collection">
          <Collection discs={discs} setDiscs={setDiscs} onMoveDisc={handleMoveDisc} />
        </Route>
        <Route exact path="/new">
          <AddDisc onAddDisc={handleAddDisc}/>
        </Route>
      </Switch>

      


    </div>
  );
}

export default App;
