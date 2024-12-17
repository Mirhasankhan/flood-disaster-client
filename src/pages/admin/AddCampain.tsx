import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Col, Form, Input, Row } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import PHSelect from "../../components/form/PHSelect";
import { categories } from "../../constants/global";
import { useAddSupplyMutation } from "../../redux/features/supply/supplyManagement.api";
import axios from "axios";
import { toast } from "sonner";
import { IoIosCreate } from "react-icons/io";
import { GrOverview } from "react-icons/gr";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineDescription } from "react-icons/md";
import ReactQuill from "react-quill";
import { useState } from "react";

const AddCampain = () => {
  const [newSupply] = useAddSupplyMutation();
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
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
        collectedAmount: 0,
        description: content,
      };

      newSupply(modifiedData);
      toast.success("Campain Added Successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Row justify="center" className="m-3 bg-white bg-opacity-10 p-5 rounded-lg">
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <h1 className="text-white text-4xl font-semibold text-center mb-8 pb-2 border-b-2">
            Create New Campain
          </h1>
          <Row className="relative" gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="title" placeholder="Title" />
            </Col>
            <IoIosCreate className="absolute top-[8px] text-2xl text-white left-4"></IoIosCreate>

            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput
                type="text"
                name="overview"
                placeholder="short overview"
              />
            </Col>
            <GrOverview className="absolute top-[8px] text-2xl text-white left-[530px]"></GrOverview>
          </Row>
          <Row className="relative" gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="amount" />
            </Col>
            <RiMoneyDollarCircleLine className="absolute top-[8px] text-2xl text-white left-4"></RiMoneyDollarCircleLine>

            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHSelect
                // label="Category"
                name="category"
                options={categories}
              ></PHSelect>
            </Col>
          </Row>
          <Row className="relative" gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item>
                    <Input
                      className="bg-gray-100 border-2 border-green-200"
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <ReactQuill
                className="my-3"
                value={content}
                onChange={handleChange}
              />
            </Col>
            <MdOutlineDescription className="absolute top-[8px] text-2xl text-white left-[530px]"></MdOutlineDescription>
          </Row>

          <button
            type="submit"
            className="bg-blue-600 mt-4 text-white py-2 text-xl rounded-md font-medium w-full"
          >
            Submit
          </button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default AddCampain;
