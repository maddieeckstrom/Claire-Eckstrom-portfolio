// import React, { useState, useEffect } from 'react';
import '../App.css'

export default function Home({currentPage, handlePageChange}) {

  // const [showContent, setShowContent] = useState(false);
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowContent(true);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);

  // useEffect(() => {
    // Set interval to toggle header visibility every 500 milliseconds
    // const intervalId = setInterval(() => {
    //   setIsHeaderVisible(prevState => !prevState);
    // }, 500);

    // Clear interval after 2000 milliseconds (2 seconds)
    // setTimeout(() => {
    //   clearInterval(intervalId);
    //   setIsHeaderVisible(true); // Ensure header is visible after blinking
    // }, 2000);

    // Cleanup function to clear interval
  //   return () => clearInterval(intervalId);
  // }, []);
  
  return (
    <section className="section-container">
      {/* {isHeaderVisible && ( */}
      <div className="header">
        <p>CLAİRE ECKSTRÖM</p>
        <p>CONSULTING</p>
      </div>
      {/* )} */}
      <div
        className="home-nav" 
        // style={{ display: showContent ? 'block' : 'none' }}
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

