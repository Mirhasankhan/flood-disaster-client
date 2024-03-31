import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import PHSelect from "../components/form/PHSelect";
import { roles } from "../constants/global";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerAccount] = useRegisterMutation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    registerAccount(data);
  };

  return (
    <div className="border border-gray-800 p-4 w-1/3 mx-auto mt-6">
      <Row justify="center">
        <Col span={24}>
          <PHForm onSubmit={onSubmit}>
            <h1 className="text-3xl font-semibold text-center py-4">
              Register New Account
            </h1>
            <Row gutter={8}>
              <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                <PHInput type="text" name="name" label="Name" />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24}>
                <PHInput type="email" name="email" label="Email" />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24}>
                <PHInput type="password" name="password" label="Password" />
              </Col>
            </Row>
            <Row gutter={8}>
              <Col span={24}>
                <PHSelect
                  label="Select Role"
                  name="role"
                  options={roles}
                ></PHSelect>
              </Col>
            </Row>
            <h1>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Login
              </Link>
            </h1>
            <Button className="w-full bg-red-300" htmlType="submit">
              Submit
            </Button>
          </PHForm>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
