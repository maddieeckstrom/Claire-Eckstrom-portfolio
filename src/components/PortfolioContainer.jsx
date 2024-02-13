import { useState } from 'react';
import '../App.css';
import Navbar from './Navbar'
import Home from '../components/Home';
import Fashion from '../components/Fashion';
import Bars from '../components/Bars';
import Other from '../components/Other';
import Footer from '../components/Footer';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        // if (currentPage === 'Home') {
        //     return <Home />;
        // }

        if (currentPage === 'Fashion') {
            return <Fashion />;
        }

        if (currentPage === 'Bars') {
            return <Bars />;
        }
        
        if (currentPage === 'Other') {
            return <Other />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Home currentPage={currentPage} handlePageChange={handlePageChange}/>
          <main>{renderPage()}</main>
          <Footer />
        </div>
      );
}