import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [loginAccount] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const res = await loginAccount(data).unwrap();
    dispatch(setUser({ email: res.email, role: res.role, token: res.token }));
    navigate("/");
  };

  return (
    <div className="border border-gray-800 p-4 w-1/3 mx-auto mt-6">
      <Row justify="center">
        <Col span={24}>
          <PHForm onSubmit={onSubmit}>
            <h1 className="text-3xl font-semibold text-center py-4">
              Log Into Your Account
            </h1>

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
            <h1>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600">
                Register
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

export default Login;
