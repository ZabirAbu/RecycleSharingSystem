import '../CSS/Home.css';
import FrontCover from '../Assets/front-cover.png'

import Header from '../Components/Header';


function Home() {
  return (
    <div className='Home '>
        <Header />
        <div className='Home-inner '>
          <div className='Home-image'>
          </div>
          <div className='Home-text'>
              <h1>
                Swap Stuff
              </h1>
              <text>
              Swap your items with fellow students, in exchange for in-app points.
              </text>
          </div>
        </div>
        <div className='background'></div>


    </div>

  );
}

export default Home;
