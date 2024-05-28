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
    <div className="mx-6 md:mx-12">
      <h1 className="pb-3 border-b text-xl mb-3">Our Group Of Volunteers</h1>
      <div className="grid grid-cols-4 gap-5 my-6">
        {data?.map((vol: TVolunteer) => (
          <div
            className="text-center border border-dotted cursor-pointer"
            key={vol._id}
          >
            <img className="w-full" src={vol.image.imageUrl} alt="" />
            <h2 className="text-xl font-semibold py-3">{vol.name}</h2>
            <h3 className="pb-3">
              <span className="font-medium">Mobile:</span> {vol.contactNo}
            </h3>
            <p className="pb-3">
              <span className="font-medium">Email:</span> {vol.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurVolunteers;
