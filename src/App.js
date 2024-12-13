import React, { useRef, useEffect, useState } from "react";
import Card from "./component/Card";
import "./App.css";
import axios from 'axios';
import RenderRazorpay from "./component/RenderRazorpay";

function App() {
  const [displayRazorpay, setDisplayRazorpay] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null
  });

  const serverBaseUrl = "http://localhost:8000";
  const handleCreateOrder = async (orderAmount) => {
    try {
      const response = await axios.post(`${serverBaseUrl}/api/payment/order`, {
        amount: orderAmount * 100, 
        keyId: "gthy5r",
        keySecret: "hegfuygr45hjgvhe", 
      });
  
      const data = response.data;
      if (data && data.order_id) {
        setOrderDetails({
          orderId: data.order_id,
          amount: data.amount,
          currency:data.currency
        });
        setDisplayRazorpay(true);
      } else {
        console.error("Failed to create order, invalid response:", data);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  console.log(orderDetails,"orderDetails")
  return (
    <div className="App">
      <Card onClick={handleCreateOrder} />
      {displayRazorpay && (
        <RenderRazorpay
          amount={orderDetails.amount}
          currency={orderDetails.currency}
          orderId={orderDetails.orderId}
          keyId={ "gtruehiu5"}
          keySecret={"uyhruwyhgtuhy6"}
          onClose={()=>setDisplayRazorpay(false)}
        />
      )}
    </div>
  );
}

export default App;
