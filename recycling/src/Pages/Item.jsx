import React, { useState, useEffect } from 'react';

import { useSearchParams } from "react-router-dom";

import Header from '../Components/Header';
import '../CSS/index.css';
import '../CSS/Item.css';
import pointsIcon from '../Assets/point.png';
import toast, { Toaster } from 'react-hot-toast';



function Item() {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    
    const data = [
        { id: 1, points: 36, title: 'Computer Science Books', content: "I am listing my old school books as I am graduating this year. ", image: "https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg" },
        { id: 2, points: 14, title: 'Vintage Clothing', content: "I don't have enough room to move these clothes to my new room next year.", image: "https://www.thoughtco.com/thmb/ctxxtfGGeK5f_-S3f8J-jbY-Gp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg" },
        { id: 3, points: 43, title: 'Toaster', content: "We bought a toaster for our student house at the start, now we don't need it.", image: "https://www.charlies.co.uk/media/catalog/product/cache/a017d3c1755e7999c1cee32d3cb3285b/s/a/salter-ombre-toaster-grey-1.jpg" },
        { id: 4, points: 42, title: 'Microwave', content: 'Bought a microwave for the house and now we do not need it.', image: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/16c46540-bbee-11ec-b26a-42151ba980ed.jpg'},
        { id: 5, points: 10, title: 'School Bag', content: "Don't need my bag anymore.", image: 'https://m.media-amazon.com/images/I/81Ippl4VoqL._AC_SL1500_.jpg'}
    ];

    const item = data.find((item) => item.id == id);
    const title = item.title;
    const content = item.content;
    const image = item.image;
    const points = item.points;

    // const { id: itemId } = useParams(); // Extract the 'id' parameter from the URL
    const [cart, setCart] = useState([]); // State to manage cart items

    // Function to add item to cart
    const addToCart = () => {
        const searchParams = new URLSearchParams(window.location.search);
        const itemId = searchParams.get('id');
        if (!cart.includes(itemId)) {
            toast.success("Added to cart.", {duration : 3000 })
            console.log(itemId)
            setCart([...cart, itemId]);
            localStorage.setItem('cart', JSON.stringify([...cart, itemId]));
        }
    };

    const deleteCart = () => {
        localStorage.removeItem('cart');
        toast.error("Cart deleted.", {duration : 3000 })


    };

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            console.log(JSON.parse(storedCart))
            setCart(JSON.parse(storedCart));
        }
    }, []);

    return (
        <div>
            <Header />
            <div className='Item-container'>
                <div className='Item'>
                    <div className='itemdetail-image'>
                        <img src={item.image} alt={item.title} width="400" height="300" />
                    </div>
                    <div className='itemdetail-info'>
                        <h1 className='itemdetail-title'>
                            {title}
                        </h1>
                        <div className='itmd-desc'>
                            <h1>Description</h1>
                            <div className='itemdetail-content'>
                                {content}
                            </div>
    
                        </div>
                        <div className='itmd-desc'>
                            <h1>Points</h1>
                            <div className='itemdetail-content'>
                                {points} <img src={pointsIcon} />
                            </div>
                        </div>
                        <div className='itmd-btns'>
                            <button onClick={addToCart} className="add-to-cart-button">Add to Cart</button>
                            <button onClick={deleteCart} className="delete-cart-button">Delete Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div><Toaster position='bottom-left' reverseOrder={true} /></div> */}
        </div>
    );
}

export default Item;
