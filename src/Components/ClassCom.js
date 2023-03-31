import React, { Component } from 'react'

export class ClassCom extends Component {
  render() {
    return (
      <div className='classdiv'>
        <h1>This is using Class Component</h1>
      <p>This is done using external CSS</p>
      <p style={{color:'blueviolet'}}>This is done using inline CSS</p>
      </div>
    )
  }
}

export default ClassCom