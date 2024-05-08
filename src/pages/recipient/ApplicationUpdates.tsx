import { useAppliesQuery } from "../../redux/features/recipient/recipientManagement.api";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { Tabs, TabsProps } from "antd";
import ApplicationCard from "./ApplicationCard";
import { TSupply } from "../../types";

const ApplicationUpdates = () => {
  const { email } = useAppSelector(useCurrentUser);

  const { data } = useAppliesQuery(email);
  const pendingData = data?.filter(
    (pending: { isApproved: boolean }) => pending.isApproved === false
  );
  const approvedData = data?.filter(
    (approved: { isApproved: boolean }) => approved.isApproved === true
  );

  // const onChange = (key: string) => {};

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Pending Applications",
      children: (
        <div className="grid grid-cols-3 gap-6">
          {pendingData?.map((p: TSupply) => (
            <ApplicationCard key={p._id} application={p}></ApplicationCard>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "Approved Applications",
      children: (
        <div className="grid grid-cols-3 gap-6">
          {approvedData?.map((a: TSupply) => (
            <ApplicationCard key={a._id} application={a}></ApplicationCard>
          ))}
        </div>
      ),
    },
  ];
  return (
    <Tabs
      className="w-full"
      defaultActiveKey="1"
      items={items}
      // onChange={onChange}
    />
  );
};

export default ApplicationUpdates;
