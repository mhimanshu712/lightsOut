import React from 'react'
import './SettingsDialog.css'
import SettingCell from './SettingCell'

export default function SettingsDialog() {
    return (
        <div className="wrapper">
            <header>Settings</header>
            <div className='setting-group'>
                <SettingCell
                label={'Easy'}
                active={false}
                />
                <SettingCell
                label={'Medium'}
                active={false}
                />

                <SettingCell
                label={'Hard'}
                active={true}
                />
            </div>
        </div>
    )
}
