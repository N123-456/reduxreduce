import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreator} from './state/index'
const Shop = () => {
  const dispatch=useDispatch();
  return (
    <div className='container my-3'>
    <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary mx-2">-</button>
      Update balance
      <button className="btn btn-primary mx-2">+</button>
    </div>
  );
}

export default Shop;
