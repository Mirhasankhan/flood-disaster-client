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
    formState: { errors },
  } = useForm<TTestimonial>();

  const onSubmit: SubmitHandler<TTestimonial> = (data) => {
    newTestimonial(data);
  };
  return (
    <form
      className="w-2/3  border mx-auto p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4 w-full">
        <div className="w-full">
          <label className="block">Title:</label>
          <input
            className="border p-2 w-full"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && <p>Title is required</p>}
        </div>
        <div className="w-full">
          <label className="block">Email</label>
          <input
            className="border p-2 w-full"
            defaultValue={email ? email.toString() : ""}
            type="email"
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <div className="flex gap-4 w-full">
        <div className="w-3/4">
          <label className="block">Content:</label>
          <textarea
            className="w-full"
            {...register("message", { required: true })}
          />
          {errors.message && <p>Message is required</p>}
        </div>
        <div className="w-1/4">
          <label>Rating:</label>
          <select
            className="w-full"
            {...register("rating", { required: true })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.rating && <span>Rating is required</span>}
        </div>
      </div>
      <Button htmlType="submit">Submit Testimonial</Button>
    </form>
  );
};

export default CreateTestimonial;
