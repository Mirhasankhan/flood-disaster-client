import { useState } from "react";
import { Button, Col, Divider, Drawer, Row, Space } from "antd";
import PHInput from "../../components/form/PHInput";
import PHForm from "../../components/form/PHForm";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { TSupplyCardProps } from "../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateCollectionMutation } from "../../redux/features/supply/supplyManagement.api";
import { useAddDonationMutation } from "../../redux/features/recipient/recipientManagement.api";

const ApplySupply = ({ campain }: TSupplyCardProps) => {
  const [open, setOpen] = useState(false);
  const { email, role } = useAppSelector(useCurrentUser);
  const [addDonation] = useAddDonationMutation();
  const [updateStatus] = useUpdateCollectionMutation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    const newSupply = {
      ...values,
      isApproved: false,
      referenceId: `ObjectId(${campain._id}`,
    };
    addDonation(newSupply);
    updateStatus({ id: campain._id, newAmount: 10 });
    onClose();
    toast.success("Donated Successfully, Thanks for your contribution!");
  };

  return (
    <>
      {role == "recipient" && (
        <Button
          disabled={role !== "recipient" || campain.isApplied == true}
          className="bg-purple-400 h-10 font-medium text-white"
          onClick={showDrawer}
        >
          {campain.isApplied == true ? "Already Applied" : "Apply Now"}
        </Button>
      )}
      <Drawer
        title="Apply For This Supply"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <PHForm onSubmit={onSubmit}>
          <Divider>Recipient Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="email"
                name="email"
                label="Email"
                defaultValue={email}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="number" name="contactNo" label="Contact No" />
            </Col>
          </Row>
          <Divider>Supply Details</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="supplyName"
                label="Supply Name"
                defaultValue={campain.supplyName}
                readOnly
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="donorEmail"
                label="Donor Email"
                defaultValue={supply.email}
                readOnly
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="category"
                label="Category"
                defaultValue={supply.category}
                readOnly
              />
            </Col>
            <Col span={24} md={{ span: 24 }} lg={{ span: 24 }}>
              <PHInput type="text" name="description" label="Description" />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Drawer>
    </>
  );
};

export default ApplySupply;
