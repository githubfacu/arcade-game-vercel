import '../styles/PalancaSwitch.css'

import React from 'react'

const PalancaSwitch = ({ neonSwitch, onSwitchChange }) => {

  return (
    <div className="toggle">
        <input className="toggle-input" type="checkbox" checked={neonSwitch} onChange={onSwitchChange} />
        <div className="toggle-handle-wrapper">
            <div className="toggle-handle">
                <div className="toggle-handle-knob"></div>
                <div className="toggle-handle-bar-wrapper">
                    <div className="toggle-handle-bar"></div>
                </div>
            </div>
        </div>
        <div className="toggle-base">
            <div className="toggle-base-inside"></div>
        </div>
    </div>
  )
}

export default PalancaSwitch