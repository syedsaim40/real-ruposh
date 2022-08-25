import "./App.css";
import WebFont from "webfontloader";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import Example from "./example";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import Product from "./components/Products/product";
import Search from "./components/Products/Search";
import loginsugnup from "./components/user/loginsugnup";
import store from "./redux/store";
import { loadUser } from "./redux/action/useraction";
import ProtectedRoute from "./components/Route/ProtectedRoute";

import Header from "./components/Layout/header/header";
import Footer from "./components/Layout/Footer/Footer";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/updatepassword";
import ForgotPassword from "./components/user/forgotpassword";
import ResetPassword from "./components/user/resetpassword";
import loader from "./components/Layout/Loader/Loader";
import Cart from "./components/Cart/Cart";
import FavouriteCart from "./components/Cart/favouritecart.js";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Cart/Payment";
import OrderSuccess from "./components/Cart/OrderSuccess";
import MyOrders from "./components/Order/MyOrders";
import OrderDetails from "./components/Order/OrderDetails";
import CheckDetails from "./components/Order/checkorder";
import "./components/Admin/dashboard.css";
import Dashboard from "./components/Admin/Dashboard";
import ProductList from "./components/Admin/ProductList";
import updateProduct from "./components/Admin/UpdateProduct";
import NewProduct from "./components/Admin/NewProduct";
import ProductReviews from "./components/Admin/ProductReviews";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";
import UsersList from "./components/Admin/UsersList";
import UpdateUser from "./components/Admin/UpdateUser";

// All pages
import Newin from "./components/pages/Newin";
import Womens from "./components/pages/Womens";
import Accessories from "./components/pages/Accessories";
import Replicas from "./components/pages/Replicas";
import Ready from "./components/pages/ReadyToWear";
import UnStiched from "./components/pages/Unstiched";
import Aclothes from "./components/pages/AClothes";
import Beauty from "./components/pages/Beauty";
import VaslFeatured from "./components/pages/VaslFeatured";
import Bags from "./components/pages/Bags";
import Scarves from "./components/pages/Scarves";
import Perfumes from "./components/pages/Perfumes";
import Cosmetics from "./components/pages/Cosmetics";
import Kurtas from "./components/pages/Kurtas";
import Tracksuits from "./components/pages/Tracksuits";
import Abayas from "./components/pages/Abayas";

//AddOn Pages
import Contact from "./components/Contact/Contact";
import ExchangePolicy from "./components/AddOnPages/ExchangePolicy";
import FAQ from "./components/AddOnPages/FAQ";
import Payments from "./components/AddOnPages/Payments";

import EmailTemplate from "./components/pages/EmailTemplate";
import Checkorderdetails from "./components/Order/checkorderemaildetails";
import Checkemail from "./components/Order/checkordermail";
function App() {
  // const { user, isAuthenticated } = useSelector((state) => state.user);
  let history = useHistory();
  useEffect(() => {
    //ye font load krny k liye ha font use krna
    WebFont.load({
      google: {
        families: ["'Montserrat", "sans-serif;"],
        // families: ["Montserrat", "sans-serif"],
      },
    });
    store.dispatch(loadUser());
  }, []);

  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          {/* {isAuthenticated && <UserOptions user={user} />} */}
          <Route exact path="/" component={Home} />
          <Route exact path="/exp" component={Example} />
          <Route exact path="/loader" component={loader} />
          <Route exact path="/oneproduct/:id" component={ProductDetails} />
          <Route exact path="/products" component={Product} />
          <Route path="/products/:keyword" component={Product} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={loginsugnup} />
          <ProtectedRoute exact path="/accounts" component={Profile} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/FavouriteCart" component={FavouriteCart} />
          <Route exact path="/shipping" component={Shipping} />
          <Route exact path="/process/payment" component={Payment} />
          <Route exact path="/success" component={OrderSuccess} />
          <ProtectedRoute exact path="/orders" component={MyOrders} />
          {/* ADMIN_ROUTE */}
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/dashboard"
            component={Dashboard}
          />
          {/* ADMIN_ROUTE */}
          <ProtectedRoute
            isAdmin={true}
            
            exact
            path="/admin/products"
            component={ProductList}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/product"
            component={NewProduct}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/product/:id"
            component={updateProduct}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/order/:id"
            component={ProcessOrder}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/orders"
            component={OrderList}
          />
          <ProtectedRoute
            exact
            path="/admin/users"
            isAdmin={true}
            component={UsersList}
          />

          <ProtectedRoute
            exact
            path="/admin/user/:id"
            isAdmin={true}
            component={UpdateUser}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/reviews"
            component={ProductReviews}
          />
          <Route exact path="/order/confirm" component={ConfirmOrder} />

          <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
          <Route exact path="/check/order/" component={CheckDetails} />
          {/* <Route exact path="/search/order/details" component={Searchod} /> */}
          <Route exact path="/check/order/email" component={Checkemail} />
          <Route
            exact
            path="/check/order/email/:id"
            component={Checkorderdetails}
          />

          <ProtectedRoute
            exact
            path="/profile/update"
            component={UpdateProfile}
          />
          <ProtectedRoute
            exact
            path="/password/update"
            component={UpdatePassword}
          />
          <Route exact path="/forgot_password" component={ForgotPassword} />

          <Route
            exact
            path="/password/reset/:token"
            component={ResetPassword}
          />

          {/* ALL PAGES */}
          <Route exact path="/Newinn" component={Newin} />
          <Route exact path="/Womens" component={Womens} />
          <Route exact path="/Accessories" component={Accessories} />
          <Route exact path="/Replicas" component={Replicas} />
          <Route exact path="/ReadyToWear" component={Ready} />
          <Route exact path="/AClothes" component={Aclothes} />
          <Route exact path="/Unstiched" component={UnStiched} />
          <Route exact path="/Beauty" component={Beauty} />
          <Route exact path="/RuposhFeatured" component={VaslFeatured} />
          <Route exact path="/Bags" component={Bags} />
          <Route exact path="/Scarves" component={Scarves} />
          <Route exact path="/Perfumes" component={Perfumes} />
          <Route exact path="/Cosmetics" component={Cosmetics} />
          <Route exact path="/Kurtas" component={Kurtas} />
          <Route exact path="/Tracksuits" component={Tracksuits} />
          <Route exact path="/Abayas" component={Abayas} />

          {/*Add On pAges Routes*/}
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/ExchangePolicy" component={ExchangePolicy} />
          <Route exact path="/faqs" component={FAQ} />
          <Route exact path="/payments" component={Payments} />


          <Route exact path="/EmailTemplate" component={EmailTemplate} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
