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
import { FaLock } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import logo from "../../src/assets/images/logo3.jpeg";

const Login = () => {
  const [loginAccount] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginAccount(data).unwrap();
      console.log(res.name);
      dispatch(
        setUser({
          email: res.email,
          role: res.role,
          name: res.name,
          token: res.token,
        })
      );
      toast.success("Logged In Successfully!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#211e3d] to-[#561c3e] h-full">
      <Link to="/" className="py-8 pl-8 flex items-center gap-2">
        <img className="h-12 w-12 rounded-full" src={logo} alt="" />
        <p className="text-white text-3xl font-bold">
          Altruist <span className="text-blue-600">Hub</span>
        </p>
      </Link>
      <div className="flex py-6 w-3/4 mx-auto items-center">
        <div className="rounded-l-lg shadow-xl p-6  w-full  bg-white bg-opacity-10">
          <h1 className="text-xl text-white md:text-3xl font-semibold  py-4 ">
            Log Into Your Account
          </h1>
          <Row justify="center">
            <Col span={24}>
              <PHForm onSubmit={onSubmit}>
                <Row className="relative" gutter={8}>
                  <Col span={24}>
                    <PHInput placeholder="Email" type="email" name="email" />
                    <CiMail className="absolute top-2 text-2xl text-white left-4"></CiMail>
                  </Col>
                </Row>
                <Row className="relative" gutter={8}>
                  <Col span={24}>
                    <PHInput
                      placeholder="Password"
                      type="password"
                      name="password"
                    />
                    <FaLock className="absolute top-2 text-2xl text-white left-4"></FaLock>
                  </Col>
                </Row>

                <Button
                  className="w-full text-white h-12 text-xl font-semibold"
                  htmlType="submit"
                >
                  Login
                </Button>
              </PHForm>
            </Col>
          </Row>
          <div>
            <h1 className="text-center py-6 text-2xl font-medium text-white">
              Or, Login With
            </h1>
            <Button
              className="w-full flex items-center justify-center gap-1 text-white h-[55px] text-xl font-semibold"
              htmlType="submit"
            >
              <FcGoogle className="text-3xl" /> Login With Google
            </Button>
            <h1 className="pt-4 text-white">
              Don't have an account?
              <Link to="/register" className="text-blue-600 pl-1">
                Create New Account
              </Link>
            </h1>
          </div>
        </div>
        <div className="w-full md:block hidden">
          <img className="rounded-r-lg" src={imgs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
