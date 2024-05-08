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
    console.log(data);
    registerAccount(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-4">
        Register <span className="text-green-400">New Account</span>
      </h1>
      <div className="shadow-xl rounded-lg p-4 w-1/2 md:w-1/3 mx-auto mt-6">
        <Row justify="center">
          <Col span={24}>
            <PHForm onSubmit={onSubmit}>
              <Row gutter={8}>
                <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                  <PHInput
                    placeholder="name"
                    type="text"
                    name="name"
                    label="Name"
                  />
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={24}>
                  <PHInput
                    placeholder="email"
                    type="email"
                    name="email"
                    label="Email"
                  />
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={24}>
                  <PHInput
                    placeholder="password"
                    type="password"
                    name="password"
                    label="Password"
                  />
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

              <Button
                className="w-full bg-green-300 text-white font-semibold"
                htmlType="submit"
              >
                Register
              </Button>
              <h1 className="pt-3">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600">
                  Login
                </Link>
              </h1>
            </PHForm>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
