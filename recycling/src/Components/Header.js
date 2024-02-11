import '../CSS/Header.css';
import homeIcon from '../Assets/home.png';
import marketIcon from '../Assets/market.png';
import loginIcon from '../Assets/person.png';
import logo from '../Assets/icon.png'


function Header() {
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

            </div>

        </div>

    );
}

export default Header;
