import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./header.css";
import { useSelector } from "react-redux";
import UserOptions from "../../user/useroption";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import SearchIcon from "@mui/icons-material/Search";
// import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
// import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { Logout } from "../../../redux/action/useraction";
import { useDispatch } from "react-redux";

// import SideNav, { NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import Collapsible from "react-collapsible";

//creating the unique header component for all vasl pages
function Header() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const { favouriteItems } = useSelector((state) => state.cart);

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  //for logout the user through mobile menu
  const dispatch = useDispatch();
  function logoutUser() {
    dispatch(Logout());
    alert.success("Logout Successfully");
  }

  const [isMnHovering, setIsMnHovering] = useState(false);
  const handleMnMouseOver = () => {
    setIsMnHovering(true);
  };
  const handleMnMouseOut = () => {
    setIsMnHovering(false);
  };


  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };


  const [isBtHovering, setIsBtHovering] = useState(false);
  const handleBtMouseOver = () => {
    setIsBtHovering(true);
  };
  const handleBtMouseOut = () => {
    setIsBtHovering(false);
  };



//   let timeout
// let scroll = 0

//   useEffect(() => {
//     window.onscroll = () => {
//       if (timeout) {
//         clearTimeout(timeout)
//       }

//       timeout = setTimeout(() => {
//         if (scroll >= window.scrollY && window.scrollY > 10) {
//           document.getElementById('header').classList.add('sticky')
//         } else {
//           document.getElementById('header').classList.remove('sticky')
//         }

//         scroll = window.scrollY
//       }, 10)
//     }
//   }, [])



useEffect(() => {
  window.addEventListener("scroll", isSticky);
  return () => {
    window.removeEventListener("scroll", isSticky);
  };
});

