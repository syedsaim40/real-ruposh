import React, { Fragment, useEffect, useState } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../Layout/Metadata";
import { Link } from "react-router-dom";
import { getrandomemail } from "../../redux/action/orderaction";
// import Loader from "../Layout/Loader/Loader";
import { useHistory } from "react-router-dom";
import LaunchIcon from "@material-ui/icons/Launch";
import { DataGrid } from "@material-ui/data-grid";

const OrderDetails = () => {
  const { order } = useSelector((state) => state.randomemail);
  const [user, setuser] = useState("");
  let history = useHistory();

  const dispatch = useDispatch();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
  };

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 200, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/check/order/email/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  order &&
    order.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });
  useEffect(() => {
    dispatch(getrandomemail(user));
  }, [dispatch, history, user]);
  return (
    <Fragment>
      <div className="search_holder">
        <div className="search_bar">
          <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input
              type="text"
              placeholder="Enter a Email.."
              onChange={(e) => setuser(e.target.value)}
            />
            <input className="btn_primary" type="submit" value="Search" />
          </form>
        </div>
        <div className="">
          <MetaData title="Order's Page" />

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
            
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OrderDetails;
