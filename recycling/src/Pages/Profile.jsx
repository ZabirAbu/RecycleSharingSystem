import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import '../CSS/Profile.css';
import pointIcon from '../Assets/point.png';
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
        toast.success("Point added!", { duration: 3000, icon: "🎯" })
    };

    const shareProfile = () => {
        navigator.clipboard.writeText("http://swapstuff.tech/profile?user=Team6");
        toast.success("Copied to clipboard.", { duration: 3000, icon: "📣" })
    };

    const handleLogin = () => {
        localStorage.setItem('username', 'Team6');
        localStorage.setItem('points', 0);
        toast.success("Logged in.", { duration: 3000, icon: "👋" })
        setIsLoggedIn(true);
        setPoints(0); // Reset points to 0 when logging in
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        toast.success("Logged out.", { duration: 3000, icon: "👋" })
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Header />

            {!isLoggedIn ? (
                <div className='Profile'>
                    <button className='profileClipBtn add-point' onClick={handleLogin}>Login</button>
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
                                <button className='profileClipBtn add-point' onClick={addPoint}> Add Point </button>
                                <button className='profileClipBtn share' onClick={shareProfile}> Share </button>

                                <button className='profileClipBtn logout' onClick={handleLogout}>Logout</button>
                            </div>
                        </div>
                        <div className='profile-info'>
                            <div className='past-purchases-container'>
                                <h1>Past Purchases</h1>
                                <div className='past-purchases'>
                                    <div className='purchase-item'>
                                        <div className='pie-cont'>
                                            <div className='pie-img'>
                                                <img src={pointIcon} />
                                            </div>
                                            <div className='pie-title'>
                                                Purchased: Vintage Clothing
                                            </div>
                                        </div>
                                        <div className='pie-date'>
                                            11/02/2024
                                        </div>
                                    </div>
                                    <div className='purchase-item'>
                                        <div className='pie-cont'>
                                            <div className='pie-img'>
                                                <img src={pointIcon} />
                                            </div>
                                            <div className='pie-title'>
                                                Purchased: Cooking Pan
                                            </div>
                                        </div>
                                        <div className='pie-date'>
                                            11/02/2024
                                        </div>
                                    </div>
                                    <div className='purchase-item'>
                                        <div className='pie-cont'>
                                            <div className='pie-img'>
                                                <img src={pointIcon} />
                                            </div>
                                            <div className='pie-title'>
                                                Purchased: Bracelets
                                            </div>
                                        </div>
                                        <div className='pie-date'>
                                            10/02/2024
                                        </div>
                                    </div>
                                    <div className='purchase-item'>
                                        <div className='pie-cont'>
                                            <div className='pie-img'>
                                                <img src={pointIcon} />
                                            </div>
                                            <div className='pie-title'>
                                                Purchased: Album Covers
                                            </div>
                                        </div>
                                        <div className='pie-date'>
                                            09/02/2024
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='past-purchases-container'>
                                <h1>Local Leaderboard</h1>
                                <div className='past-purchases'>
                                    <div className='purchase-item'>
                                        <div className='pie-cont'>
                                            <div className='pie-img'>
                                            <img src={pointIcon} /> 1,201
                                            </div>
                                            <div className='pie-title'>
                                                John Smith
                                            </div>
                                        </div>
                                        <div className='pie-date'>
                                        🏆
                                        </div>
                                    </div>
                                    <div className='purchase-item'>
                                        <div className='pie-cont'>
                                            <div className='pie-img'>
                                            <img src={pointIcon} /> 1,190
                                            </div>
                                            <div className='pie-title'>
                                                Jane Doe
                                            </div>
                                        </div>
                                        <div className='pie-date'>
                                            🥇
                                        </div>
                                    </div>
                                    <div className='purchase-item'>
                                        <div className='pie-cont'>
                                            <div className='pie-img'>
                                                <img src={pointIcon} /> 1,102
                                            </div>
                                            <div className='pie-title'>
                                                Elen Joy
                                            </div>
                                        </div>
                                        <div className='pie-date'>
                                        🥈
                                        </div>
                                    </div>
                                    <div className='purchase-item'>
                                        <div className='pie-cont'>
                                            <div className='pie-img'>
                                                <img src={pointIcon} /> 1,009
                                            </div>
                                            <div className='pie-title'>
                                                Sam Jackson
                                            </div>
                                        </div>
                                        <div className='pie-date'>
                                        🥉
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
            <div><Toaster position='bottom-left' reverseOrder={true} /></div>

        </div>
    );
};

export default Profile;
