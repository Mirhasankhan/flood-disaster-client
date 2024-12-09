// import { Progress } from "antd";
// import { TSupplyCardProps } from "../../types";
// import { GiSandsOfTime } from "react-icons/gi";
// import { FaUsers } from "react-icons/fa6";
// import PaymentModal from "../../components/ui/PaymentModal";

import { Progress } from "antd";
import { TSupplyCardProps } from "../../types";
import { GiSandsOfTime } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import PaymentModal from "../../components/ui/PaymentModal";

// const Details = ({ campain }: TSupplyCardProps) => {
//   const {
//     amount,
//     category,
//     image,
//     title,
//     overview,
//     description,
//     collectedAmount,
//     _id,
//   } = campain;

//   return (
//     <div>
//       <div className="md:grid grid-cols-4 items-center">
//         <div className="col-span-2">
//           <div className="h-64 md:h-[384px] w-full overflow-hidden">
//             <img
//               className="h-full w-full object-cover"
//               src={image.imageUrl}
//               alt={title}
//             />
//           </div>
//         </div>
//         <div className="col-span-2 bg-white py-4 md:h-[440px] rounded-md">
//           <div className="p-4 border-b-2">
//             <h1>
//               <span className="text-2xl font-bold">{title}</span>
//             </h1>
//             <h1 className="text-xl py-3 font-semibold">
//               ${collectedAmount}.00
//             </h1>
//             <h1>donate of ${amount}.00 goal</h1>
//             <Progress
//               percent={(Number(collectedAmount) / Number(amount)) * 100}
//               showInfo={false}
//             />
//             <h2 className="mt-5">
//               <span className="font-semibold">Category:</span> {category}{" "}
//               Donation
//             </h2>
//             <div className="flex items-center gap-6 py-2">
//               <div className="flex items-center gap-2">
//                 <FaUsers className="text-xl"></FaUsers>
//                 <h1 className="text-xl text-orange-500">2 Donors</h1>
//               </div>
//               <div className="flex items-center gap-2">
//                 <GiSandsOfTime className="text-xl"></GiSandsOfTime>
//                 <h1 className="text-xl text-orange-500">December-01</h1>
//               </div>
//             </div>
//           </div>
//           <div className="p-4">
//             <p>{overview}</p>
//             <PaymentModal id={_id} title={title}></PaymentModal>
//           </div>
//         </div>
//       </div>
//       <div className="mt-12 text-xl font-medium">
//         <h1>{description}</h1>
//       </div>
//     </div>
//   );
// };

// export default Details;

const Details = ({ campain }: TSupplyCardProps) => {
  const {
    amount,
    category,
    image,
    title,
    overview,
    description,
    collectedAmount,
    _id,
  } = campain;
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="relative col-span-3">
          <img
            className="w-full rounded-lg h-[380px]"
            src={image.imageUrl}
            alt=""
          />
          <div className="absolute top-40 rounded-lg  left-16 w-5/6 p-5 bg-white">
            <div className="border-b-2 mb-2">
              <h1 className="text-3xl font-bold">{title}</h1>
              <div className="flex items-center gap-2 my-3">
                <Progress
                  size={40}
                  percent={Math.round(
                    (Number(collectedAmount) / Number(amount)) * 100
                  )}
                  type="circle"
                />
                <h1>
                  <span className="font-bold">${collectedAmount}</span> Raised
                  <span className="font-bold"> ${amount}</span> Goal
                </h1>
              </div>
              <div className="flex items-center gap-6 py-2">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-xl"></FaUsers>
                  <h1 className="text-xl text-orange-500">2 Donors</h1>
                </div>
                <div className="flex items-center gap-2">
                  <GiSandsOfTime className="text-xl"></GiSandsOfTime>
                  <h1 className="text-xl text-orange-500">December-01</h1>
                </div>
              </div>
            </div>
            <div>
              <h3>{overview}</h3>
              <div>
                <PaymentModal id={_id} title={title}></PaymentModal>
              </div>
            </div>
            <h1>{description}</h1>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Details;
