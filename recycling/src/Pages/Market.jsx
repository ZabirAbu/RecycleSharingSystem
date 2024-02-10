import React, { useState } from 'react';
import Header from '../Components/Header';
import searchIcon from '../Assets/search.png';
import '../CSS/Market.css';
import '../CSS/index.css';

function Market() {
  // Initialize state for market items and search query
  const [marketItems, setMarketItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter market items based on search query
  const filteredMarketItems = marketItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div class="container">

      <div class="sidebar">
          <div className='sidebar-section'>
            <text>Filter by</text>
            <div className='box'>
              Location
            </div>
            <div className='box'>
              Weight
            </div>
          </div>
          <div className='sidebar-section'>
            <text>Sort by</text>
            <div className='box'>
              Price: Low to High
            </div>
            <div className='box'>
              Price: High to Low
            </div>
          </div>
        </div>
        <div className="content">
          {/* Topbar with search input */}
          <div className="topbar">
            <div className='search-bar-container'>
              <img src={searchIcon} className='search-icon' alt='search' />
              <input
                className='search-bar'
                placeholder='Find items'
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>

          {/* Main section with market boxes */}
          <div className="main">
            {/* Render market boxes */}
            {filteredMarketItems.map((item, index) => (
              <div className='market-box' key={index}>
                <div className='mkb-img'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='mkb-info'>
                  <div className='mkb-title'>
                    {item.title}
                  </div>
                  <div className='mkb-desc'>
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
