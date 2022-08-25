import React from "react";
import { useAlert } from "react-alert";
import "./Footer.css";
import { Link } from "react-router-dom";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from '@mui/icons-material/Send';
import jazzcash from "../../../images/jazzcash.png";
import cod from "../../../images/cod.png";
import { useSelector, useDispatch } from "react-redux";
import Collapsible from "react-collapsible";
import {

  newsletter,
  CLEAR_Errors,

} from "../../../redux/action/useraction";
import { NEWSLETTER_RESET } from "../../../redux/constant/userconstant";
import { useEffect } from "react";
import { useState } from "react";
const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

const Footer = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, isnews } = useSelector((state) => state.newsletter);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const newsletterSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);



    dispatch(newsletter(myForm));
    setname("")
    setemail("")

  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_Errors());
    }

    if (isnews) {
      alert.success("Thanks for Subscribing us.");
      dispatch({
        type: NEWSLETTER_RESET,
      });
    }


  }, [dispatch, isnews, alert, error,]);

  return (
    <footer id="footer">
      <Collapsible
        trigger="Get in Touch"
        className="accordian_footer hide_footer"
      >
        <div className="mf_box">
          <address>
            RUPOSH Wearhouse 2-Km, Main G.T Road, Off to Wireless Colony Besides
            University of Engineering and Technology, Lahore.
          </address>
          {/* <Link to="/">
            <span>vasllclothing@gmail.com</span>
          </Link> */}
          <div className="mail_link">
            <MailOutlineIcon />
            <ButtonMailto
              label="ruposhonline@gmail.com"
              mailto="mailto:ruposhonline@gmail.com"
            />
          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
            <span>+92 320-9455-811-</span>
          </div>
        </div>
      </Collapsible>
      <Collapsible
        trigger="Customer Care"
        className="accordian_footer hide_footer"
      >
        <div className="mf_box">
          <ul className="unstyled services_list">
            <li>
              <Link to="/ExchangePolicy">Exchange & Returns</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/payments">Payments</Link>
            </li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible
        trigger="Information"
        className="accordian_footer hide_footer"
      >
        <div className="mf_box">
          <ul className="unstyled services_list">
            <li>
              <Link to="/login">About Us</Link>
            </li>
            <li>
              <Link to="/login">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/login">Store Locator</Link>
            </li>
            <li>
              <Link to="/login">Fabric Glossary</Link>
            </li>
            <li>
              <Link to="/orders">Wholesale</Link>
            </li>
            <li>
              <Link to="/orders">Blogs</Link>
            </li>
          </ul>
        </div>
      </Collapsible>
      <Collapsible trigger="Join Us" className="accordian_footer hide_footer">
        <div className="mf_box">
          <div className="mail_link">
            <MailOutlineIcon />
            <ButtonMailto
              label="ruposhonline@gmail.com"
              mailto="mailto:ruposhonline@gmail.com"
            />
          </div>
          <div className="mail_link">
            <LocalPhoneIcon />

          </div>
          <ul className="social_icons unstyled">
            <li className="fb_icon">
              <Link>
                <FacebookIcon />
              </Link>
            </li>
            <li className="insta_icon">
              <Link>
                <InstagramIcon />
              </Link>
            </li>
            <li className="yt_icon">
              <Link>
                <YouTubeIcon />
              </Link>
            </li>
          </ul>
        </div>
      </Collapsible>
      <div className="mid_footer">
        <div className="mf_box">
          <h3>Get in Touch</h3>
          <address>
            RUPOSH Wearhouse 2-Km, Main G.T Road, Off to Wireless Colony Besides
            University of Engineering and Technology, Lahore.
          </address>
          {/* <Link to="/">
            <span>vasllclothing@gmail.com</span>
          </Link> */}
          <div className="mail_link">
            <MailOutlineIcon />
            <ButtonMailto
              label="ruposhonline@gmail.com"
              mailto="mailto:ruposhonline@gmail.com"
            />
          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
            <span> <a href="tel:+923037022229">+92 303-702-2229</a></span>
        

          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
          
            <span> <a href="tel:+923209455811">+92 320-9455-811</a></span>

          </div>
       
        </div>
        <div className="mf_box">
          <h3>Customer Care</h3>
          <ul className="unstyled services_list">
            <li>
              <Link to="/ExchangePolicy">Exchange & Returns</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/payments">Payments</Link>
            </li>
          </ul>
        </div>
        <div className="mf_box">
          <h3>Join Us</h3>
          <div className="mail_link">
            <MailOutlineIcon />
            <ButtonMailto
              label="ruposhonline@gmail.com"
              mailto="mailto:ruposhonline@gmail.com"
            />
          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
            <span> <a href="tel:+923037022229">+92 303-702-2229</a></span>

          </div>
          <div className="mail_link">
            <LocalPhoneIcon />
            <span> <a href="tel:+923209455811">+92 320-9455-811</a></span>

          </div>
        
          <ul className="social_icons unstyled">
            <li className="fb_icon">
              <Link>
                <FacebookIcon />
              </Link>
            </li>
            <li className="insta_icon">
              <Link>
                <InstagramIcon />
              </Link>
            </li>
            <li className="yt_icon">
              <Link>
                <YouTubeIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mf_box">
          <h3>Newsletter Signup</h3>
          <ul className="unstyled services_list">
            <li>
              <p>Subscribe to our Newsletter for Exclusive Updates</p>
            </li>
            <li>
            <form onSubmit={newsletterSubmitHandler} className="ruposh_subs">
                <input placeholder='Name' type={"text"} required value={name} onChange={(e) => setname(e.target.value)} />
                <input placeholder='Email' type={"email"} required value={email} onChange={(e) => setemail(e.target.value)} />
                
              
                    <button type='submit'  disabled={loading ? true : false}>
                      <span><SendIcon /></span>
                      Subscribe
                    </button>

               

              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom_footer">
        <span>Copyright © 2022 RUPOSH All Rights Reserved.</span>
        <img src={jazzcash} alt="jazzcash" />
        <img src={cod} alt="cod" />
      </div>
    </footer>
  );
};

export default Footer;
