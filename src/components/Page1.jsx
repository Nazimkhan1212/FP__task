import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../store';

const Page1 = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h2>Page 1</h2>
      <p>Counter Value: <span style={{color:count%2===0?"green":"red", fontSize:30, fontWeight:"bold"}} > {count} </span></p>
      <button style={{cursor:'pointer'}} onClick={handleIncrement}>Increment</button>
      <button><Link style={{textDecoration:"none", color:"black"}} to="/page2" >Go to Page 2</Link></button>
    </div>
  );
};

export default Page1;
