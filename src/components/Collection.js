import React from "react";
import DiscCard from "./DiscCard";
import { Col } from "react-bootstrap";

function Collection({ discs }) {
    return(
        <div>
            <div className="p-2 m-4 rounded-3 bg-primary bg-opacity-25 ">
                <Col className="d-flex flex-wrap p-3 ">
                    {discs.map(disc => {
                return ( 
                        <DiscCard disc={disc} key={disc.id} />  
                    )})}
                </Col>
            </div>
        </div>
    )
}

export default Collection