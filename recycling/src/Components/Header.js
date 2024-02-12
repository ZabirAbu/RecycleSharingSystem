import '../CSS/Header.css';
import homeIcon from '../Assets/home.png';
import marketIcon from '../Assets/market.png';
import loginIcon from '../Assets/person.png';
import logo from '../Assets/icon.png'
import cart from '../Assets/cart.png'
import { useEffect, useState } from 'react';

function Header() {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCartCount(cart.length);
        }
    }, []);

    // Function to update the cart count when an item is added or removed
    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCartCount(cart.length);
        } else {
            setCartCount(0);
        }
    };

    // Subscribe to changes in local storage to update the cart count
    useEffect(() => {
        updateCartCount(); // Initial fetch
        window.addEventListener('storage', updateCartCount); // Listen for storage changes
        return () => {
            window.removeEventListener('storage', updateCartCount); // Clean up event listener
        };
    }, []);

    
    return (
        <div className='Header'>
            <a className='logo' href='/home'>
                <img src={logo} />
            </a>
            <div className='nav'>
                <a className='nav-btn' href='/home'>
                <img src={homeIcon} /> 
                </a>
                <a className='nav-btn' href='/market'>
                    <img src={marketIcon} />
                </a>
                <a className='nav-btn' href='/profile'>
                    <img src={loginIcon} />
                </a>
                <a className='nav-btn' href='/checkout'>
                    <img src={cart} /> {cartCount}
                </a>
            </div>

        </div>

    );
}

export default Header;
