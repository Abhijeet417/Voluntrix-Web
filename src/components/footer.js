import React from 'react'

export const Footer = () => {
    const FooterStyle = {
      backgroundColor: "white",
      fontWeight: "bold",
      fontSize: "1rem",
      // position: "fixed",
      bottom: 0,
      left: 0,
      display : "flex", padding : "0 40%",
      width: "100%",
    }
  return (
    <div className='text-light' style={FooterStyle}>
         <p style={{color : "grey"}}>Copyright &copy; Voluntrix.com</p>
         <i class="fa-brands fa-instagram" style={{padding:"6px",color:"grey"}}></i>
         <i class="fa-brands fa-facebook-f" style={{padding:"6px",color:"grey"}}></i>
    </div>
  )
}
