import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/Sectiontitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);

const Payment = () => {
  return (
    <div className="w-full">
      <SectionTitle heading="Payment" subHeading="Process"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
