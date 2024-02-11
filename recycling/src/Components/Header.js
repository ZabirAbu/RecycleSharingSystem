import '../CSS/Header.css';
import homeIcon from '../Assets/home.png';
import marketIcon from '../Assets/market.png';
import loginIcon from '../Assets/person.png';
import logo from '../Assets/icon.png'
import cart from '../Assets/cart.png'


import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';

function Header() {
    const [theme, setTheme] = useState('darkmode');
    const [cartLength, setCartLength] = useState(); // State to manage cart items

   

    const handleChange = (event) => {
        setTheme(event.target.value);
        const root = document.querySelector(":root");
    
        if (event.target.value === "darkmode"){
            root.style.setProperty("--primary-color", "#1c1d22");
            root.style.setProperty("--secondary-color", "#1c1d22");
            root.style.setProperty("--highlight", "#2c2d30");
            root.style.setProperty("--white", "#fefefe");
            root.style.setProperty("--icon-filter", "invert(1)");
        } else {
            root.style.setProperty("--primary-color", "#f5fff5");
            root.style.setProperty("--secondary-color", "#cccccc");
            root.style.setProperty("--highlight", "#edeae7");
            root.style.setProperty("--white", "#010101");
            root.style.setProperty("--icon-filter", "invert(0)");
        }
    };

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            console.log(JSON.parse(storedCart))
            setCartLength(JSON.parse(storedCart).length);
        }
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
                    <img src={cart} /> {cartLength}
                </a>
            </div>

        </div>

    );
}

export default Header;
