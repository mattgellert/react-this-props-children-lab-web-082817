// Code ThemedDecoration Component Here
import React, {Component} from 'react'

const ThemedDecorations = (props) => {
  const childrenWithExtraProp = React.Children.map(props.children, child => {
        return React.cloneElement(child, {className: props.theme});
      });
  return (
    <div>
      {childrenWithExtraProp}
    </div>
  )
}

export default ThemedDecorations
