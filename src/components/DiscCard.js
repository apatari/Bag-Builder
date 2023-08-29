import React from "react";
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function DiscCard({ disc, setDiscs, discs }) {

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

    function handleClick(e) {

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
    
    return (
    
    <Card className="m-2 bd-highlight bg-info bg-opacity-20 " style={{ width: '12rem' }}>
      <Card.Img className="img-thumbnail" variant="top" src={disc.image} />
      <Card.Body>
        <Card.Title>{disc.model}</Card.Title>
        <Card.Text>
          {disc.speed} / {disc.glide} / {disc.turn} / {disc.fade} 
        </Card.Text>
        <Button variant={disc.bagged? "warning" : "primary"} onClick={handleClick}  >{disc.bagged? "Remove" : "Add to bag"}</Button>
      </Card.Body>
    </Card>
    
    
    )
}

export default DiscCard