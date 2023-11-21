import React from 'react'
import './Home5.css'
const Home5 = () => {
  return (
    <>
    <h1 id='tate'>Ride with Uber</h1>
    <div className="container">
      <div className="box365">
      <div className="image">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png" alt="Your Imag" />
        </div>
        <div className="content">
          <h2>
Uber Auto
</h2>
          <p>Get affordable Uber Auto rides with no haggling. Request Uber Auto and ride comfortably around your city.</p>
          <button id='nowbtn'>go now</button>
        </div>
       
      </div>
      <div className="arrow">
        {/* Add your arrow icon here */}
        {/* For example, you can use Font Awesome or any other icon library */}
        <i className="fas fa-arrow-right"></i>
      </div>
      <div className="box365">
      <div className="image">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png" alt="Your Imag" />
        </div>
        <div className="content">
          <h2>Uber Moto</h2>
          <p>
Get affordable bike rides at your doorstep. Skip the crowd and zip through traffic with Uber Moto.</p>
<button id='nowbtn'>go now</button>
        </div>
       
      </div>
    </div>
    <div className="container">
      <div className="box365">
      <div className="image">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png" alt="Your Imag" />
        </div>
        <div className="content">
          <h2>
          
Uber Rentals

</h2>
          <p>Book Rentals to save time with one car and driver for your multi-stop trips.</p>
          <button id='nowbtn'>go now</button>
        </div>
       
      </div>
      <div className="arrow">
        {/* Add your arrow icon here */}
        {/* For example, you can use Font Awesome or any other icon library */}
        <i className="fas fa-arrow-right"></i>
      </div>
      <div className="box365">
      <div className="image">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_188,h_188/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png" alt="Your Imag" />
        </div>
        <div className="content">
          <h2> Uber Intercity</h2>
          <p>
         
Book Intercity to head outstation anytime in convenient and affordable cars</p>
       <button id='nowbtn'>go now</button>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default Home5