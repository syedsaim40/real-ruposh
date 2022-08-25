/* eslint-disable eqeqeq */
import React, { Fragment, useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../Layout/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getrandomDetails } from "../../redux/action/orderaction";
// import Loader from "../Layout/Loader/Loader";

const OrderDetails = ({ match }) => {
  const { order } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getrandomDetails(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <Fragment>
      {order ? (
        <Fragment>
          <MetaData title="Order Details" />

          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{order && order._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order.shippingInfo && order.shippingInfo.name}</span>
                </div>
                <div>
                  <p>Email:</p>
                  <span>{order.shippingInfo && order.shippingInfo.email}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, STATE (${order.shippingInfo.state}),  PINCODE (${order.shippingInfo.pinCode})`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "PAID"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "PAID"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>{order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      {
                        item.size&&item.size!=""?(
        <span>{`Size: ${item.size}`}</span>

                        ):(null)
                      }
                      {
                        item.color&&item.color!=""?(
        <span>{`Color: ${item.color}`}</span>

                        ):(null)
                      }
                      <span>
                        {item.quantity} X PKR {item.price} ={" "}
                        <b>PKR {item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="search_holder">
          <h1>No Records</h1>
        </div>
      )}
    </Fragment>
  );
};

export default OrderDetails;
