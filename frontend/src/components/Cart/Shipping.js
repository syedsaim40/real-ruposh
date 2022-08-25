import React, { Fragment, useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../../redux/action/cartAction";
// import MetaData from "../layout/MetaData";
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { State } from "country-state-city";
import EmailIcon from "@mui/icons-material/Email";
import { useAlert } from "react-alert";
import CheckoutSteps from "../Cart/CheckoutSteps";
import PersonIcon from "@mui/icons-material/Person";
const Shipping = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [name, setName] = useState(shippingInfo.name);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country] = useState("PK");
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);
  const [email, setemail] = useState(shippingInfo.email);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 11 || phoneNo.length > 11) {
      alert.error("Phone Number should be 11 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ name, address, city, state, pinCode, phoneNo, email })
    );
    history.push("/order/confirm");
  };

  return (
    <Fragment>
      {/* <MetaData title="Shipping Details" /> */}
      <CheckoutSteps activeStep={0} />
      <div className="shippingContainer">
        <div className="shippingBox">
          <div className="section_heading">
            <div className="homeHeading">
              <h2>Shipping Details</h2>
            </div>
          </div>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            {/* <div>
              <PersonIcon />
              <input
                type="text"
                placeholder="Enter Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div> */}
            <div>
              <PersonIcon />
              <input
                type="text"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <EmailIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="House number and street name"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <LocationCityIcon />
              <input
                type="text"
                placeholder="City/Town"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <TransferWithinAStationIcon />

              <select
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <PinDropIcon />
              <input
                type="number"
                placeholder="Postcode/ZIP"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="11"
              />
            </div>

            <input
              type="submit"
              value="Continue"
              className="shippingBtn btn_primary"
              disabled={state ? false : true}
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Shipping;
