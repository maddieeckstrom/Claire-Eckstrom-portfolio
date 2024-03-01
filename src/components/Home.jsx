import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import fashionIMG from '../assets/images/fashionIMG.png';
import barsIMG from '../assets/images/barsIMG.png';
import otherIMG from '../assets/images/otherIMG.png';

export default function Home() {
  const history = useHistory();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleImageClick = (page) => {
    history.push(`/${page}`);
  };
  
  return (
    <section className="section-container">
      <div
        className="home-nav" 
        style={{ display: showContent ? 'grid' : 'none' }}
      >
        <div className='fashion'>
          <img
            className="fashionIMG"
            src={fashionIMG}
            alt="Fashion"
            onClick={() => handleImageClick('Fashion')}
          />
        </div>
        <div className='bars'>
          <img
            className="images"
            src={barsIMG}
            alt="Bars"
            onClick={() => handleImageClick('Bars')}
          />
        </div>
        <div className='other'>
          <img
            className="images"
            src={otherIMG}
            alt="Other"
            onClick={() => handleImageClick('Other')}
          />
        </div>
      </div>
    </section>
  )
}

