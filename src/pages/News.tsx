import NewsModal from "../components/ui/NewsModal";
import { useAllNewsQuery } from "../redux/features/news/news.api";
import moment from "moment";
import { TSupply } from "../types";

const News = () => {
  const { data: news } = useAllNewsQuery("");
  return (
    <div className="bg-gray-100 min-h-screen px-2 md:px-8">
      <h1>all news here</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {news?.map((n: TSupply) => (
          <div className="bg-white p-3 rounded-lg border" key={n._id}>
            <h1 className="text-xl font-semibold pb-2">{n.title}</h1>

            <img
              className="w-full h-48 rounded-lg"
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
