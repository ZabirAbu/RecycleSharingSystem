import '../CSS/Market.css';
import '../CSS/index.css';

import pointIcon from '../Assets/point.png';



function MarketItem({ id, title, content, image, points }) {

  return (
    <a className='market-box' onClick={() => {
      window.location.href = `/item?id=${id}`;
    }}>
      <div className='mkb-img'>
        <img src={image} alt={title} />
      </div>
      <div className='mkb-info'>
        <div className='mkb-i-top'>
          <div className='mkb-title'>
            {title}
          </div>
          <div className='mkb-points'>
             {points} <img src={pointIcon} />
          </div>
        </div>

        <div className='mkb-desc'>
          {content}
        </div>

      </div>
    </a>
  );
}

export default MarketItem;
