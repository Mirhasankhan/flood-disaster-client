import { useAppliesQuery } from "../../redux/features/recipient/recipientManagement.api";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { Tabs, TabsProps } from "antd";
import ApplicationCard from "./ApplicationCard";

const ApplicationUpdates = () => {
  const { email } = useAppSelector(useCurrentUser);

  const { data } = useAppliesQuery(email);
  const pendingData = data?.filter((pending) => pending.isApproved === false);
  const approvedData = data?.filter((approved) => approved.isApproved === true);

  // const onChange = (key: string) => {};

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Pending Applications",
      children: (
        <div>
          {pendingData?.map((p) => (
            <ApplicationCard key={p._id} application={p}></ApplicationCard>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "Approved Applications",
      children: (
        <div>
          {approvedData?.map((a) => (
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
