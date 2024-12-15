import { useDonationsQuery } from "../../redux/features/users/userManagement.api";
import { TSupply } from "../../types";

const Recent = () => {
  const { data: donations } = useDonationsQuery("");
  console.log(donations);
  return (
    <div>
      {donations
        ?.slice(0, 3)
        .reverse()
        .map((donation: TSupply) => (
          <div>
            <div className="flex mb-4 gap-4 items-center bg-gray-500 p-2 rounded-md text-white">
              <img
                className="h-20 w-20 rounded-xl"
                src={donation.image.imageUrl}
                alt=""
              />
              <div>
                <h1>{donation.title}</h1>
                <p className="text-sm">Donor:{donation.name}</p>
                <p className="text-sm">Amount: ${donation.amount}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Recent;
