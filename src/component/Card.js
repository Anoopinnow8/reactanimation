import React, { useEffect, useRef, useState } from 'react';
import { GsapAnimation } from '../style/animation/GsapAnimation';

const Card = ({ onClick = () => {} }) => {
  const popOutRef = useRef(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    GsapAnimation('popOut', popOutRef.current, { duration: 2 });
  }, []);

  const handleInputChange = (event) => {
    setAmount(Number(event.target.value));
  };

  return (
    <div>
      <div className="style-card" ref={popOutRef} onClick={() => onClick(amount)}>
        <img src={"https://picsum.photos/id/237/250"} alt="Card" className="image" />
      </div>
      <input
        type="number"
        value={amount}
        onChange={handleInputChange}
        placeholder="Enter amount"
        className="amount-input"
      />
    </div>
  );
};

export default Card;