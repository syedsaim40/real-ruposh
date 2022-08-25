import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { FavouriteremoveItemsFromCart } from "../../redux/action/cartAction";
import { Typography } from "@material-ui/core";
// import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
// import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { favouriteItems } = useSelector((state) => state.cart);

  const deletefavouriteItems = (id) => {
    dispatch(FavouriteremoveItemsFromCart(id));
  };

  return (
    <Fragment>
      {favouriteItems.length === 0 ? (
        <div className="emptyCart">
          <FavoriteTwoToneIcon />
          <Typography>No Product in Your Favourite Cart</Typography>
          <Link className="btn_primary" to="/products">
            View Products
          </Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#000",
              }}
            ></div>
            <div className="cartHeader">
              <p>
                <b>Products</b>
              </p>
              {/* <p>
                <b>Remove</b>
              </p>
              <p>
                <b>Price</b>{" "}
              </p> */}
            </div>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#000",
              }}
            ></div>
            {favouriteItems &&
              favouriteItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard
                    item={item}
                    deleteCartItems={deletefavouriteItems}
                  />
                  {/* <div className="cartInput">
                    {
                      <p
                        className="delitem"
                        onClick={() => deletefavouriteItems(item.product)}
                      >
                        <DeleteForeverRoundedIcon />
                      </p>
                    }
                  </div>
                  <p className="cartSubtotal">{<b> PKR {item.price}</b>}</p> */}
                </div>
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
