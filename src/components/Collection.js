import React from "react";
import DiscCard from "./DiscCard";
import { Col } from "react-bootstrap";
import SearchSort from "./SearchSort";

function Collection({ discs, setDiscs }) {
    return(
        <div>
            <SearchSort />
            <div className="p-2 m-4 rounded-3 bg-primary bg-opacity-25 ">
                <Col className="d-flex flex-wrap p-3 ">
                    {discs.map(disc => {
                return ( 
                        <DiscCard disc={disc} key={disc.id} discs={discs} setDiscs={setDiscs} />  
                    )})}
                </Col>
            </div>
        </div>
    )
}

export default Collection