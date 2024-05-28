import Slider from "react-slick";
import { useSuppliesQuery } from "../../redux/features/supply/supplyManagement.api";
import Card from "./Card";
import { TSupply } from "../../types";

const SimpleSlider = () => {
  const { data } = useSuppliesQuery("");
  const unApproved = data?.filter(
    (a: { isApproved: boolean }) => a.isApproved == false
  );
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className=" p-12">
      <h1 className="text-xl font-semibold m-2 pb-3 border-b-2 border-green-400 w-60">
        Most Wanted Supplies
      </h1>
      <div className="slider-container  mx-auto">
        <Slider {...settings}>
          {unApproved?.slice(0, 8).map((supply: TSupply) => (
            <Card supply={supply} key={supply._id}></Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SimpleSlider;
