import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import PHSelect from "../../components/form/PHSelect";
import { categories } from "../../constants/global";
import { useAddSupplyMutation } from "../../redux/features/supply/supplyManagement.api";
import axios from "axios";

const AddSupply = () => {
  const { email } = useAppSelector(useCurrentUser);

  const [newSupply] = useAddSupplyMutation();

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
        isApplied: false,
      };

      newSupply(modifiedData);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Row justify="center" className="m-3 bg-white p-5 rounded-lg">
      <Col span={24}>
        <PHForm onSubmit={onSubmit}>
          <Divider>Donor Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name"
                label="Name"
                defaultValue={"Mir Hassan"}
                readOnly
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="email"
                name="email"
                label="Email"
                readOnly
                defaultValue={email}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="number" name="contactNo" label="Contact No" />
            </Col>
          </Row>
          <Divider>Supply Details</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="supplyName" label="Supply Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="quantity" label="Quantity" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                label="Category"
                name="category"
                options={categories}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
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
            {/* <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker
                disabled
                name="lastApplyDate"
                label="Last Date of Application"
              />
            </Col> */}
          </Row>

          <Button htmlType="submit" className="sm-w-full">
            Submit
          </Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default AddSupply;
