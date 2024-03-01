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
        <div className='fashionHome'>
          <img
            className="fashionIMGHome"
            src={fashionIMG}
            alt="Fashion, Luxury, & Lifestyle Brands"
            onClick={() => handleImageClick('Fashion')}
          />
        </div>
        <div className='barsHome'>
          <img
            className="imagesHome"
            src={barsIMG}
            alt="Bars & Restaurants"
            onClick={() => handleImageClick('Bars')}
          />
        </div>
        <div className='otherHome'>
          <img
            className="imagesHome"
            src={otherIMG}
            alt="Other Creatives"
            onClick={() => handleImageClick('Other')}
          />
        </div>
      </div>
    </section>
  )
}

