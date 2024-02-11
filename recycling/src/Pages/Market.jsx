import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import searchIcon from '../Assets/search.png';
import '../CSS/Market.css';
import '../CSS/index.css';
import MarketItem from '../Components/MarketItem';

function Market() {
  const [marketItems, setMarketItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMarketItems = async () => {
      try {
        const data = {
          data: [
            { id: 1, title: 'Computer Science Books', content: "I am listing my old school books as I am graduating this year. ", image: "https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg" },
            { id: 2, title: 'Vintage Clothing', content: "I don't have enough room to move these clothes to my new room next year.", image: "https://www.thoughtco.com/thmb/ctxxtfGGeK5f_-S3f8J-jbY-Gp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg" },
            { id: 3, title: 'Toaster', content: "We bought a toaster for our student house at the start, now we don't need it.", image: "https://www.charlies.co.uk/media/catalog/product/cache/a017d3c1755e7999c1cee32d3cb3285b/s/a/salter-ombre-toaster-grey-1.jpg" },
            { id: 4, title: 'Microwave', content: 'Bought a microwave for the house and now we do not need it.', image: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/16c46540-bbee-11ec-b26a-42151ba980ed.jpg'},
            { id: 5, title: 'School Bag', content: "Don't need my bag anymore.", image: 'https://m.media-amazon.com/images/I/81Ippl4VoqL._AC_SL1500_.jpg'}
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
      
      <div class="container"><h1>Marketplace</h1>
        <div className='market'>

        <div class="sidebar">
          <div className='sidebar-section'>
            <text>Filter by</text>
            <div className='box'>
              Points
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
    </div>
  );
}

export default Market;
