// import { Link } from 'react-router-dom';
import image from '../assets/pic.jpg'
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div
      name="home"
      className="h-screen w-full font-tertiary bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          <img
            src={image}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col gap-3 justify-center h-full">
          <h2 className="text-4xl sm:text-7xl  font-bold text-white">
            Im a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 text-2xl text-blue-400 font-semi-bold py-4 max-w-md">
           <span className='text-7xl font-bold text-blue-500'> 8  </span> Months <br/> work Experience
          </p>

         
        </div>
        <div className="big-screen">
          <img
            src={image}
            alt="profile"
            className="rounded-full mx-auto w-1/2 md:w-full"
          />
        </div>
        
      </div>
    </div>
    );
};

export default Home;