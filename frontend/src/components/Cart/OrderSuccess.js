import React, { Fragment } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, connect } from "react-redux";

const OrderSuccess = (props) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  console.log(props.newOrder);
  return (
    <Fragment>
      {/* {props.newOrder ? ( */}
      <div className="orderSuccess">
        <CheckCircleIcon />
        <Typography>Your Order has been Placed successfully </Typography>
        {/* <h1> {props.newOrder && props.newOrder.order._id}</h1> */}
        <div className="orderDoneDetails">
          <span>ORDER NUMBER | {props.newOrder && props.newOrder.order._id}</span>
          <span>DATE | {props.newOrder && props.newOrder.order.createdAt}</span>
          <span>
            TOTAL | RS {props.newOrder && props.newOrder.order.totalPrice}
          </span>
          <span>
            PAYMENT METHOD |{" "}
            {props.newOrder && props.newOrder.order.paymentInfo.id}
          </span>
        </div>
        <Link
          to={
            isAuthenticated
              ? "/orders"
              : props.newOrder
                ? `/check/order/email/${props.newOrder.order._id}`
                : "/check/order/email"
          }
          className="btn_primary"
        >
          View Orders
        </Link>
      </div>
      {/* ) : null} */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  newOrder: state.newOrder.order,
});
export default connect(mapStateToProps)(OrderSuccess);
