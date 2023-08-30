import React, { useState } from "react";
import DiscCard from "./DiscCard";
import { Col } from "react-bootstrap";
import SearchSort from "./SearchSort";

function Collection({ discs, setDiscs }) {

    const [searchText, setSearchText] = useState("")
    const [sortBy, setSortBy] = useState("")

    function handleSearchChange(e) {
        setSearchText(e.target.value)
    }

    function handleSortChange(e) {
        setSortBy(e.target.value)
    }


    const discsToDisplay = discs.filter(disc =>  disc.model.toLowerCase().includes(searchText.toLowerCase()))
    discsToDisplay.sort(compareDecreasing)

    
    console.log(discsToDisplay)

    return(
        <div>
            <SearchSort searchText={searchText} sortBy={sortBy} onSearchChange={handleSearchChange} onSortChange={handleSortChange} />
            <div className="p-2 m-4 rounded-3 bg-primary bg-opacity-25 ">
                <Col className="d-flex flex-wrap p-3 ">
                    {discsToDisplay.map(disc => {
                return ( 
                        <DiscCard disc={disc} key={disc.id} discs={discs} setDiscs={setDiscs} />  
                    )})}
                </Col>
            </div>
        </div>
    )
}

function compareIncreasing(a,b) {
    if (a.speed>b.speed) { return 1}
    if (a.speed<b.speed) { return -1}
    return 0
}

function compareDecreasing(a,b) {
    if (a.speed>b.speed) { return -1}
    if (a.speed<b.speed) { return 1}
    return 0
}

export default Collection