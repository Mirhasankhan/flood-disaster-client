import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { Button } from "antd";
import { useAddTestimonialMutation } from "../../redux/features/testimonials/testimonialsManagementApi";
import { TTestimonial } from "../../types/Tetimonial.type";

const CreateTestimonial = () => {
  const { email } = useAppSelector(useCurrentUser);
  const [newTestimonial] = useAddTestimonialMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TTestimonial>({
    defaultValues: {
      rating: undefined,
    },
  });

  const onSubmit: SubmitHandler<TTestimonial> = (data) => {
    newTestimonial(data);
    reset();
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold py-8">Testimonials</h1>
      <form
        className="w-3/4  border mx-auto p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4 w-full">
          <div className="w-full">
            <label className="pb-1 block">Title</label>
            <input
              className="border p-2 w-full rounded-md"
              placeholder="title"
              type="text"
              {...register("title", { required: true })}
            />
            {errors.title && <p className="text-red-500">Title is required</p>}
          </div>
          <div className="w-full">
            <label className="pb-1 block">Email</label>
            <input
              className="border p-2 w-full rounded-md"
              defaultValue={email ? email.toString() : ""}
              type="email"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-4 w-full mt-6">
          <div className="w-full">
            <label className="pb-1 block">Rating:</label>
            <select
              className="w-full border p-2 rounded-md"
              {...register("rating", { required: true })}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            {errors.rating && (
              <span className="text-red-500">Rating is required</span>
            )}
          </div>
          <div className="w-full">
            <label className="pb-1 block">Donor Image</label>
            <input
              className="border p-2 w-full rounded-md"
              type="url"
              placeholder="imageURL"
              {...register("image", { required: true })}
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="w-full">
            <label className="pb-1 block">Content</label>
            <textarea
              className="w-full p-3 rounded-md"
              placeholder="Write Your Thoughts"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <p className="text-red-500">Message is required</p>
            )}
          </div>
        </div>
        <Button
          className="mt-4 w-full bg-green-400 text-white"
          htmlType="submit"
        >
          Submit Testimonial
        </Button>
      </form>
    </div>
  );
};

export default CreateTestimonial;
