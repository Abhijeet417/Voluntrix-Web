import React from 'react'

const Dialog = () => {
    const cardStyle={
        backgroundColor:'black',
        width:'18rem',
     position:'absolute',
         left:'40%',
         top:'40%',
    }
    const text={
        color:'#8f43ee'
    }
    const para={
        color:'#7c96ab'
    }
  return (
    <div class="card" style={cardStyle}>
  <div class="card-body">
    <h5 class="card-title" style={text}>No Post Yet</h5>
    <p class="card-text" style={para}> Join us and make your Event successful</p>
     
  </div>
</div>
  )
}

export default Dialog