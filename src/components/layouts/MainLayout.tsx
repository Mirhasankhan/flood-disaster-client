import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Lottie from "lottie-react";
import spinner from "../../assets/loading.json";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

const MainLayout = () => {
  const { isLoading } = useSuppliesQuery("");
  const { isDarkMode } = useContext(ThemeContext);
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
      <div
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
        className="min-h-[calc(100vh-100px)]"
      >
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
