import React, { useState, useEffect } from 'react';

import { useSearchParams } from "react-router-dom";

import Header from '../Components/Header';
import '../CSS/index.css';
import '../CSS/Item.css';
import pointsIcon from '../Assets/point.png';
import toast, { Toaster } from 'react-hot-toast';

import Recomendation from '../Components/Recomendation';
import data from '../data.json';



function Item() {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));

    const item = data.find((item) => item.id == id);
    const title = item.title;
    const content = item.content;
    const image = item.image;
    const points = item.points;

    const [cart, setCart] = useState([]);

    const addToCart = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const itemId = searchParams.get('id');
        if (!cart.includes(itemId)) {
            console.log(itemId)
            setCart([...cart, itemId]);
            localStorage.setItem('cart', JSON.stringify([...cart, itemId]));
            window.location.reload();
        } else {
            toast.error("Already in cart.", { duration: 3000 })
        }
    };
    const removeFromCart = (idToRemove) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.filter(itemId => itemId !== idToRemove);
        setCart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload();
        // Optionally, you can trigger a re-render or update the UI here
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
                    <div className='itemdetail-image'>
                        <img src={item.image} alt={item.title} width="400" height="300" />
                    </div>
                    <div className='itemdetail-info'>
                        <h1 className='itemdetail-title'>
                            {title}
                        </h1>
                        <div className='itmd-desc'>
                            <h1>Description</h1>
                            <div className='itemdetail-content'>
                                {content}
                            </div>

                        </div>
                        <div className='itmd-desc'>
                            <h1>Points</h1>
                            <div className='itemdetail-content'>
                                {points} <img src={pointsIcon} />
                            </div>
                        </div>
                        <div className='itmd-btns'>
                            <button onClick={addToCart} className="add-to-cart-button">Add to Cart</button>
                            <button onClick={() => removeFromCart(id.toString())} className="delete-cart-button">Delete Cart</button>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
                <Recomendation currentImageId={id} />
            </div>
            <div><Toaster position='bottom-left' reverseOrder={true} /></div>
        </div>
    );
}

export default Item;
