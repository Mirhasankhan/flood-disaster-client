// import { useAllCommentsQuery } from "../../redux/features/community/news.api";

// type TCommunity = {
//   _id: string;
//   name: string;
//   comment: string;
//   rating: string;
//   time: string;
// };

// const Community = () => {
//   const { data } = useAllCommentsQuery("");

//   return (
//     <div className="grid grid-cols-2 gap-4 mt-6">
//       <div>
//         <h1 className="text-6xl font-bold">
//           What Community <br /> Thinks About Us
//         </h1>
//         <p>
//           Our goal is to create a product and service that you’re satisfied with
//           and use it every day. This is why we’re constantly working on our
//           services to make it better every day and really listen to what our
//           users has to say.
//         </p>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         {data?.map((com: TCommunity) => (
//           <div className="border rounded-md p-4" key={com._id}>
//             <h1>{com.name}</h1>
//             <h1>{com.time}</h1>
//             <p>{com.rating}</p>
//             <p>{com.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Community;
