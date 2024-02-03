import { useState } from 'react';
import '../App.css';
import Header from '../components/Header';
import Home from '../components/Home';
import Fashion from '../components/Fashion';
import Bars from '../components/Bars';
import Other from '../components/Other';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <Home />;
        }

        if (currentPage === 'Portfolio') {
            return <Fashion />;
        }

        if (currentPage === 'Resume') {
            return <Bars />;
        }
        
        if (currentPage === 'Contact') {
            return <Other />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          <main>{renderPage()}</main>
        </div>
      );
}