import React, {useEffect} from 'react';
import '../CSS/Checkout.css';
import '../CSS/Home.css';
import Header from '../Components/Header';
import BasketItem from '../Components/BasketItem';
import pointIcon from '../Assets/point.png';
import toast, { Toaster } from 'react-hot-toast';
import data from '../data.json';


function Confirm() {


    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = [];
    try {
        cartItems = cart.map((id) => data.find((item) => item.id === parseInt(id)));
    } catch { }

    const calculateTotalPoints = () => {
        return cartItems.reduce((total, item) => total + item.points, 0);
    };

    const getUserPoints = () => {
        try {
            return localStorage.getItem("points") - calculateTotalPoints();
        } catch {
            return false
        }
    }

    const clearCart = () => {
        localStorage.removeItem('cart');
        localStorage.setItem("points", getUserPoints())
        cartItems = [];
    };

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');


    useEffect(() => {
        clearCart()
      }, []);

    return (
        <div>
            <Header />
            <div className='Checkout'>
                <h2>Confirmed Order</h2>

                {cartItems.length > 0 ? (
                    <div className="cart-items">
                        <h3>Items Bought:</h3>
                        {cartItems.map(item => (
                            <BasketItem
                                key={item.id} // Make sure to include a unique key for each item
                                id={item.id}
                                title={item.title}
                                content={item.content}
                                image={item.image}
                                points={item.points}
                            />
                        ))}
                        <div className='user-points-box'>
                            <span className='total-points'>
                                Spent:  {calculateTotalPoints()}<img src={pointIcon} />
                            </span>
                            <span className='total-points'>
                                Available:  {getUserPoints()}<img src={pointIcon} />
                            </span>
                        </div>
                        <hr />
                        <div className='code-box'>

                            <h3>Here is your code: </h3>
                            <text>{code}</text>
                            <h5>Show this to a supervisor at your local SwapPoint to receive your item/s.</h5>
                        </div>
                        
                    </div>
                ) : (
                    <div className="empty-cart">
                        <p>Your cart is empty.</p>
                    </div>
                )}

            </div>
            <div><Toaster position='bottom-left' reverseOrder={true} /></div>

        </div>
    );
}

export default Confirm;
