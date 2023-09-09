import React from "react";
import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
import {actionCreators} from "../state/index"
import { bindActionCreators } from "redux";
const Shop = () => {
  const dispatch = useDispatch();
  const {WithdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div className="container mx-4">
      <h4 className="my-3">Buy The Products Available</h4>
      <div className="container">
      <img src="https://th.bing.com/th/id/OIP.ObkvfIm5uEuwcvBpYSMz7wHaEK?w=330&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" width={100} height={100}/>
      <p>Price : 50$</p>
      <button className="btn btn-primary md-2" onClick={()=>{WithdrawMoney(100)}}>-</button>
      Update Balance
      <button className="btn btn-primary" onClick={()=>{depositMoney(100)}}>+</button>
      </div>
      
    </div>
  );
};

export default Shop;
