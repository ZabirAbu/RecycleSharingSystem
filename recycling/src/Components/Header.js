import '../CSS/Header.css';

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
        } else {
            root.style.setProperty("--primary-color", "#eeeeee");
            root.style.setProperty("--secondary-color", "#cccccc");
            root.style.setProperty("--highlight", "#edeae7");
            root.style.setProperty("--white", "#010101");
        }
    };
    
    return (
        <div className='Header'>
            <div className='logo'>
                LOGO
            </div>
            <div className='nav'>
                <a className='nav-btn'>
                    Home
                </a>
                <a className='nav-btn'>
                    Market
                </a>
                <a className='nav-btn'>
                    Login
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
