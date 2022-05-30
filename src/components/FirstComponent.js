import React from 'react'
import Hoc from '../hooks/hoc.js'

 function FirstComponent(props) {
  return (
    <div onClick={props.clickfunc}>{props.text}</div>
  )
}
export default Hoc(FirstComponent)

