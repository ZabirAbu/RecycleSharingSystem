import '../CSS/Header.css';


function Header() {
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

            </div>

        </div>

    );
}

export default Header;
