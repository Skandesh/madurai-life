import bgImg from '../assets/temple.jpg';
import foodImg from '../assets/food.jpg';
import cafeImg from '../assets/cafe.jpg';
import { Link } from 'react-router-dom';

const Category = (props) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center justify-center h-40 w-40 bg-white rounded-full border-2 border-transparent transition duration-300 hover:border-gray-500 overflow-hidden">
        {/* insert the image here */}
        <img src={props.image} alt={props.type} className="h-full w-full " />
      </div>

      <h2 className="text-gray-950 text-xl font-bold mt-3">{props.type}</h2>
    </div>
  );
};

const Explore = () => {
  return (
    <div>
      <h1 className="text-gray-950 pl-14 pt-10">Explore:</h1>
      <div className="flex justify-center gap-24  flex-wrap">
        <Link to="/category/food">
          <Category type="food" image={foodImg} />
        </Link>
        <Link to="/category/temples">
          <Category type="temples" image={bgImg} />
        </Link>

        <Link to="/category/cafe">
          <Category type="cafe" image={cafeImg} />
        </Link>
      </div>
    </div>
  );
};

export default Explore;
