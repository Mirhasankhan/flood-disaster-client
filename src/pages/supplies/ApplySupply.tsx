import { useState } from "react";
import { Button, Col, Divider, Drawer, Row, Space } from "antd";
import PHInput from "../../components/form/PHInput";
import PHForm from "../../components/form/PHForm";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddApplyMutation } from "../../redux/features/recipient/recipientManagement.api";
import { useUpdateSupplyStatusMutation } from "../../redux/features/supply/supplyManagement.api";
import { TSupplyCardProps } from "../../types";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ApplySupply = ({ supply }: TSupplyCardProps) => {
  const [open, setOpen] = useState(false);
  const { email, role } = useAppSelector(useCurrentUser);
  const [addApplication] = useAddApplyMutation();
  const [updateStatus] = useUpdateSupplyStatusMutation();

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
      referenceId: `ObjectId(${supply._id}`,
    };
    addApplication(newSupply);
    updateStatus({ id: supply._id, isApplied: true });
    onClose();
    toast.success("Applied Successfully!");
  };

  return (
    <>
      {role == "recipient" && (
        <Button
          disabled={role !== "recipient" || supply.isApplied == true}
          className="bg-purple-400 h-10"
          onClick={showDrawer}
        >
          {supply.isApplied == true ? "Already Applied" : "Apply Now"}
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
                defaultValue={supply.supplyName}
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
