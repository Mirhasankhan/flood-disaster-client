import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useAllVolunteersQuery } from "../../redux/features/Volunteers/volunteer.api";
import { Image } from "../../types";

type TVolunteer = {
  _id: string;
  name: string;
  email: string;
  contactNo: string;
  image: Image;
};

const OurVolunteers = () => {
  const { data } = useAllVolunteersQuery("");

  return (
    <div>
      <h1 className="pt-12 font-bold text-center text-4xl ">
        Our Campain Organizers
      </h1>
      <div className="grid grid-cols-4 gap-5 my-6">
        {data?.map((vol: TVolunteer) => (
          <div className="flex flex-col items-center" key={vol._id}>
            <img
              className="h-60 w-60 rounded-full"
              src={vol.image.imageUrl}
              alt=""
            />
            <h2 className="text-xl font-semibold py-3">{vol.name}</h2>
            <h3 className="pb-3">
              <span className="font-medium"></span> {vol.contactNo}
            </h3>
            <div className="flex items-center gap-3 justify-center pb-2 text-xl text-blue-500">
              <FaYoutube></FaYoutube>
              <FaInstagram></FaInstagram>
              <FaTwitter></FaTwitter>
              <FaFacebook></FaFacebook>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVolunteers;
