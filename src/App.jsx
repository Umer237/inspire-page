import Chair from "./images/Chair.png";
import Books from "./images/Tumblr.png";
import Reading from "./images/Girl-Reading.jpg";
import Car from "./images/Car-Interior.jpg";
import Dish from "./images/Dish.png";
import Dog from "./images/Dog.jpg";
import Man from './images/Man2.jpg'
import CLock1 from './images/Clock-2.png'
import Beans from './images/Beans.jpg'
import Flower from './images/Flower.jpg'
import Things from './images/Things.jpg'
import Lake from './images/Lake.jpg'

import "./App.css";

function App() {
  return (
    <>
      <div className="Inspire-BG">
        <h1>Inspire</h1>
      </div>
      <div className="Image-Section">
        <div className="Section-1">
          <div className="Text-Section">
            <h1>Beautifull tumbir themes</h1>
            <p>
              Good timber does not grow with ease The stronger wind, the
              stronger trees The further sky, the greater length The more the
              storm, the more the strength By sun and cold by rain and snow In
              trees and men good timbers grow Knowledge and timber shouldn't be
              much used till they are seasoned.
            </p>
          </div>
          <img className="Section-1-Img-1" src={Chair} alt="" />
          <img className="Section-1-Img-2" src={Dish} alt="" />
        </div>
        <div className="Section-2">
          <div className="Section-2-Img-1">
            <img src={Books} alt="" />
          </div>
          <div className="Section-2-Img-2">
            <img src={Reading} alt="" />
          </div>
          <div className="Section-2-Img-3">
            <img src={Car} alt="" />
          </div>
        </div>
        <div className="Section-3">
          <div className="Text-Section-2">
            <h1>The one who knocks</h1>
            <p>
              Good timber does not grow with ease The stronger wind, the
              stronger trees The further sky, the greater length The more the
              storm, the more the strength By sun and cold by rain and snow In
              trees and men good timbers grow Knowledge and timber shouldn't be
              much used till they are seasoned.
 </p><p>
              Good timber does not grow with ease The stronger wind, the
              stronger trees The further sky, the greater length The more the
              storm, the more the strength By sun and cold by rain and snow In
              trees and men good timbers grow Knowledge and timber shouldn't be
              much used till they are seasoned.
              </p>
          </div>
          <img src={Dog} alt="" />
          <p className="p-2">Dogs are not our whole life, but they make our lives whole Some of my best leading men have been dogs and horses.</p>
          <img className="Clock" src={CLock1} alt="" />
        </div>  
        <div className="Section-4">
          <div>
          <img src={Beans} alt="" />
          </div>
          <div>
          <img src={Flower} alt="" />
          </div>
          <div>
          <img src={Things} alt="" />
          </div>
        </div>
        <div className="Section-5">
          <div>
          <img src={Man} alt="" />
          </div>
          <div>
            <h1>GentleMan</h1>
            <p>Anyone can be heroic from time to time, but a gentleman is something you have to be all the time My ideal man is faithful, honest, and a gentleman who knows how to treat women.</p>
          </div>
          <div>
            <img src={Lake} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
