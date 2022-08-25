// import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Layout/Loader/imageload.css";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_Errors } from "../../redux/action/productAction";
// import Imageload from "../Layout/Loader/imageload";
import { FavouriteToCart } from "../../redux/action/cartAction";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAlert } from "react-alert";
import { RWebShare } from "react-web-share";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const Product = ({ product }) => {
  const { error } = useSelector((state) => state.productDetails);
  const alert = useAlert();
  const dispatch = useDispatch();
  const [quantity] = useState(1);
  // const addToCartHandler = () => {
  //   if (product.stock === 0) {
  //     alert.error("Sorry! Out Of Stock");
  //     return;
  //   }
  //   dispatch(addItemsToCart(product._id, quantity));
  //   alert.success("Item Added To Cart");
  // };
  // const options = {
  //   value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };
  const FavouriteCart = () => {
    dispatch(FavouriteToCart(product._id, quantity));
    alert.success(" Favourite Item Added");
  };
 
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors);
    }
  }, [dispatch, alert, error]);

  return (
    <Fragment>
      
     
          <div className="productCard">
            <div className="productCard productCard_Holder">
              {/* ye btn dil wala mene add ,kia h */}
              <div className="wishList_btn">
                <FavoriteBorderIcon onClick={() => FavouriteCart()} />
                <span>Add to Wishlist</span>
              </div>
              {/* <div className="prc_after"></div> */}
              <Link className="prd_img" to={`/oneproduct/${product._id}`}>
                <img alt={product.name} src={product.images[0].url} />
              </Link>
              <Link className="shop_btn" to={`/oneproduct/${product._id}`}>
                <span className="sb_bag">
                  <VisibilityIcon />
                </span>
                <span className="sbtn_txt">View Details</span>
              </Link>
              <div className="product_desp">
                <p>{product.name}</p>
                <span className="dsPrice">RS. {product.fakeprice&&product.fakeprice}</span>
                <span>{`RS. ${product.price}`}</span>
                <span className='share_link red_link' title='share product'>
                  <RWebShare
                    data={{
                      url: `http://localhost:3000/oneproduct/${product._id}`,
                      title: "RUPOSH",
                    }}
                    onClick={() => console.log("Shared Successfully!")}
                  >
                    <span><ShareOutlinedIcon /></span>
                  </RWebShare>
                </span>
              </div>
            </div>
            {/* <div>
              <Rating {...options} />{" "}
              <span className="productCardSpan">
                ({product.numofreviews} Reviews)
              </span>
            </div> */}
          </div>
   
    </Fragment>
  );
};
export default Product;
