import React from 'react';
import { useParams } from 'react-router-dom';

const Orders = () => {
  const {id} =useParams()
  console.log(id)
  return (
    <div>
      <h2>this is order summary now ...........................</h2>
    </div>
  );
};

export default Orders;