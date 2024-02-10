import '../CSS/Header.css';
import homeIcon from '../Assets/home.png';
import marketIcon from '../Assets/market.png';
import loginIcon from '../Assets/person.png';


function Header() {
    return (
        <div className='Header'>
            <div className='logo'>
                LOGO
            </div>
            <div className='nav'>
                <a className='nav-btn' href='/home'>
                    <img src={homeIcon} /> 
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
