import React from 'react'
import Filter from '../../component/Filter';
import Table from '../../component/Table';
import Chart from "../../component/Chart"
import BarGraph from '../../component/BarGraph';
const TransAction = () => {
  //npm install react-chartjs-2 chart.js

  return (
    <div className="transaction-wrapper">
      <span className="heading"> Total Transaction </span>
      <BarGraph/>
      <Chart/>
      <Filter/>
      <Table/>

    </div>
  )
}

export default TransAction;