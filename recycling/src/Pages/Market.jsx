import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import searchIcon from '../Assets/search.png';
import '../CSS/Market.css';
import '../CSS/index.css';
import MarketItem from '../Components/MarketItem';
import data from '../data.json';

function Market() {
  const [marketItems, setMarketItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('points'); // Default sort by points

  useEffect(() => {
    const fetchMarketItems = async () => {
      try {

        setMarketItems(data);
      } catch (error) {
        console.error('Error fetching market items:', error);
      }
    };

    fetchMarketItems();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to sort market items based on points
  const sortMarketItems = (sortBy) => {
    const sortedItems = [...marketItems].sort((a, b) => {
      if (sortBy === 'points') {
        return a.points - b.points; // Sort by points (low to high)
      } else {
        return b.points - a.points; // Sort by points (high to low)
      }
    });
    setMarketItems(sortedItems);
  };

  const filteredMarketItems = marketItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      
      <div class="container"><h1>Marketplace</h1>
        <div className='market'>

        <div class="sidebar">
          {/* <div className='sidebar-section'>
            <text>Filter by</text>
            <div className='box'>
              Points
            </div>
          </div> */}
          <div className='sidebar-section'>
            <text>Sort by</text>
            <div className='box' onClick={() => sortMarketItems('points')}>
              Price: Low to High
            </div>
            <div className='box' onClick={() => sortMarketItems('points-desc')}>
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
            {/* Render market items using MarketItem component */}
            {filteredMarketItems.map((item, index) => (
              <MarketItem
                key={item.id}
                id={item.id} // Make sure to pass the id prop
                title={item.title}
                content={item.content}
                image={item.image}
                points={item.points}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Market;
