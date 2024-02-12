import React from 'react';
import '../CSS/Checkout.css';
import '../CSS/Home.css';
import Header from '../Components/Header';
import BasketItem from '../Components/BasketItem';
import pointIcon from '../Assets/point.png';
import toast, { Toaster } from 'react-hot-toast';
import data from '../data.json';



function Checkout() {




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
            return localStorage.getItem("points");
        } catch {
            return false
        }
    }

    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }
        return randomString;
    }
    

    const handleConfirm = () => {
        if (calculateTotalPoints() > getUserPoints()) {
            toast.error("You don't have enough points to swap.", {duration: 5000})
        } else {
            window.location.href = `/confirm?code=${generateRandomString(8)}`
        }
    };



    const clearCart = () => {
        localStorage.removeItem('cart');
        window.location.reload();
        cartItems = [];
    };

    return (
        <div>
            <Header />
            <div className='Checkout'>
                <h2>Checkout</h2>

                {cartItems.length > 0 ? (
                    <div className="cart-items">
                        <h3>Items in Cart:</h3>
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
                                Cart Total:  {calculateTotalPoints()}<img src={pointIcon} />
                            </span>
                            <span className='total-points'>
                                Available:  {getUserPoints()}<img src={pointIcon} />
                            </span>
                        </div>
                        <form>
                            <button type="button" onClick={handleConfirm} className="cart-confirm">Confirm</button>
                            <button type="button" onClick={clearCart} className="cart-confirm clear-cart">Clear Cart</button>
                        </form>
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

export default Checkout;
