import bird from "../../assets/images/about-bird.png";
import people from "../../assets/images/about-us.jpg";
import { IoIosGlobe } from "react-icons/io";
import { MdCurrencyExchange } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Motto = () => {
  return (
    <div>
      <div className="pt-12 pb-2 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="text-orange-600 text-xl font-semibold py-2">
            About Us
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold">
            Transforming Lives, One Act of Kindness at a Time
          </h1>
        </div>
        <div className="overflow-hidden h-48 relative">
          <img
            src={bird}
            alt="Moving Image"
            className="h-24 w-40 md:w-64 md:h-48 absolute animate-slide"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="pb-4">
            That's a powerful and inspiring heading! It effectively communicates
            the essence of your charity's mission and the positive impact you
            strive to make. Would you like to use this for the About Section,
          </h1>
          <img className="rounded-lg" src={people} alt="" />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-md p-4 flex flex-col items-center text-center">
              <div className="p-4 bg-white hover:bg-orange-400 hover:text-white rounded-full">
                <IoIosGlobe className="text-5xl "></IoIosGlobe>
              </div>
              <h1 className="text-xl py-3 font-semibold">Driven Compassion</h1>
              <p>Every service we offer is rooted compassion aiming to make</p>
              <button className="py-3">Read More</button>
            </div>
            <div className="bg-gray-50 rounded-md p-4 flex flex-col items-center text-center">
              <div className="p-4 bg-white hover:bg-orange-400 hover:text-white rounded-full">
                <MdCurrencyExchange className="text-5xl "></MdCurrencyExchange>
              </div>
              <h1 className="text-xl py-3 font-semibold">Sustainable Impact</h1>
              <p>Every service we offer is rooted compassion aiming to make</p>
              <button className="py-3">Read More</button>
            </div>
            <div className="bg-gray-50 rounded-md p-4 flex flex-col items-center text-center">
              <div className="p-4 bg-white hover:bg-orange-400 hover:text-white rounded-full">
                <FiUser className="text-5xl "></FiUser>
              </div>
              <h1 className="text-xl py-3 font-semibold">Driven Compassion</h1>
              <p>Every service we offer is rooted compassion aiming to make</p>
              <button className="py-3">Read More</button>
            </div>
            <div className="bg-gray-50 rounded-md p-4 flex flex-col items-center text-center">
              <div className="p-4 bg-white hover:bg-orange-400 hover:text-white rounded-full">
                <IoIosGlobe className="text-5xl "></IoIosGlobe>
              </div>
              <h1 className="text-xl py-2 font-semibold">Driven Compassion</h1>
              <p>Every service we offer is rooted compassion aiming to make</p>
              <button className="pt-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motto;
