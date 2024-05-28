import littleBoy from "../../assets/images/little-boy.png";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Drawer, Form, Input, Row, Space } from "antd";
import { useAddVolunteerMutation } from "../../redux/features/Volunteers/volunteer.api";

import { useState } from "react";
import { toast } from "sonner";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import axios from "axios";

const Volunteer = () => {
  const [createVolunteer] = useAddVolunteerMutation();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // Upload image to ImgBB
      const formData = new FormData();
      formData.append("image", data.image);
      const imgbbResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
        }`,
        formData
      );
      const imgUrl = imgbbResponse.data.data.url;
      const modifiedData = {
        ...data,
        image: {
          ...data.image,
          imageUrl: imgUrl,
        },
      };
      createVolunteer(modifiedData);

      toast.success("Congrats, You became Volunteer Successfully");
      onClose();
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <div className="md:grid grid-cols-2 gap-12 mx-6 md:mx-12 py-5">
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
        {/* <form onSubmit={handleSubmit(onSubmit)}>
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
        </form> */}
        <Button
          onClick={showDrawer}
          className="bg-green-500 font-semibold mt-6"
        >
          BECOME A VOLUNTEER
        </Button>
        <Drawer
          title="Become Our Volunteer!!"
          width={600}
          onClose={onClose}
          open={open}
          styles={{
            body: {
              paddingBottom: 80,
            },
          }}
          extra={
            <Space>
              <Button className="bg-red-500" onClick={onClose}>
                Cancel
              </Button>
            </Space>
          }
        >
          <PHForm onSubmit={onSubmit}>
            <Divider>Volunteer Info.</Divider>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <PHInput type="text" name="name" label="Name" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <PHInput type="email" name="email" label="Email" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <PHInput type="number" name="contactNo" label="Contact No" />
              </Col>
              <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
                <Controller
                  name="image"
                  render={({ field: { onChange, value, ...field } }) => (
                    <Form.Item label="Picture">
                      <Input
                        type="file"
                        value={value?.fileName}
                        {...field}
                        onChange={(e) => onChange(e.target.files?.[0])}
                      />
                    </Form.Item>
                  )}
                />
              </Col>
            </Row>

            <Button className="w-full bg-green-400" htmlType="submit">
              Submit
            </Button>
          </PHForm>
        </Drawer>
      </div>
    </div>
  );
};

export default Volunteer;
