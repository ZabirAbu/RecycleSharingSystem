import '../CSS/Market.css';
import '../CSS/index.css';



function MarketItem({ id, title, content, image }) {

  return (
    <a className='market-box' onClick={() => {
      window.location.href = `/item?id=${id}`;
    }}>
      <div className='mkb-img'>
        <img src={image} alt={title} />
      </div>
      <div className='mkb-info'>
        <div className='mkb-title'>
          {title}
        </div>
        <div className='mkb-desc'>
          {content}
        </div>
      </div>
    </a>
  );
}

export default MarketItem;
