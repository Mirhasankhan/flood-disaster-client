import g1 from "../../assets/images/g1.webp";
import g2 from "../../assets/images/g2.webp";
import g3 from "../../assets/images/g3.webp";
import g4 from "../../assets/images/g4.avif";
import g5 from "../../assets/images/g5.avif";
import g6 from "../../assets/images/g6.webp";
import g7 from "../../assets/images/g7.webp";
import g8 from "../../assets/images/g8.webp";
import g9 from "../../assets/images/g9.avif";

const Gallery = () => {
  return (
    <div className="mx-24 pt-24 ">
      <h1 className="text-center py-4 text-3xl font-bold">
        Explore Our Gallery{" "}
      </h1>
      <div className="grid grid-cols-3 gap-1 mx-auto rounded-full w-1/2 overflow-hidden">
        <img className="rounded-md h-48 w-full" src={g1} alt="" />
        <img className="rounded-md h-48 w-full" src={g2} alt="" />
        <img className="rounded-md h-48 w-full" src={g3} alt="" />
        <img className="rounded-md h-48 w-full" src={g4} alt="" />
        <img className="rounded-md h-48 w-full" src={g5} alt="" />
        <img className="rounded-md h-48 w-full" src={g6} alt="" />
        <img className="rounded-md h-48 w-full" src={g7} alt="" />
        <img className="rounded-md h-48 w-full" src={g8} alt="" />
        <img className="rounded-md h-48 w-full" src={g9} alt="" />
        {/* <img className="rounded-md h-48 w-full" src={g10} alt="" /> */}
      </div>
    </div>
  );
};

export default Gallery;
