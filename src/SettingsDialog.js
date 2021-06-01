import React, {useState} from 'react'
import './SettingsDialog.css'
import SettingCell from './SettingCell'

export default function SettingsDialog() {
    let [level,setLevel] = useState([
        {label:'Easy',active:false},
        {label:'Medium',active:true},
        {label:'Hard',active:false}
    ])
    let [size,setSize] = useState([
        {label:'Small',active:false},
        {label:'Mid',active:true},
        {label:'Large',active:false}
    ])

    const changeLevel = (a) => {
        let cpy = level
        cpy = cpy.map((x,i) => (
            i==a?{label:x.label,active:true} : {label:x.label,active:false}
        ))

        setLevel(cpy)
    }

    const changeSize = (a) => {
        let cpy = size
        cpy = cpy.map((x,i) => (
            i==a?{label:x.label,active:true} : {label:x.label,active:false}
        ))

        setSize(cpy)
    }


    return (
        <div className="wrapper">
            <label>Level:</label>
            <div className='setting-group'>
                {level.map((x,i) => (
                    <SettingCell
                    key={i}
                    label={x.label}
                    active={x.active}
                    idx={i}
                    changeLevel = {changeLevel}
                    />
                ))}
            </div>
            
            <label>Size:</label>
            <div className='setting-group'>
                {size.map((x,i) => (
                    <SettingCell
                    key={i}
                    label={x.label}
                    active={x.active}
                    idx={i}
                    changeLevel = {changeSize}
                    />
                ))}
            </div>

            <div className='set-setting-button'>
                Set
            </div>
        </div>
    )
}
