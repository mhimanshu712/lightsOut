import React, {useState} from 'react'
import './SettingsDialog.css'
import SettingCell from './SettingCell'

export default function SettingsDialog(props) {
    let [level,setLevel] = useState(props.level)
    let [size,setSize] = useState(props.size)

    const changeLevel = (a) => {
        let cpy = level
        cpy = cpy.map((x,i) => (
            i==a?{label:x.label,val:x.val,active:true} : {label:x.label,val:x.val,active:false}
        ))

        setLevel(cpy)
    }

    const changeSize = (a) => {
        let cpy = size
        cpy = cpy.map((x,i) => (
            i==a?{label:x.label,val:x.val,active:true} : {label:x.label,val:x.val,active:false}
        ))

        setSize(cpy)
    }

    const changeStates = () => {
        props.changeStates(level,size)
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

            <div className='set-setting-button'
            onClick={changeStates}
            >
                Set
            </div>
        </div>
    )
}
