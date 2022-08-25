import React, { Fragment, useEffect, useState } from "react";

import './Contact.css'
import { useSelector, useDispatch } from "react-redux";
import Loader1 from "../../components/Layout/Loader/Loader";
import MetaData from "../../components/Layout/Metadata";
import {

    contactuser,
    CLEAR_Errors,
    
  } from "../../redux/action/useraction";
  import { useAlert } from "react-alert";
import { CONTACT_RESET } from "../../redux/constant/userconstant";
function Contact() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, iscontact } = useSelector((state) => state.contactuser);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const contactSubmitHandler = (e) => {
      e.preventDefault();

      const myForm = new FormData();

      myForm.set("name", name);

      myForm.set("email", email);
      myForm.set("phone", phone);
      myForm.set("message", message);


console.log(myForm)
      dispatch(contactuser(myForm));
      setname("")
      setemail("")
      setphone("")
      setmessage("")
  };

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, });

      if (error) {
          alert.error(error);
          dispatch(CLEAR_Errors());
      }

      if (iscontact) {
        alert.success("Message Send Successfully");
        dispatch({
          type: CONTACT_RESET,
        });
      }

       
    }, [dispatch, iscontact,alert, error,]);
  return (
    <Fragment>
      <MetaData title={"Contact-RUPOSH"} />
      <div className='contactPage'>
        <div className='contactHolder grid'>
          <div className='contactForm'>
            <h1>Send us a message</h1>
            {loading === true ? (<Loader1 />) : (

            <form onSubmit={contactSubmitHandler}>
              <div className='formGroup'>
                <label for="name">Your Name <span>(required)</span></label>
                <input id='name' type={"text"} required value={name} onChange={(e) => setname(e.target.value)}/>
              </div>
              <div className='formGroup'>
                <label for='email'>Your Email <span>(required)</span></label>
                <input id='email' type={"text"} required value={email} onChange={(e) => setemail(e.target.value)}/>
              </div>
              <div className='formGroup'>
                <label for="phoneNo">Your Phone Number</label>
                <input id='phoneNo' type={"text"} value={phone} onChange={(e) => setphone(e.target.value)}/>
              </div>
              <div className='formGroup'>
                <label for="msg">Your Message</label>
                <textarea id="msg" col={'30'} rows={'3'} value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
              </div>
              <button className='btn_primary'>send</button>
            </form>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact