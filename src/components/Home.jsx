import React, { useState, useEffect } from 'react';
import '../App.css'
import { motion } from "framer-motion";

export default function Home({currentPage, handlePageChange}) {

  const [showContent, setShowContent] = useState(false);
  const [isVisible, setIsVisible] = useState(true)
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleAnimationComplete = () => {
    setIsVisible(false);
  };

  // useEffect(() => {
    // Set interval to toggle header visibility every 1/2 second
    // const intervalId = setInterval(() => {
    //   setIsHeaderVisible(prevState => !prevState);
    // }, 500);

    // Clear after 2 seconds
    // setTimeout(() => {
    //   clearInterval(intervalId);
    //   setIsHeaderVisible(true);
    // }, 2000);

    // Cleanup function to clear interval
  //   return () => clearInterval(intervalId);
  // }, []);
  
  return (
    <section className="section-container">
      {/* {isHeaderVisible && ( */}
        <div className="header">
          {isVisible && (
            <div style={{ position: 'relative' }}>
              <motion.div
                style={{ position: 'absolute', top: 0, left: 0 }}
                initial={{ x: 239, y: 0 }}
                animate={{
                  x: [239, 350, 500, 350], 
                  y: [0, 0, 100, 200], 
                  transition: { duration: 2, repeat: 0, type: 'keyframes' }
                }}
                onAnimationComplete={handleAnimationComplete}
                // path={{ path: "M239 0 Q 500 100, 350 200" }}
              >
                <p>¨</p>
              </motion.div>
            </div>
          )}
          <p>CLAİRE ECKSTRÖM</p>
          <p>CONSULTING</p>
        </div>
      {/* )} */}
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
            <img></img>
          </a>
        </div>
        <div className='bars'>
          <a 
            href='#Bars'
            onClick={() => handlePageChange('Bars')}
            className={currentPage === 'Bars' ? 'bar-link active' : 'bar-link'}
          >
            <img></img>
          </a>
        </div>
        <div className='other'>
          <a 
            href='#Other'
            onClick={() => handlePageChange('Other')}
            className={currentPage === 'Other' ? 'other-link active' : 'other-link'}
          >
            <img></img>
          </a>
        </div>
      </div>
    </section>
  )
}