/* Method that will fix header after a specific scrollable */
const isSticky = (e) => {
  const header = document.querySelector(".header-section");
  const scrollTop = window.scrollY;
  scrollTop >= 250
    ? header.classList.add("is-sticky")
    : header.classList.remove("is-sticky");
};


  return (
    <header className="header-section d-none d-xl-block">
      <div className="header_bar">
        <ul className="unstyled">
        <li ><a href="tel:+923037022229">Call Us: +92 303-702-2229</a></li>

          <li>Free Shipping on all orders worth RS:3000 & above</li>
        </ul>
      </div>
      <div className="top_header">
        <div id="mobile_menu">
          <div>
            <div style={{}}>
              <button
                className="mn_open_btn"
                onClick={() => setState({ isPaneOpenLeft: true })}
              >
                <MenuIcon />
              </button>
            </div>
            <SlidingPane
              closeIcon={
                <div>
                  <CloseRoundedIcon />
                </div>
              }
              isOpen={state.isPaneOpenLeft}
              title="RUPOSH"
              from="left"
              width="300px"
              onRequestClose={() => setState({ isPaneOpenLeft: false })}
            >
              <Collapsible trigger="Categories" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/Newinn">New Inn</Link>
                  </li>
                  <li>
                    <Link to="/Womens">Womens</Link>
                  </li>
                  <li>
                    <Link to="/Womens">mens</Link>
                  </li>
                  <li>
                    <Link to="/Accessories">Accessories</Link>
                  </li>
                  <li>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </li>
                  <li>
                    <Link to="/Unstiched">Unstiched</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="New Inn" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </li>
                  <li>
                    <Link to="/Unstiched">Unstiched</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="Womens" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </li>
                  <li>
                    <Link to="/Unstiched">Unstiched</Link>
                  </li>
                  <li>
                    <Link to="/Abayas">Abayas</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="mens" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/kurtas">Kurtas</Link>
                  </li>
                  <li>
                    <Link to="/Tracksuits">Track Suits</Link>
                  </li>
                </ul>
              </Collapsible>
              {/* <Collapsible trigger="Replicas" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/ReadyToWear">Ready to wear</Link>
                  </li>
                  <li>
                    <Link to="/Unstiched">Unstiched</Link>
                  </li>
                </ul>
              </Collapsible> */}
              <Collapsible trigger="Accesories" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/Bags">Bags</Link>
                  </li>
                  <li>
                    <Link to="/Scarves">scarves</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="Beauty" className="accordian_footer">
                <ul className="mn_menu_list">
                  <li>
                    <Link to="/Perfumes">perfumes</Link>
                  </li>
                  <li>
                    <Link to="/Cosmetics">cosmetics</Link>
                  </li>
                </ul>
              </Collapsible>
              <Collapsible trigger="User Menu" className="accordian_footer">
                <ul className="non_coll mn_menu_list">
                  <li>
                    {isAuthenticated ? (
                      <ul>
                        <li>
                          <Link to="/orders">
                            <ListAltIcon />
                            <span>Orders</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/accounts">
                            <AccountBoxOutlinedIcon />
                            <span>Profile</span>
                          </Link>
                        </li>

                        {user&&user.role === "admin" ? (
                          <li>
                            <Link to="/admin/dashboard">
                              <DashboardIcon />
                              <span>Dashboard</span>
                            </Link>
                          </li>
                        ) : null}
                        <li>
                          <li>
                            <Link onClick={logoutUser}>
                              <LogoutIcon />
                              <span>Logout</span>
                            </Link>
                          </li>
                        </li>
                      </ul>
                    ) : (
                      <Link to="/login">
                        <HowToRegIcon />
                        <span>Login/Register</span>
                      </Link>
                    )}
                  </li>
                </ul>
              </Collapsible>

              <ul className="non_coll mn_menu_list">
                <li>
                  <Link to="/search">
                    <form className="search-icon">
                      {/* <input type="button" value=""></input> */}
                      <SearchIcon />
                      <span>Search your choice</span>
                    </form>
                  </Link>
                </li>

                <li>
                  <Link to="/check/order">
                    <ListAltIcon />
                    <span>Check Order ID</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/FavouriteCart"
                    style={{
                      color: favouriteItems.length > 0 ? "red" : "unset",
                    }}
                  >
                    {favouriteItems.length === 0 ? (
                      <FavoriteBorderIcon
                        style={{
                          color: favouriteItems.length > 0 ? "red" : "unset",
                        }}
                      />
                    ) : (
                      <FavoriteIcon
                        style={{
                          color: favouriteItems.length > 0 ? "red" : "unset",
                        }}
                      />
                    )}
                    <span>Whishlist</span>
                  </Link>
                </li>

                <li>
                  <Link to="/check/order/email">
                    <ContentPasteSearchIcon />
                    <span>Search order Gmail</span>
                  </Link>
                </li>
              </ul>
            </SlidingPane>
          </div>
        </div>

        <div className="logo">
          <h1>
            <Link to="/">
              <img className="main_logo" src={logo} alt="logo" />
            </Link>
          </h1>
        </div>
        <ul className="dp-box1 vasl-header-list">
          <li>
            {isAuthenticated ? (
              <UserOptions user={user} />
            ) : (
              <Link to="/login">
                <HowToRegIcon />
              </Link>
            )}
          </li>
          <li>
            <Link to="/search">
              <form className="search-icon">
                <SearchIcon />
              </form>
            </Link>
          </li>
          <li>
            <Link to="/check/order">
              <ListAltIcon />
            </Link>
          </li>
          <li>
            <Link to="/check/order/email">
              <ContentPasteSearchIcon />
            </Link>
          </li>
          <li>
            <Link
              to="/FavouriteCart"
              style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
            >
              {favouriteItems.length === 0 ? (
                <FavoriteBorderIcon
                  style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
                />
              ) : (
                <FavoriteIcon
                  style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
                />
              )}
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              style={{ color: cartItems.length > 0 ? "red" : "unset" }}
            >
              <ShoppingCartIcon
                style={{ color: cartItems.length > 0 ? "red" : "unset" }}
              />{" "}
              <sup style={{ color: cartItems.length > 0 ? "red" : "unset" }}>
                {" "}
                {cartItems.length > 0 ? cartItems.length : null}
              </sup>
            </Link>
          </li>
        </ul>
        <ul className="dp-box1 mobile_header_list vasl-header-list">
          <li>
            <Link
              to="/FavouriteCart"
              style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
            >
              {favouriteItems.length === 0 ? (
                <FavoriteBorderIcon
                  style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
                />
              ) : (
                <FavoriteIcon
                  style={{ color: favouriteItems.length > 0 ? "red" : "unset" }}
                />
              )}
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              style={{ color: cartItems.length > 0 ? "red" : "unset" }}
            >
              <ShoppingCartIcon
                style={{ color: cartItems.length > 0 ? "red" : "unset" }}
              />{" "}
              <sup style={{ color: cartItems.length > 0 ? "red" : "unset" }}>
                {" "}
                {cartItems.length > 0 ? cartItems.length : null}
              </sup>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom_header">
        <ul className="unstyled bottom_nav">
          <li>
            <Link to="/Newinn">New In</Link>
          </li>
          <li>
            <Link to="/Womens">women</Link>
          </li>
          <li>
            <Link to="/Abayas">Abayas</Link>
          </li>
          <li className={isMnHovering ? 'pr_box' : ''}
            onMouseOver={handleMnMouseOver}
            onMouseOut={handleMnMouseOut} id="pr_item">
            <Link to="/mens" onClick={ (event) => event.preventDefault() }>Mens</Link>
            <ul className="unstyled accr_list">
              <li>
                <Link to="/kurtas">Kurta</Link>
              </li>
              <li>
                <Link to="/Tracksuits">Track Suits</Link>
              </li>
            </ul>
          </li>
          <li className={isHovering ? 'pr_box' : ''}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut} id="pr_item">
            <Link to="/Accessories" onClick={ (event) => event.preventDefault() }>ACCESSORIES</Link>
            <ul className="unstyled accr_list">
              <li>
                <Link to="/Bags">Bags</Link>
              </li>
              <li>
                <Link to="/Scarves">scarves</Link>
              </li>
            </ul>
          </li>
          <li className={isBtHovering ? 'bt_box' : ''}
            onMouseOver={handleBtMouseOver}
            onMouseOut={handleBtMouseOut} id="bt_item">
            <Link to="/Beauty" onClick={ (event) => event.preventDefault() }>Beauty</Link>
            <ul className="unstyled accr_list">
              <li>
                <Link to="/Perfumes">perfumes</Link>
              </li>
              <li>
                <Link to="/Cosmetics">cosmetics</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/ReadyToWear">ready to wear</Link>
          </li>
          <li>
            <Link to="/Unstiched">Unstiched</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
