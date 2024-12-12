import { useEffect, useRef } from "react";
import crypto from "crypto-js";
import PropTypes from "prop-types";
import Axios from "axios";
const loadScript = (src) =>
  new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      console.log("razorpay loaded successfully");
      resolve(true);
    };
    script.onerror = () => {
      console.log("error in loading razorpay");
      resolve(false);
    };
    document.body.appendChild(script);
  });
const RenderRazorpay = ({ orderId, keyId, keySecret, currency, amount,onClose=()=>{} }) => {
  const paymentId = useRef(null);
  const paymentMethod = useRef(null);
  const serverBaseUrl = "http://localhost:8000";

  const displayRazorpay = async (options) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      console.log("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.submit", (response) => {
      paymentMethod.current = response.method;
    });

    rzp1.on("payment.failed", (response) => {
      paymentId.current = response.error.metadata.payment_id;
    });

    rzp1.open();
  };
  const handlePayment = async (status, orderDetails = {}) => {
    const payload = {
      status,
      orderDetails: {
        ...orderDetails,
        paymentId: paymentId?.current
      }
    };
    console.log(payload, "payload");
    try {
      const result = await Axios.post(
        `${serverBaseUrl}/api/payment/verify`,
        payload
      );
      console.log(result, "Payment verification");
      if (result?.status === 200) {
        console.log("close modal");
        onClose();
        alert.message("Payment Succesfull")
      }
    } catch (error) {
      console.error("Payment verification failed", error);
    }
  };

  const options = {
    key: keyId,
    amount,
    currency,
    name: "Anoop",
    order_id: orderId,
    handler: (response) => {
      console.log("succeeded in payment 2 ", response);
      paymentId.current = response?.razorpay_payment_id;

      const succeeded =
        crypto
          .HmacSHA256(`${orderId}|${response.razorpay_payment_id}`, keySecret)
          .toString() === response.razorpay_signature;
      console.log(response?.razorpay_signature, "<--------razorpay_signature");
      console.log("succeeded in payment_______>>>>>> succeeded ", succeeded);

      if (succeeded) {
        paymentId.current = response?.razorpay_payment_id;
        handlePayment("succeeded", {
          orderId,
          paymentId: response?.razorpay_payment_id,
          signature: response?.razorpay_signature,
          paymentId: response?.razorpay_payment_id
        });
      } else {
        handlePayment("failed", {
          orderId,
          paymentId: response.razorpay_payment_id
        });
      }
    },
    modal: {
      confirm_close: true,
      ondismiss: () => {
        console.log("Payment modal dismissed by the user.");
        handlePayment("cancelled");
      },
      
    },

    retry: {
      enabled: false
    },
    timeout: 900,
    theme: {
      color: "#61dafb"
    }
  };
  useEffect(() => {
    console.log("in razorpay");
    displayRazorpay(options);
  }, []);

  return null;
};

export default RenderRazorpay;
