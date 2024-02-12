import React, {useEffect} from 'react';
import '../CSS/Checkout.css';
import '../CSS/Home.css';
import Header from '../Components/Header';
import BasketItem from '../Components/BasketItem';
import pointIcon from '../Assets/point.png';
import toast, { Toaster } from 'react-hot-toast';


function Confirm() {
    const data = [
        { id: 1, points: 36, tag: "study", title: 'Computer Science Books', content: "I am listing my old school books as I am graduating this year. ", image: "https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg" },
        { id: 2, points: 14, tag: "clothing", title: 'Vintage Clothing', content: "I don't have enough room to move these clothes to my new room next year.", image: "https://www.thoughtco.com/thmb/ctxxtfGGeK5f_-S3f8J-jbY-Gp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg" },
        { id: 3, points: 43, tag: "electrical", title: 'Toaster', content: "We bought a toaster for our student house at the start, now we don't need it.", image: "https://www.charlies.co.uk/media/catalog/product/cache/a017d3c1755e7999c1cee32d3cb3285b/s/a/salter-ombre-toaster-grey-1.jpg" },
        { id: 4, points: 42, tag: "electrical", title: 'Microwave', content: 'Bought a microwave for the house and now we do not need it.', image: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/16c46540-bbee-11ec-b26a-42151ba980ed.jpg' },
        { id: 5, points: 10, tag: "clothing", title: 'School Bag', content: "Don't need my bag anymore.", image: 'https://m.media-amazon.com/images/I/81Ippl4VoqL._AC_SL1500_.jpg' }
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = [];
    try {
        cartItems = cart.map((id) => data.find((item) => item.id === parseInt(id)));
    } catch { }

    const calculateTotalPoints = () => {
        return cartItems.reduce((total, item) => total + item.points, 0);
    };

    const getUserPoints = () => {
        try {
            return localStorage.getItem("points") - calculateTotalPoints();
        } catch {
            return false
        }
    }

    const clearCart = () => {
        localStorage.removeItem('cart');
        localStorage.setItem("points", getUserPoints())
        cartItems = [];
    };

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');


    useEffect(() => {
        clearCart()
      }, []);

    return (
        <div>
            <Header />
            <div className='Checkout'>
                <h2>Confirmed Order</h2>

                {cartItems.length > 0 ? (
                    <div className="cart-items">
                        <h3>Items Bought:</h3>
                        {cartItems.map(item => (
                            <BasketItem
                                key={item.id} // Make sure to include a unique key for each item
                                id={item.id}
                                title={item.title}
                                content={item.content}
                                image={item.image}
                                points={item.points}
                            />
                        ))}
                        <div className='user-points-box'>
                            <span className='total-points'>
                                Spent:  {calculateTotalPoints()}<img src={pointIcon} />
                            </span>
                            <span className='total-points'>
                                Available:  {getUserPoints()}<img src={pointIcon} />
                            </span>
                        </div>
                        <hr />
                        <div className='code-box'>

                            <h3>Here is your code: </h3>
                            <text>{code}</text>
                            <h5>Show this to a supervisor at your local SwapPoint to receive your item/s.</h5>
                        </div>
                        
                    </div>
                ) : (
                    <div className="empty-cart">
                        <p>Your cart is empty.</p>
                    </div>
                )}

            </div>
            <div><Toaster position='bottom-left' reverseOrder={true} /></div>

        </div>
    );
}

export default Confirm;
