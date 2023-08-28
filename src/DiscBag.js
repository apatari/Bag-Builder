import React, { useEffect, useState } from "react";
import { Card, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiscCard from "./DiscCard";

function DiscBag() {

    const [discs, setDiscs] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/discs")
        .then(res => res.json())
        .then(data => setDiscs(data))
    }, []) 

    return (
        <div>
            <div className="p-5 m-4 rounded-3 bg-warning bg-opacity-50 ">
                    <h2 className="me-auto w-25">Distance Drivers</h2>                
                
                <Col className="d-flex flex-wrap p-3 ">
                    
                    {discs.map(disc => {return ( <DiscCard disc={disc} key={disc.id} /> )})} 
                </Col>
            </div>
            <div className="p-5 m-4  rounded-3 bg-primary bg-opacity-50 ">
                <h2 className="me-auto w-25">Fairway Drivers</h2>
                <Col className="d-flex flex-wrap p-3 ">
                    
                    {discs.map(disc => {return ( <DiscCard disc={disc} key={disc.id} /> )})} 
                </Col>
            </div>

        </div>

       
        )
}

export default DiscBag

