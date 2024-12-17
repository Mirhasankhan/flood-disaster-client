import { useState } from "react";
import { Modal } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUpdateCollectionMutation } from "../../redux/features/supply/supplyManagement.api";
import { useAddDonationMutation } from "../../redux/features/recipient/recipientManagement.api";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { TSupplyCardProps } from "../../types";
// import ProceedPayment from "../Payment/ProceedPayment";

interface FormData {
  name: string;
  email: string;
  contactNumber: string;
  amount: number;
}

const PaymentModal = ({ campain }: TSupplyCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { email, name } = useAppSelector(useCurrentUser);
  const [updateCampain] = useUpdateCollectionMutation();
  const [addDonation] = useAddDonationMutation();
  const navigate = useNavigate();

  const showModal = () => {
    if (email) {
      setIsModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const donationDetail = {
      ...data,
      image: {
        imageUrl: campain.image.imageUrl,
      },
      title: campain.title,
    };
    addDonation(donationDetail);
    updateCampain({ id: campain._id, newAmount: +data.amount });
    toast.success("Donated Successfully, Thanks for your contribution!");
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="main-button" onClick={showModal}>
        Proceed to payment
      </button>
      <Modal
        title={campain.title}
        open={isModalOpen}
        footer={null}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              defaultValue={name ?? ""}
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message as string}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              defaultValue={email ? email.toString() : ""}
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message as string}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Contact Number</label>
            <input
              type="text"
              {...register("contactNumber", {
                required: "Contact number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Enter a valid contact number",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter your contact number"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">
                {errors.contactNumber.message as string}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Amount</label>
            <input
              type="number"
              {...register("amount", {
                required: "Amount is required",
                valueAsNumber: true,
                min: {
                  value: 10,
                  message: "Amount must be at least 10",
                },
              })}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Enter the amount"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">
                {errors.amount.message as string}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 font-semibold text-white py-2 rounded hover:bg-blue-600"
          >
            Donate
          </button>
        </form>
        {/* <ProceedPayment></ProceedPayment> */}
      </Modal>
    </>
  );
};

export default PaymentModal;
