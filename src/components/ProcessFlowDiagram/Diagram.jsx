import React from 'react'
import './diagram.css'
import processflowDiagram from '../assets/processflowDiagram.svg'
export default function Diagram() {
  return (
    <div className='Diagram'>
        <img src={processflowDiagram} alt="" />
    </div>
  )
}
