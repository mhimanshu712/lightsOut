import React, {useState} from 'react'
import './SettingsDialog.css'
import SettingCell from './SettingCell'

export default function SettingsDialog(props) {
    let [level,setLevel] = useState([
        {label:'Easy',active:false,val:2},
        {label:'Medium',active:true,val:3},
        {label:'Hard',active:false,val:5}
    ])
    let [size,setSize] = useState([
        {label:'Small',active:false,val:3},
        {label:'Mid',active:true,val:5},
        {label:'Large',active:false,val:7}
    ])

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
        let levelVal = level.filter(x => x.active===true)[0].val
        let sizeVal = size.filter(x => x.active===true)[0].val
        props.changeStates({level:levelVal,size:sizeVal})
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
