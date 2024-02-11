import '../CSS/Header.css';
import homeIcon from '../Assets/home.png';
import marketIcon from '../Assets/market.png';
import loginIcon from '../Assets/person.png';
import logo from '../Assets/icon.png'

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';

function Header() {
    const [theme, setTheme] = useState('darkmode');

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
            root.style.setProperty("--primary-color", "#eeeeee");
            root.style.setProperty("--secondary-color", "#cccccc");
            root.style.setProperty("--highlight", "#edeae7");
            root.style.setProperty("--white", "#010101");
            root.style.setProperty("--icon-filter", "invert(0)");
        }
    };
    
    return (
        <div className='Header'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className='nav'>
                <a className='nav-btn' href='/home'>
                <img src="https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png" alt="home"/> 
                </a>
                <a className='nav-btn' href='/market'>
                    <img src={marketIcon} />
                </a>
                <a className='nav-btn login' href='/login'>
                    <img src={loginIcon} />
                </a>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    value={theme}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value={'darkmode'}>Dark Mode</MenuItem>
                    <MenuItem value={'lightmode'}>Light Mode</MenuItem>
                    </Select>
                </FormControl>
            </div>

        </div>

    );
}

export default Header;
