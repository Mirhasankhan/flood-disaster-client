import NewsModal from "../components/ui/NewsModal";
import { useAllNewsQuery } from "../redux/features/news/news.api";
import moment from "moment";
import { TSupply } from "../types";

const News = () => {
  const { data: news } = useAllNewsQuery("");
  return (
    <div className="bg-gray-100 pb-8 min-h-screen">
      <div className="flex flex-col mb-4 text-center items-center justify-center bg-gradient-to-r from-[#211e3d] to-[#561c3e] h-60">
        <h1 className="text-gray-100 pb-2">Stay Informed</h1>
        <p className="text-white text-2xl md:text-4xl font-bold">
          Latest News & Updates
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  px-4 md:px-28">
        {news?.map((n: TSupply) => (
          <div className="bg-white p-3 rounded-lg border" key={n._id}>
            <h1 className="text-xl font-semibold pb-2">{n.title}</h1>

            <img
              className="w-full h-60 rounded-lg"
              src={n.image.imageUrl}
              alt=""
            />
            <p className="py-1 text-xs">
              {moment(n.time).format("MMMM Do YYYY, h:mm a")}
            </p>

            <NewsModal news={n}></NewsModal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
