import React from 'react'
import Portfolio from './Portfolio';
import PortfolioPrint from './PrintPF';
import Graph from './Graph';
import BoxModel from './BoxModel';
export default function Insert() {
  return (
    <>
    <Portfolio />
    <PortfolioPrint/>
    <Graph/>
    <div className="p_insert_body">
      <BoxModel color="rgb(242,231,254)"/>
    </div>
    </>
  )
}
