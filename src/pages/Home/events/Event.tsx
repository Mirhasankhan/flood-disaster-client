import { BsArrowRight } from "react-icons/bs";
import event1 from "../../../assets/images/event-one-date-shape-1.png";
const Event = ({
  title,
  image,
  poster,
  time,
}: {
  title: string;
  image: string;
  poster: string;
  time: string;
}) => {
  return (
    <div className="hover:bg-black w-full hover:cursor-pointer rounded-md group md:grid grid-cols-5 items-center gap-3 border p-3 transition duration-1000">
      <div className="relative col-span-2">
        <img
          className="h-48 w-full rounded-sm transition duration-1000"
          src={image}
          alt=""
        />
        <h1
          style={{ backgroundImage: `url(${event1})` }}
          className="absolute text-center left-3 bottom-3 text-white p-2 hidden group-hover:block transition-all duration-1000"
        >
          From <br />
          {time}
        </h1>
      </div>
      <div className="col-span-3">
        <h1 className="group-hover:text-white text-xl md:text-3xl font-semibold transition-all duration-1000">
          {title}
        </h1>
        <p className="py-2 group-hover:text-white transition-all duration-1000">
          {poster}
        </p>
        <div className="flex items-center gap-3">
          <div className="group-hover:text-white group-hover:bg-orange-400 border p-4 rounded-full transition-all duration-1000">
            <BsArrowRight className="text-xl"></BsArrowRight>
          </div>
          <h1 className="group-hover:text-orange-400 font-semibold transition-all duration-1000">
            Read More
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Event;
