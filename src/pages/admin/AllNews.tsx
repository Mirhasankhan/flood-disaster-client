import { useAllNewsQuery } from "../../redux/features/news/news.api";

const AllNews = () => {
  const { data: news } = useAllNewsQuery();
  return (
    <div className="">
      <h1>all news here</h1>
      <div className="grid grid-cols-4 gap-6">
        {news?.map((n) => (
          <div className="bg-white p-2" key={n._id}>
            <h1>{n.title}</h1>
            <p>{n.time}</p>
            <img
              className="w-full h-48 rounded-lg"
              src={n.image.imageUrl}
              alt=""
            />
            <div dangerouslySetInnerHTML={{ __html: n.description }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
