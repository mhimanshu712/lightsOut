import React from 'react'
import './SettingCell.css'

export default function SettingCell({label,active}) {
    let classes = (active?"setting-cell-active":"setting-cell")
    return (
        <div className={classes}>
            {label}
        </div>
    )
}
