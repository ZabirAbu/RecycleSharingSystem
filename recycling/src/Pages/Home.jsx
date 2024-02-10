import '../CSS/Home.css';
import FrontCover from '../Assets/front-cover.png'

import Header from '../Components/Header';


function Home() {
  return (

    <div className='Home'>
        <Header />
        <div className='Home-inner'>
          <div className='Home-image'>
            <img src={FrontCover} />
          </div>
          <div className='Home-text'>
              <h1>
                Website Name
              </h1>
              <text>
                Recycle your old stuff in exchange for points.
              </text>
          </div>
        </div>

    </div>

  );
}

export default Home;
