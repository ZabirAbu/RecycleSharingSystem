import React from 'react';
import '../CSS/Checkout.css';
import '../CSS/Home.css';
import Header from '../Components/Header';

function Checkout() {
  // Sample data for items in the cart
  // const cartItems = [
  //   { id: 1, name: 'Item 1', points: 100 },
  //   { id: 2, name: 'Item 2', points: 150 },
  //   // Add more items as needed
  // ];

  const data = [
    { id: 1, points: 36, tag: "study", title: 'Computer Science Books', content: "I am listing my old school books as I am graduating this year. ", image: "https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg" },
    { id: 2, points: 14, tag: "clothing", title: 'Vintage Clothing', content: "I don't have enough room to move these clothes to my new room next year.", image: "https://www.thoughtco.com/thmb/ctxxtfGGeK5f_-S3f8J-jbY-Gp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg" },
    { id: 3, points: 43, tag: "electrical", title: 'Toaster', content: "We bought a toaster for our student house at the start, now we don't need it.", image: "https://www.charlies.co.uk/media/catalog/product/cache/a017d3c1755e7999c1cee32d3cb3285b/s/a/salter-ombre-toaster-grey-1.jpg" },
    { id: 4, points: 42, tag: "electrical", title: 'Microwave', content: 'Bought a microwave for the house and now we do not need it.', image: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/16c46540-bbee-11ec-b26a-42151ba980ed.jpg'},
    { id: 5, points: 10, tag: "clothing", title: 'School Bag', content: "Don't need my bag anymore.", image: 'https://m.media-amazon.com/images/I/81Ippl4VoqL._AC_SL1500_.jpg'}
  ];

  let cart = JSON.parse(localStorage.getItem('cart'));
  const cartItems = cart.map((id) => data.find((item) => item.id === parseInt(id)));
  
  // Function to calculate the total points in the cart
  const calculateTotalPoints = () => {
    return cartItems.reduce((total, item) => total + item.points, 0);
  };

  // Event handler for form submission
  const handleConfirm = () => {
    // Perform any additional actions here, such as making an API call to confirm the order
    console.log('Order confirmed!');
  };

  return (
    <div>
      <Header />
      <div className='Checkout'>
        <h2>Checkout</h2>
        
        <div className="cart-items">
          <h3>Items in Cart:</h3>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - {item.points} points
              </li>
            ))}
          </ul>
          <p>Total Points: {calculateTotalPoints()}</p>
        </div>

        <form>
          {/* Add more form fields as needed */}
          
          <button type="button" onClick={handleConfirm}>Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
