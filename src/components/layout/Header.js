

import React, { Component } from 'react'


export default class Header extends Component {
  
    render() {
          return (
            
            <div style={headerStyle}>
            <h1>Posts</h1>
            
        </div>
        )
        
    }
}
const headerStyle ={
    background: '#555',
    color: 'white',
    textAlign : 'center',
    padding : '10px',
    marginBottom : '3px'
}
const linkStyle = {
    color : 'white',
    textDecoration :'none'
}

