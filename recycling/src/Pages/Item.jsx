import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import '../CSS/index.css';
import '../CSS/Item.css';

function Item() {
    // const { id: itemId } = useParams(); // Extract the 'id' parameter from the URL
    const [cart, setCart] = useState([]); // State to manage cart items



    // Function to add item to cart
    const addToCart = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const itemId = searchParams.get('id');
        if (!cart.includes(itemId)) {
            console.log(itemId)
            setCart([...cart, itemId]);
            localStorage.setItem('cart', JSON.stringify([...cart, itemId]));
        }
    };

    const deleteCart = () => {
        localStorage.removeItem('cart');

    };

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            console.log(JSON.parse(storedCart))
            setCart(JSON.parse(storedCart));
        }
    }, []);

    return (
        <div>
            <Header />
            <div className='Item-container'>
                <div className='Item'>
                    <div className='item-image'>
                        {/* Item image goes here */}
                    </div>
                    <div className='item-info'>
                        <div className='item-title'>
                            {/* {title} */}title{cart}
                        </div>
                        <div className='item-content'>
                            {/* {content} */}content
                        </div>
                        {/* Button to add item to cart */}
                        <button onClick={addToCart}>Add to Cart</button>
                        <button onClick={deleteCart}>Delete Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
