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
        <div>

            <h3>Total discs: {baggedDiscs.length}</h3>
            <h3>Distance drivers: {distances}</h3>
            <h3>Fairway drivers: {fairways}</h3>
            <h3>Midranges: {midranges}</h3>
            <h3>Putters: {putters}</h3>
        </div>
    )
}

export default BagInfo