import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error : ", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("Payment Method : ", paymentMethod);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto my-10 space-y-7">
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
        <button className="btn btn-accent" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-500 w-1/2 mx-auto my-5">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForm;
