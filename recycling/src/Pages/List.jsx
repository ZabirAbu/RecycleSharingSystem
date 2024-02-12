import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import '../CSS/Profile.css';
import '../CSS/Sell.css';

import pointIcon from '../Assets/point.png';
import toast, { Toaster } from 'react-hot-toast';


const List = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [points, setPoints] = useState(0); // Initialize points with 0

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setIsLoggedIn(true);
        }

        const storedPoints = localStorage.getItem('points');
        if (storedPoints) {
            setPoints(parseInt(storedPoints)); // Parse stored points as integer
        }
    }, []);

    return (
        <div>
            <Header />

            {!isLoggedIn ? (
                <div className='Profile'>
                    <button className='profileClipBtn add-point' onClick={() => {
                        window.location.href = `/profile`;
                    }}>Go to Login</button>
                </div>
            ) : (
                <div className='Profile-unlocked'>
                    <div className='sell-page'>
                        <h1 className='list-title'>List your item</h1>
                        <div className='list-details'>
                            <div className='list-box'>
                                <input id='title' className='list-input' placeholder='Title' />
                                <input id='points' className='list-input' placeholder='Points' />
                            </div>
                            <div className='list-box'>
                                <textarea id='description' className='list-input' placeholder='Description' />
                            </div>
                            <div className='list-box'>
                                <input id='imageURL' className='list-input' placeholder='Image URL' />
                                <input id='niche' className='list-input' placeholder='Niche' />
                            </div>
                        </div>
                        <div className='list-box'>
                            <button  className='list-btn'>List</button>
                        </div>
                    </div>
                </div>
            )}
            <div><Toaster position='bottom-left' reverseOrder={true} /></div>

        </div>
    );
};

export default List;
