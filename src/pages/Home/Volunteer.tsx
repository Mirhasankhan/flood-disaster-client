import { MdOutlineEmail } from "react-icons/md";
import littleBoy from "../../assets/images/little-boy.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddVolunteerMutation } from "../../redux/features/Volunteers/volunteer.api";

type TInputs = {
  email: string;
};

const Volunteer = () => {
  const [createVolunteer] = useAddVolunteerMutation();
  const { register, handleSubmit, reset } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => {
    createVolunteer(data);
    reset();
  };
  return (
    <div className="md:grid grid-cols-2 gap-12 mx-6 md:mx-12">
      <div className="px-12">
        <img
          className="hidden md:block h-[450px] w-full"
          src={littleBoy}
          alt=""
        />
      </div>
      <div>
        <h1 className="italic underline text-orange-500 text-xl">
          Become a volunteer
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold py-5">
          Become a Volunteer? <br />
          Join With Our Team
        </h1>
        <p className="text-justify">
          I would love to volunteer with your organization because I share
          similar values in wanting to help the people, and I believe that this
          is a great place to start. I'm also looking forward to getting more
          involved with the local community.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex mt-8 relative">
            <input
              className="border p-3 pl-12 w-full"
              type="email"
              placeholder="Your Email Address"
              id=""
              {...register("email", { required: true })}
            />

            <MdOutlineEmail className="text-3xl absolute top-4 left-3 text-orange-400"></MdOutlineEmail>
            <button
              type="submit"
              className="bg-orange-400 text-white h-14 w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
