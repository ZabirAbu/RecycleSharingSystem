import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import '../CSS/Profile.css';

const Profile = () => {
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

    const addPoint = () => {
        const updatedPoints = points + 1; // Increment points
        setPoints(updatedPoints);
        localStorage.setItem('points', updatedPoints); // Update points in localStorage
    };

    const handleLogin = () => {
        localStorage.setItem('username', 'Team6');
        localStorage.setItem('points', 0);
        setIsLoggedIn(true);
        setPoints(0); // Reset points to 0 when logging in
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Header />
            <div className='Profile'>
                {!isLoggedIn ? (
                    <button onClick={handleLogin}>Login</button>
                ) : (
                    <div className='Profile-unlocked'>
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' />
                        <p>Welcome, {localStorage.getItem('username')}!</p>
                        <p>Points: {points}</p>
                        <button onClick={handleLogout}>Logout</button>
                        <button onClick={addPoint}> Add Point </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
