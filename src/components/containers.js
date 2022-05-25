import React, { useState } from 'react';
import NavTabs from './tabs';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Footer from './footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage()}</div>

      <Footer />
    </div>
  );
}