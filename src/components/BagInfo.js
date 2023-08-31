import React from "react";

function BagInfo({ discs }) {

    const baggedDiscs = discs.filter(disc => disc.bagged)

    const distances = baggedDiscs.reduce((acc, disc) => {
        if (disc.type === "distance") {
            console.log(disc.model)
            return (acc + 1)} 
        else {return acc}
    } , 0)
    
    const fairways = baggedDiscs.reduce((acc, disc) => {
        if (disc.type === "fairway") {
            console.log(disc.model)
            return (acc + 1)} 
        else {return acc}
    } , 0)

    const midranges = baggedDiscs.reduce((acc, disc) => {
        if (disc.type === "midrange") {
            console.log(disc.model)
            return (acc + 1)} 
        else {return acc}
    } , 0)

    const putters = baggedDiscs.reduce((acc, disc) => {
        if (disc.type === "putter") {
            console.log(disc.model)
            return (acc + 1)} 
        else {return acc}
    } , 0)
    
    return (
        <div className="m-1 p-2 bg-info shadow rounded" >

            <h3 className="text-decoration-underline">Bag Info</h3>
            <h4>Total discs: {baggedDiscs.length}</h4>
            <h4>Distance drivers: {distances}</h4>
            <h4>Fairway drivers: {fairways}</h4>
            <h4>Midranges: {midranges}</h4>
            <h4>Putters: {putters}</h4>
        </div>
    )
}

export default BagInfo