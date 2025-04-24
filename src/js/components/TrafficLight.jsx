import React, {useState} from "react"


//import TrafficLightsColor from "./TrafficLightsColor.jsx";


const TrafficLight = () => {
  const[color, setColor] = useState('green');
  return (
    <>
    <div class="traffic-light">
      <div class="traffic-light-stick"></div>
      <div class="traffic-light-face">
          <div 
            onClick={() => setColor('red')}
            className={'red light' + (color === 'red' ? ' selected' : '')}></div>
          <div 
            onClick={() => setColor('yellow')}
            className={'yellow light' + (color === 'yellow' ? ' selected' : '')}></div>
          <div 
            onClick={() => setColor('green')}
            className={'green light' + (color === 'green' ? ' selected' : '')}></div>
       </div>
      </div>
    
    </>
  )
}

export default TrafficLight;