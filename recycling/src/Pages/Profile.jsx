import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';

const Profile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if username exists in localStorage
        const username = localStorage.getItem('username');
        if (username) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        // Perform login actions here (e.g., redirect to login page)
        // For now, just set a dummy username in localStorage
        localStorage.setItem('username', 'Team6');
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Perform logout actions here (e.g., clear localStorage)
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
                    <div>
                        <p>Welcome, {localStorage.getItem('username')}!</p>
                        <button onClick={handleLogout}>Logout</button>
                        {/* Add more profile information/components here */}
                    </div>
                )}
            </div>

        </div>
    );
};

export default Profile;
