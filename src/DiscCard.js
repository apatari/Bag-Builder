import React from "react";
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function DiscCard({ disc }) {
    
    return (
    
    <Card className="m-2 bd-highlight " style={{ width: '12rem' }}>
      <Card.Img className="img-thumbnail" variant="top" src={disc.image} />
      <Card.Body>
        <Card.Title>{disc.model}</Card.Title>
        <Card.Text>
          {disc.speed} / {disc.glide} / {disc.turn} / {disc.fade} 
        </Card.Text>
        <Button variant="primary">Add to bag</Button>
      </Card.Body>
    </Card>
    
    
    )
}

export default DiscCard