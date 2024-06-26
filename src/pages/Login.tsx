import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { Link, useNavigate } from "react-router-dom";
import imgs from "../assets/images/login (1).webp";
import { toast } from "sonner";

const Login = () => {
  const [loginAccount] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginAccount(data).unwrap();
      dispatch(setUser({ email: res.email, role: res.role, token: res.token }));
      toast.success("Logged In Successfully!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold text-center py-4 my-6">
        Log Into <span className="text-green-200">Your Account</span>
      </h1>
      <div className="flex gap-6 w-3/4 mx-auto items-center">
        <div className="w-full md:block hidden">
          <img src={imgs} alt="" />
        </div>
        <div className="rounded-lg shadow-xl p-6 h-80 w-full border">
          <Row justify="center">
            <Col span={24}>
              <PHForm onSubmit={onSubmit}>
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

                <Button
                  className="w-full bg-green-300 font-semibold"
                  htmlType="submit"
                >
                  Login
                </Button>
                <h1 className="pt-3">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-600">
                    Create New Account
                  </Link>
                </h1>
              </PHForm>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Login;
