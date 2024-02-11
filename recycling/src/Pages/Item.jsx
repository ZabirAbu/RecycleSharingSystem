import '../CSS/index.css';
import '../CSS/Item.css';


import Header from '../Components/Header';
import { useSearchParams } from "react-router-dom";


function Item() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = parseInt(searchParams.get('id'));
  
  const data = [
    { id: 1, title: 'Computer Science Books', content: "I am listing my old school books as I am graduating this year. ", image: "https://macmillan-dam.captureweb.co.uk/cdn/macmillan/previews/439664/d2600cec4c0f09bf8e6187a83a066343/0/14665546cf5662d409143d004ffc0c54/131898933.jpg" },
    { id: 2, title: 'Vintage Clothing', content: "I don't have enough room to move these clothes to my new room next year.", image: "https://www.thoughtco.com/thmb/ctxxtfGGeK5f_-S3f8J-jbY-Gp8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg" },
    { id: 3, title: 'Toaster', content: "We bought a toaster for our student house at the start, now we don't need it.", image: "https://www.charlies.co.uk/media/catalog/product/cache/a017d3c1755e7999c1cee32d3cb3285b/s/a/salter-ombre-toaster-grey-1.jpg" },
    { id: 4, title: 'Microwave', content: 'Bought a microwave for the house and now we do not need it.', image: 'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/16c46540-bbee-11ec-b26a-42151ba980ed.jpg'},
    { id: 5, title: 'School Bag', content: "Don't need my bag anymore.", image: 'https://m.media-amazon.com/images/I/81Ippl4VoqL._AC_SL1500_.jpg'}
  ];

  const item = data.find((item) => item.id == id);
  const title = item.title;
  const content = item.content;
  const image = item.image;

  return (

    <div>
        <Header />
        <div className='Item-container'>
            <div className='Item'>
                <div className='item-image'>
                    <img src={image} alt={title} />
                </div>
                <div className='itemdetail-info'>
                    <h1 className='itemdetail-title'>
                        {title}
                    </h1>
                    <div className='item-content'>
                        {content}
                    </div>
                </div>
            </div>
        </div>


    </div>

  );
}

export default Item;
