import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Lottie from "lottie-react";
import spinner from "../../assets/animation_llxinh3q.json";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";

const MainLayout = () => {
  const { isLoading } = useSuppliesQuery("");
  return isLoading ? (
    <div className="flex justify-center items-center">
      <Lottie
        style={{ height: "400px", width: "600px" }}
        animationData={spinner}
        loop={true}
      />
    </div>
  ) : (
    <div>
      <Header></Header>
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
