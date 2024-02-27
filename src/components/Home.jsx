import React, { useState, useEffect } from 'react';
import '../App.css';
// import { motion } from "framer-motion";
import CElogo from '../assets/images/CEConsulting.png';
import fashionIMG from '../assets/images/fashionIMG.png';
import barsIMG from '../assets/images/barsIMG.png';
import otherIMG from '../assets/images/otherIMG.png';

export default function Home({currentPage, handlePageChange}) {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <section className="section-container">
        <div className="header">
          <img className="CElogo" src={CElogo}/>
            {/* <div style={{ position: 'relative' }}> */}
              {/* <motion.div
                style={{ position: 'absolute', top: '25%', left: '25%' }}
                initial={{ x: 0, y: 0, scale: 1}}
                animate={{
                  x: ['25%', '5000%', '5000%', '1000%'],
                  y: ['25%', '25%', '500%', '500%'],
                  scale: [1],
                  transition: { duration: 2, repeat: 0 }
                }}
              >
                <p>placeholder</p>
              </motion.div> */}
            {/* </div> */}
        </div>
      <div
        className="home-nav" 
        style={{ display: showContent ? 'grid' : 'none' }}
      >
        <div className='fashion'>
          <a
            href='#Fashion'
            onClick={() => handlePageChange('Fashion')}
            className={currentPage === 'Fashion' ? 'fashion-link active' : 'fashion-link'}
          >
            <img className="fashionIMG" src={fashionIMG}></img>
          </a>
        </div>
        <div className='bars'>
          <a 
            href='#Bars'
            onClick={() => handlePageChange('Bars')}
            className={currentPage === 'Bars' ? 'bar-link active' : 'bar-link'}
          >
            <img className="images" src={barsIMG}></img>
          </a>
        </div>
        <div className='other'>
          <a 
            href='#Other'
            onClick={() => handlePageChange('Other')}
            className={currentPage === 'Other' ? 'other-link active' : 'other-link'}
          >
            <img className="images" src={otherIMG}></img>
          </a>
        </div>
      </div>
    </section>
  )
}

