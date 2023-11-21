import React from 'react';
import './Home3.css'; // You can style your boxes in a separate CSS file

const Box = ({ side, image, title, paragraph }) => {
  return (
    <div className={`box ${side}`}>
      <img src={image} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <div className="buttons">
          <button className='exbtn'>View All</button>
          <button className='exbtn'>New Feed</button>
        </div>
      </div>
    </div>
  );
};

const Home3 = () => {
  const leftBoxContent = {
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png',
    title: 'Our commitment to your safety',
    paragraph: 'With every safety feature and every standard in our Community Guidelines, were committed to helping to create a safe environment for our users.',
  };
  const centerBoxContent = {
    image: 'https://images.unsplash.com/photo-1559941727-6fb446e7e8ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHViZXJ8ZW58MHx8MHx8fDA%3D',
    title: 'Uber Eats: Culinary Convenience at Your Doorstep ',
    paragraph: 'Satisfy cravings with Uber Eats, delivering diverse cuisines swiftly,',
  };

  const rightBoxContent = {
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png',
    title: 'Setting 10,000+ cities in motion    ',
    paragraph: 'The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.',
  };

  return (
    <>
    <h1>Focused on safety, wherever you go</h1>
    <div className="app">
      <Box side="left" {...leftBoxContent} />
      <Box side="center" {...centerBoxContent} />
      <Box side="right" {...rightBoxContent} />
    </div>
    
    </>
   
  );
};

export default Home3;
