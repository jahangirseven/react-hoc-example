import React from 'react'
import Hoc from '../hooks/hoc'
function SecondComponent(props) {
  return (
    <div>{props.text}</div>
  )
}
export default Hoc(SecondComponent) 

