import { TSupply } from "../../types";

const ApplicationCard = ({ application }: { application: TSupply }) => {
  return <div>{application.supplyName}</div>;
};

export default ApplicationCard;
