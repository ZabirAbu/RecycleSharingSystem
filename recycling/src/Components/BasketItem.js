import '../CSS/Checkout.css';
import '../CSS/index.css';

import pointIcon from '../Assets/point.png';



function BasketItem({ id, title, content, image, points }) {

  return (
    <a className='basket-box' onClick={() => {
      window.location.href = `/item?id=${id}`;
    }}>
      <div className='bkb-img'>
        <img src={image} alt={title} />
      </div>
      <div className='bkb-info'>
        <div className='bkb-i-top'>
          <div className='bkb-title'>
            {title}
          </div>
          <div className='bkb-points'>
             {points} <img src={pointIcon} />
          </div>
        </div>

        <div className='bkb-desc'>
          {content}
        </div>

      </div>
    </a>
  );
}

export default BasketItem;
