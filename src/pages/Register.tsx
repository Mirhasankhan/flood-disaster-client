import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Row } from "antd";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import logo from "../../src/assets/images/main-logo.avif";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [registerAccount] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const newAccount = {
      ...data,
      role: "admin",
    };
    registerAccount(newAccount);
    toast.success("Account Registered Successfully");
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-[#211e3d] to-[#561c3e] h-full pb-6">
      <Link to="/" className="py-8 pl-8 flex items-center gap-2">
        <img className="h-12 w-12 rounded-full" src={logo} alt="" />
        <p className="text-white text-3xl font-bold">
          Altruist <span className="text-blue-600">Hub</span>
        </p>
      </Link>
      <div className="shadow-xl bg-white bg-opacity-10  border rounded-lg p-4 w-3/4 md:w-1/3 mx-auto mt-2">
        <h1 className="text-3xl font-medium py-2 text-white">Sign Up Here!</h1>
        <p className="text-white font-medium pb-4">
          Pleaser Enter Your Details
        </p>
        <Row justify="center">
          <Col span={24}>
            <PHForm onSubmit={onSubmit}>
              <Row className="relative" gutter={8}>
                <Col span={24} md={{ span: 12 }} lg={{ span: 24 }}>
                  <PHInput placeholder="Full Name" type="text" name="name" />
                </Col>
                <FaUser className="absolute top-2 text-2xl text-white left-4"></FaUser>
              </Row>
              <Row className="relative" gutter={8}>
                <Col span={24}>
                  <PHInput placeholder="Email" type="email" name="email" />
                </Col>
                <MdEmail className="absolute top-2 text-2xl text-white left-4"></MdEmail>
              </Row>
              <Row className="relative" gutter={8}>
                <Col span={24}>
                  <PHInput
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </Col>
                <FaLock className="absolute top-2 text-2xl text-white left-4"></FaLock>
              </Row>

              <Button
                className="w-full text-white h-12 text-xl font-semibold"
                htmlType="submit"
              >
                Register
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
          <h1 className="pt-3 text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
