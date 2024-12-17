import React from 'react'
import Filter from '../../component/Filter';
import Table from '../../component/Table';

const TransAction = () => {
  return (
    <div className="transaction-wrapper">
      <span className="heading"> Total Transaction </span>
      <Filter/>
      <Table/>

    </div>
  )
}

export default TransAction;