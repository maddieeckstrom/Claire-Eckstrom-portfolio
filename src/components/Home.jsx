// import React, { useState, useEffect } from 'react';
import '../App.css'

export default function Home({currentPage, handlePageChange}) {

  // const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowContent(true);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);
  
  return (
    <section className="section-container">
      <div className="header">
        <p>CLAİRE ECKSTRÖM</p>
        <p>CONSULTING</p>
      </div>
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

