import React from 'react'
import '../styles/ArcadeCabinet.css'

const ArcadeCabinet = (props) => {

    const carousel = props.children[0]
    const boton = props.children[1]
    const palanca = props.children[2]

  return (
    <div className="container">
    <div className="arcade-machine">
    <div className="shadow"></div>
    <div className="top">
      <div className="stripes"></div>
    </div>
    <div className="screen-container">
      <div className="shadow"></div>
      <div className="screen">
        <div className="screen-display"></div>
        <div className="premio-container">
          {carousel}
        </div>
      </div>
    </div>
      <div className="joystick">
        <div>{palanca}</div>
      </div>    
    <div className="board">
        <div style={{marginTop:'7%'}}>{boton}</div>
    </div>
    <div className="bottom">
      <div className="stripes"></div>
    </div>
  </div>
</div>
  )
}

export default ArcadeCabinet