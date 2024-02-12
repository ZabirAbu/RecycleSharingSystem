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
    const getNextId = (data) => {
        if (data.length === 0) {
            return 1; // If data array is empty, start with ID 1
        } else {
            const maxId = Math.max(...data.map(item => item.id));
            return maxId + 1; // Increment the maximum ID by 1
        }
    };

    const handleList = () => {
        // Retrieve input values
        const title = document.getElementById('title').value;
        const points = document.getElementById('points').value;
        const description = document.getElementById('description').value;
        const imageURL = document.getElementById('imageURL').value;
        const niche = document.getElementById('niche').value;

        if (title.length < 4) {
            toast.error('Title must be at least 4 characters long.');
            return;
        } else if (points === '' || isNaN(parseInt(points)) || parseInt(points) <= 0) {
            toast.error('Points must be a positive integer.');
            return;
        } else if (description.length < 8) {
            toast.error('Description must be at least 8 characters long.');
            return;
        } else if (!imageURL.startsWith('http')) {
            toast.error('Image URL must start with "http" or "https".');
            return;
        } else if (niche.length < 4) {
            toast.error('Niche must be at least 4 characters long.');
            return;
        } else {

            // Read existing data from localStorage
            const existingData = JSON.parse(localStorage.getItem('listData')) || [];

            // Create a new item object with the next available ID
            const newItem = {
                id: getNextId(existingData),
                points: parseInt(points),
                tag: niche,
                title,
                content: description,
                image: imageURL
            };

            // Append the new item to the existing data array
            existingData.push(newItem);

            // Write the updated data back to localStorage
            localStorage.setItem('listData', JSON.stringify(existingData));
            toast.success("Item will be verified by an admin.", { duration: 5000 })
            window.location.reload();

        }
    };

    const [listData, setListData] = useState([]);

    useEffect(() => {
        // Fetch data from localStorage
        const data = JSON.parse(localStorage.getItem('listData')) || [];
        setListData(data);
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
                <div className='Profile-unlocked list-page'>
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
                            <button onClick={handleList} className='list-btn'>List Items</button>

                        </div>
                    </div>
                    <div className='sell-page'>
                        <h1 className='list-title'>Items waiting for verification</h1>
                        <div className='waiting-list'>
                            {listData.map(item => (
                                <div key={item.id} className='waiting-box'>
                                    <div> ⏳ </div>
                                    <div>{item.id}</div>
                                    <div>{item.title}</div>
                                    <div>{item.points}<img className="wbx-img" src={pointIcon} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div><Toaster position='bottom-left' reverseOrder={true} /></div>

        </div>
    );
};

export default List;
