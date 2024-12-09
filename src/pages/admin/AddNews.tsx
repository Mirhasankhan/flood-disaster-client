import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Col, Form, Input, Row } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useAddNewsMutation } from "../../redux/features/news/news.api";

const AddNews = () => {
  const [createNews] = useAddNewsMutation();
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
        description: content,
        time: new Date().toISOString(),
      };

      createNews(modifiedData);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Row justify="center" className="m-3 bg-white bg-opacity-10 p-5 rounded-lg">
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <h1 className="text-white text-4xl font-semibold text-center mb-8 pb-2 border-b-2">
            Post Recent News
          </h1>
          <Row className="relative" gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
              <PHInput type="text" name="title" placeholder="Title" />
            </Col>
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
          </Row>
          <Row className="relative" gutter={8}>
            <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
              <label className="font-semibold" htmlFor="">
                Write News Here
              </label>
              <ReactQuill
                className="my-3"
                value={content}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <button
            type="submit"
            className="bg-blue-600 mt-4 text-white py-2 text-xl rounded-md font-medium w-full"
          >
            Create News
          </button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default AddNews;
