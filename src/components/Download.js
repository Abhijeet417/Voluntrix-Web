// import React from 'react'
// import './All_Styles/Download.css'
// import Mb from './All_images/loginScreen.png'
// export const Download = () => {
//   return (
//       <div  id="download" class="px-3 py-4 text-center" style={{backgroundColor : "black",color : "white"}}>
//         <img class="d-block mx-auto mb-4" src={Mb} alt="" width="350" height="450"/>
//         <h1 class="display-5 fw-bold">Download Our App</h1>
//         <div class="col-lg-6 mx-auto">
//           <p class="lead mb-4 download-paragraph">Download Our Brand New App (Voluntrix).</p>
//           <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
//             <button type="button" class="btn btn-primary btn-lg px-4 gap-3 btn-light"><a href=""><i class="fa-brands fa-google-play" style={{color: "#2a1f51",marginRight:"7px"}}></i></a>For Android</button>
//             <button type="button" class="btn btn-primary btn-lg px-4 gap-3 btn-light"><a href=""><i class="fa-brands fa-apple" style={{color: "#2a1f51",marginRight:"7px"}}></i></a>For IOS</button>
//           </div>
//         </div>
//       </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import './All_Styles/Download.css';
import image2 from './All_images/2loginScreen.png';
import image1 from './All_images/1SplashScreen-.png'; 
import image3 from './All_images/3Onboarading.png';
import image4 from './All_images/4Dashborad.png';
import image5 from './All_images/5Navigation.png';
import image6 from './All_images/6User.png';
import qrCodeImage from './All_images/QRcODE.jpeg'



export const Download = () => {
  const images = [image1,image2,image3,image4,image5,image6]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => {
      clearInterval(animationInterval);
    };
  }, [images]);

  return (
   <div id="download" style={{ backgroundColor: "black", color: "white" }}>
    <div className="download-content row justify-content-center align-items-center">
      <div className="download-left col-lg-8 ">
        <img src={images[currentImageIndex]} alt="" width="400" height="650" />
        <h1 className="fw-bold">Download Our App</h1>
        <p className="download-paragraph">Download Our Brand New App (Voluntrix).</p>
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <a
            href="https://drive.google.com/drive/folders/1cXZMyJ6yDvmBVVOVuqtmo9l15taMAiQj"
            target="_blank"
            className="btn btn-primary btn-lg px-4 gap-3 btn-light"
            style={{ color: "#2a1f51" }}
          >
            <i className="fa-brands fa-google-play" style={{ marginRight: "7px" }}></i>
            For Android
          </a>
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3 btn-light"
          >
            <a href="">
              <i
                className="fa-brands fa-apple"
                style={{ color: "#2a1f51", marginRight: "7px" }}
              ></i>
            </a>
            For IOS
          </button>
        </div>
      </div>
       <div className="download-right col-lg-4">
        <div className="qr-code-container">
          <img src={qrCodeImage} alt="QR Code" className="qr-code-image" />
          <p className="qr-code-text">Scan the QR CODE</p>
           <p className="qr-code-text">Download the app</p>
        </div>
      </div>

    </div>
  </div>

  );
};
