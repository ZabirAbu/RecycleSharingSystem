import React from 'react';
import '../CSS/Home.css';

import Header from '../Components/Header';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

function Items() {
  // Dummy data representing your items
  const itemsData = [
    { id: 1, name: 'Product One', price: 19.99 },
    { id: 2, name: 'Product Two', price: 29.99 },
    { id: 3, name: 'Product Three', price: 39.99 },
  ];

  return (
    <>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <div className='Items'>
        <Header />

        {/* Map through the itemsData array to render each item */}
        {itemsData.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
