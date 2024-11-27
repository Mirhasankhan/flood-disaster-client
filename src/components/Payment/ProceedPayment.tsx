import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PayOut from "./PayOut";

const striprePromise = loadStripe(import.meta.env.VITE_Stripe_Gateway_PK);

const ProceedPayment = () => {
  const { email } = useAppSelector(useCurrentUser);
  console.log(email);

  return (
    <div className="px-3 md:px-14 py-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-md">
          <Elements stripe={striprePromise}>
            <PayOut></PayOut>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default ProceedPayment;
