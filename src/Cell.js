import React from 'react'
import './Cells.css'

export default function Cell(props) {
    const {toggleCells,x,y} = props
    function handleClick(evt){
        toggleCells(x,y)
    }

    let classes = "Cell" + (props.isLit? " Cell-lit" : "" )
    return (
        <td
        className={classes}
        onClick={handleClick}
        />
    )
}
