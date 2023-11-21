import React from 'react'
import './Home.css'
import nrtto from './images/tower icon.png'
import rent from './images/rent icon.png'
import ride from './images/drive icon.png'
const Home = () => {
  return (
    <>
    <div>
      <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1899,h_805/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png" alt='.' className='homeimage'></img>
    </div>
    
   <div className='bobox'>
   <div className="border-box">
      {/* Top Row Icons */}
      <div className="top-icons">
  <div class="image-container">
    <img src={ride} alt='.' class='iconit'></img>
    <div class="image-title">ride</div>
  </div>

  <div class="image-container">
    <img src={nrtto} alt='.' class='iconit'></img>
    <div class="image-title">Drive or<br /> deliver</div>
  </div>

  <div class="image-container">
    <img src={rent} alt='.' class='iconit'></img>
    <div class="image-title">Rent your<br /> fleet
</div>
  </div>
</div>
      {/* Title and Input Bars */}
      <div className="content">
        <h1 className="title">Request a ride now</h1>
        <div className="input-container">
          
          <input type="text" placeholder="inter pick up locations" className="input" />
        </div>
        <div className="input-container">
         
          <input type="text" placeholder="inter destination" className="input" />
        </div>
        <hr className="border-line" />
      </div>

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
        <button className="left-button">request now</button>
        <button className="right-button">shadule for later</button>
      </div>
    </div>
   </div>
    </>
  )
}

export default Home