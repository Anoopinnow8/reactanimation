import React from 'react';

const Table = () => {
  const data = [
    {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },
    {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },
   
    {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },
    {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },
    {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },
   
    {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },  {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },
    {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },
   
    {
      username: 'John Doe',
      profilePic: 'https://picsum.photos/id/237/250',
      date: '2024-12-17',
      amount: '$250.00',
      status: 'Completed',
      quantity: 2,
      productName: 'Wireless Mouse',
      eventName: 'Holiday Sale',
    },
  
  ];

  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="user-info">
                <img src={item.profilePic} alt="Profile" className="profile-pic" loading="lazy" />
                {item.username}
              </td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
              <td>{item.quantity}</td>
              <td>{item.productName}</td>
              <td>{item.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
