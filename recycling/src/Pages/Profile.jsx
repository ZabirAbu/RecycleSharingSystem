import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import '../CSS/Profile.css';
import toast, { Toaster } from 'react-hot-toast';


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
        toast.success("Point added!", {duration : 3000, icon: "🎯" })
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

            {!isLoggedIn ? (
                <div className='Profile'>
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div className='Profile-unlocked'>
                    <div className='profile-space'>

                        <div className='profile-clip'>
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' />
                            <div>
                                <text>Welcome, {localStorage.getItem('username')}!</text>
                                <p>Points: {points}</p>
                            </div><div>
                                <button className='add-point' onClick={addPoint}> Add Point </button>
                                <button className='logout' onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                        <div className='profile-info'>

                        </div>
                    </div>
                </div>
            )}
            <div><Toaster position='bottom-left' reverseOrder={true} /></div>

        </div>
    );
};

export default Profile;
