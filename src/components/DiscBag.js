import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DiscCard from "./DiscCard";
import BagInfo from './BagInfo';

function DiscBag({ discs, setDiscs, onMoveDisc }) {
 

    return (
        <div>
            <Row>
            <Col className=" " > <div className="p-2 mt-4 ms-2" > <BagInfo discs={discs} /></div> 
            </Col>
            <Col xs={9}  className="">
            <div className="p-2 m-4 rounded-3 bg-warning bg-opacity-50 ">
                    <h2 className="me-auto w-25">Distance Drivers</h2>                
                
                <Col className="d-flex flex-wrap p-3 ">
                    
                    {discs.filter(disc => (disc.bagged && disc.type === 'distance'))
                    .map(disc => {return ( <DiscCard disc={disc} key={disc.id} setDiscs={setDiscs} discs={discs} onMoveDisc={onMoveDisc} /> )})} 
                </Col>
            </div>
            <div className="p-2 m-4  rounded-3 bg-primary bg-opacity-50 ">
                <h2 className="me-auto w-25">Fairway Drivers</h2>
                <Col className="d-flex flex-wrap p-3 ">
                    
                    {discs.filter(disc => (disc.bagged && disc.type === 'fairway'))
                    .map(disc => {return ( <DiscCard disc={disc} key={disc.id} setDiscs={setDiscs}  discs={discs} onMoveDisc={onMoveDisc} /> )})} 
                </Col>
            </div>
            <div className="p-2 m-4  rounded-3 bg-secondary bg-opacity-50 ">
                <h2 className="me-auto w-25">Midrange</h2>
                <Col className="d-flex flex-wrap p-3 ">
                    
                    {discs.filter(disc => (disc.bagged && disc.type === 'midrange'))
                    .map(disc => {return ( <DiscCard disc={disc} key={disc.id} setDiscs={setDiscs}  discs={discs} onMoveDisc={onMoveDisc} /> )})} 
                </Col>
            </div>
            <div className="p-2 m-4  rounded-3 bg-success bg-opacity-50 ">
                <h2 className="me-auto w-25">Putters</h2>
                <Col className="d-flex flex-wrap p-3 ">
                    
                    {discs.filter(disc => (disc.bagged && disc.type === 'putter'))
                    .map(disc => {return ( <DiscCard disc={disc} key={disc.id} setDiscs={setDiscs}  discs={discs} onMoveDisc={onMoveDisc} /> )})} 
                </Col>
            </div>
            </Col>
            </Row>

        </div>

       
        )
}

export default DiscBag

