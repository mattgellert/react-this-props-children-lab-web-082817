// Code Invitation Component Here
import React, {Component} from 'react'

const Invitation = (props) => {
  return (
    <div className="invitation">
      <h1>You've been invited!</h1>
      {props.children}
    </div>
  )
}

export default Invitation
