import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddTestimonialMutation } from "../../redux/features/testimonials/testimonialsManagementApi";
import { TTestimonial } from "../../types/Tetimonial.type";
import { toast } from "sonner";

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
    console.log(data);
    newTestimonial(data);
    reset();
    toast.success("Review Given Succesfully");
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold text-white py-8">
        Testimonials
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 border p-4 rounded-md"
      >
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-white font-medium mb-1">Title</label>
            <input
              type="text"
              {...register("title", { required: "title is required" })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter Title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">
                {errors.title.message as string}
              </p>
            )}
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              defaultValue={email ? email.toString() : ""}
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 mb-8 gap-4">
          <div>
            <label className="block text-white font-medium mb-1">Rating</label>
            <input
              type="number"
              {...register("rating", {
                required: "Rating is required",
                min: {
                  value: 1,
                  message: "Rating must be at least 1",
                },
                max: {
                  value: 5,
                  message: "Rating must not exceed 5",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter rating"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm">
                {errors.rating.message as string}
              </p>
            )}
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Image</label>
            <input
              type="url"
              {...register("image", {
                required: "image is required",
              })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter Image URL"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">
                {errors.image.message as string}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className="block text-white font-medium mb-1">
            Your Message
          </label>
          <textarea
            {...register("message", {
              required: "Message is required",
            })}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter Your Thought"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">
              {errors.message.message as string}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTestimonial;
