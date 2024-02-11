import '../CSS/index.css';
import '../CSS/Item.css';


import Header from '../Components/Header';


function Item() {
  return (

    <div>
        <Header />
        <div className='Item-container'>
            <div className='Item'>
                <div className='item-image'>
                    
                </div>
                <div className='item-info'>
                    <div className='item-title'>
                        {/* {title} */}title
                    </div>
                    <div className='item-content'>
                        {/* {content} */}content
                    </div>
                </div>
            </div>
        </div>


    </div>

  );
}

export default Item;
