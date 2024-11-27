import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import "../ui/CheckOutForm.css";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

import { toast } from "sonner";
import { useAddDonationMutation } from "../../redux/features/recipient/recipientManagement.api";

const PayOut = () => {
  const { email, name } = useAppSelector(useCurrentUser);
  const [addDonation] = useAddDonationMutation();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [tId, setTId] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price: 50 }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message as string);
    } else {
      setCardError("");
    }
    setProcessing(true);

    const { paymentIntent, error: payError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: email?.toString() || "No Email",
            name: name || "No Name",
          },
        },
      }
    );

    if (payError) {
      console.log(payError);
      setProcessing(false);
      return;
    }
    if (paymentIntent?.status === "succeeded") {
      setTId(paymentIntent.id);
      toast.success("Transaction completed");
      const payment = {
        name: name,
        email: email,
        amount: 50,
      };
      addDonation(payment);
    }
    setProcessing(false);
  };

  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          disabled={!stripe || !clientSecret || processing}
          className="btn btn-success mt-4 w-full"
          type="submit"
        >
          Place Order
        </button>
      </form>
      {cardError && <p className="text-red-600 pt-6">{cardError}</p>}
      {tId && <p>Transaction completed</p>}
    </div>
  );
};

export default PayOut;
