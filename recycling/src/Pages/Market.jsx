import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import searchIcon from '../Assets/search.png';
import '../CSS/Market.css';
import '../CSS/index.css';
import MarketItem from '../Components/MarketItem';

function Market() {
  // Initialize state for market items and search query
  const [marketItems, setMarketItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect to fetch market items from API
  useEffect(() => {
    // Fetch market items from your Express API
    const fetchMarketItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/getItems');
        const data = {
          data: [
            { id: 1, title: 'Item 1', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg"},
            { id: 2, title: 'Item 2', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg" },
            { id: 3, title: 'Item 3', content: "Item 1", image : "https://i.etsystatic.com/20931094/r/il/9bf93f/4746438886/il_fullxfull.4746438886_3mp6.jpg" }
          ]
        }
        setMarketItems(data.data);
      } catch (error) {
        console.error('Error fetching market items:', error);
      }
    };

    fetchMarketItems();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
            {/* Render market items using MarketItem component */}
            {filteredMarketItems.map((item, index) => (
              <MarketItem
                key={item.id}
                id={item.id} // Make sure to pass the id prop
                title={item.title}
                content={item.content}
                image={item.image}
              />

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
