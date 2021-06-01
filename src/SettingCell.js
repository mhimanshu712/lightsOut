import React from 'react'
import './SettingCell.css'

export default function SettingCell({label,active,idx,changeLevel}) {
    let classes = (active?"setting-cell-active":"setting-cell")

    const handleClick = () => {
        changeLevel(idx)
    }

    return (
        <div
        className={classes}
        onClick={handleClick}
        >
            {label}
        </div>
    )
}
