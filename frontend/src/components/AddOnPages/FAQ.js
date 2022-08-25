import React, { Fragment } from 'react'



import Collapsible from "react-collapsible";

import './FAQ.css';

function FAQ() {
    window.scrollTo({top: 0, left: 0, });

    return (

        <Fragment>
            <div className='faqWrapper'>
                <div className='pageHolder'>
                    <div className='pageHeading'>
                        <h3>FAQs</h3>
                    </div>
                    <div className='faqHolder'>
                        <Collapsible
                            trigger="My Account"
                            className="accordian_footer hide_footer"
                        >
                            <div className="mf_box">
                                <ul className='unstyled ques_list'>
                                    <li>
                                        <span>1. Is an account necessary for placing an order?</span>
                                        <p>Although you can order as a guest, having a Ruposh account will enhance your shopping experience by keeping you up to date with newsletters, storing your billing/shipping information and ensuring faster checkouts.</p>
                                    </li>
                                    <li>
                                        <span>2. How do I make an account?</span>
                                        <p>To create your very own Ruposh Online Account, follow these simple instructions:<br />Click on the ‘Sign In’ button on the top right-hand corner of the home page Click on the ‘Create an Account’ button at the bottom of the screen</p>
                                    </li>
                                    <li>
                                        <span>3. What if I forget my password?</span>
                                        <p>In the event of a forgotten password, simply:<br />Click on ‘Forgot Password’ on the sign in page Enter your email address Click on the link sent to you in your email address Enter your new password</p>
                                    </li>
                                    <li>
                                        <span>4. Where can I view my order history?</span>
                                        <p>Your order history will be available on your Dashboard on your Account page</p>
                                    </li>
                                </ul>
                            </div>
                        </Collapsible>
                        <Collapsible
                            trigger="Order"
                            className="accordian_footer hide_footer"
                        >
                            <div className="mf_box">
                                <ul className='unstyled ques_list'>
                                    <li>
                                        <span>1. Is an account necessary for placing an order?</span>
                                        <p>Once you have added all your desired items to your shopping cart, follow these instructions:<br /></p>

                                        <p className='redColor'> To order as a guest :</p>

                                        <p>
                                            . Click on the ‘Shopping Bag’ button and proceed to Checkout<br />
                                            . Enter all your required shipping and billing information<br />
                                            . Click on ‘’Continue to Payment Method’ and choose your method<br />
                                            . Click on ‘Confirm Order’ and check your email for a Sales Order Summary<br />
                                        </p>
                                        <p className='redColor'>To order with a Ruposh account :</p>
                                        <p>
                                            . Click on the ‘Shopping Bag’ button and proceed to Checkout<br />
                                            . Enter all your required shipping and billing information<br />
                                            . Click on ‘’Continue to Payment Method’ and choose your method<br />
                                            . Click on ‘Complete Order’ and check your email for a Sales Order Summary
                                        </p>
                                    </li>
                                    <li>
                                        <span>2. What if I don’t get a Sales Order Summary?</span>
                                        <p>A Sales Order Summary is essentially a soft receipt that should be emailed to you within an hour of placing your order. If you don’t get one in your inbox, check your junk/spam folder and if it still isn’t there, call Customer Service at +92 303702222-9 to confirm your order.</p>
                                    </li>
                                    <li>
                                        <span>3. What if I found any discrepancy in my order/product?</span>
                                        <p>.First, we’ll try to arrange the same article for you depending upon the availability on the website, otherwise.<br />
                                            .In case of article unavailability, voucher of paid amount will be issued valid for online store only, which can be used instantly or in the future.</p>
                                    </li>
                                    <li>
                                        <span>4. Does adding an item to the shopping cart reserve it?</span>
                                        <p>No, an item will only be reserved for you after you have confirmed your order at checkout.</p>
                                    </li>
                                    <li>
                                        <span>5. Does adding an item to the shopping cart reserve it?</span>
                                        <p>Payment Pending Authorization: Your order has been logged and we are waiting for authorization from the payment gateway.<br />
                                            . Payment Authorized, Order Processing: Authorization has been received from the payment gateway and your order is being processed.<br />
                                            . Order Shipped: Your order has been shipped by the seller and is on its way.<br />
                                            . Order complete : Shipment received, and transaction completed.<br />
                                            . Order Cancelled: The order was cancelled.
                                        </p>
                                    </li>
                                    <li>
                                        <span>6. Do you take orders over phone call or through messengers?</span>
                                        <p>Yes, you can place your order by calling us at +92 303 702222-9 and messengers too, Please ensure to provide the article number, color and size of the product you wish to purchase.</p>
                                    </li>
                                    <li>
                                        <span>7. How Will I know the Status of my order?</span>
                                        <p>You can contact our customer service to know the status of your order. Helpline +92 303 702222-9.</p>
                                    </li>
                                </ul>
                            </div>
                        </Collapsible>
                        <Collapsible
                            trigger="Payments"
                            className="accordian_footer hide_footer"
                        >
                            <div className="mf_box">
                                <ul className='unstyled ques_list'>
                                    <li>
                                        <span>1. What payment options do I have?</span>
                                        <p>- Cash on Delivery <strong> – Local Orders Only</strong></p>
                                        <p>- Jazzcash <strong> – Local Online Paymenet for Orders Only</strong></p>
                                        <p>- Easypaisa <strong> – Local Online Paymenet for Orders Only</strong></p>
                                        <p>- Bank Deposit <strong> – Local & International Orders</strong></p>
                                    </li>
                                    <li>
                                        <span>2. Is it safe to use my credit/debit card to make payments?</span>
                                        <p>All payment information on our website is processed on a fully encrypted and secure platform and kept confidential with only authorized personnel having access to your information.</p>
                                    </li>
                                    <li>
                                        <span>3. How can I pay for my order via Bank Deposit (IBFT)?</span>
                                        <p>On checkout select the “Bank Deposit” option and place your order. Transfer the total amount including Shipping charges (if applicable) to our official Bank Account within 24 hours of order placement. Share the screenshot of the transaction along with your account details and order number against which the payment has been made to our designated WhatsApp number or Email ID. The order will be processed after verification. For further details, view the Terms & Conditions page.</p>
                                    </li>
                                    <li>
                                        <span>4. Can the billing address differ from the shipping address?</span>
                                        <p>For Cash on Delivery orders, billing address is not required. We only require your shipping address which will be the address you want your order delivered to. </p>
                                    </li>
                                    <li>
                                        <span>5. If an article is out of stock, how can I be informed about its re-arrival?</span>
                                        <p>For out of stock items, please enter your email address in the given text box to get an email about article availability. Alternatively, please call our Customer Support helpline, and we will be more than happy to try and arrange the article you require.</p>
                                    </li>
                                    <li>
                                        <span>7. Is there any form of advance payment required for COD?</span>
                                        <p>No, you only need to pay the full amount in cash once your parcel is delivered to you.</p>
                                    </li>
                                </ul>
                            </div>
                        </Collapsible>
                        <Collapsible
                            trigger="Delivery"
                            className="accordian_footer hide_footer"
                        >
                            <div className="mf_box">
                                <ul className='unstyled ques_list'>
                                    <li>
                                        <span>1. What is the delivery time?</span>
                                        <p>Local order delivery can take between 5 - 7 working days,depending on the size and availability of the product. Orders are processed within 24 hours and are generally scheduled for delivery on the next working day. Timely delivery is subject to availability of stocks and payment authorizations. In certain cases, we might request for some form of payment verification or source to process the order.</p>
                                        <p className='redColor'>During SALE delivery time is upto 15 working days.</p>
                                    </li>
                                    <li>
                                        <span>2. What are the delivery charges for local and International orders?</span>
                                        <p>Ruposh provides free shipping nationwide for orders worth Rs. 3000 </p>
                                        <p className='redColor'>During SALE delivery time is upto 15 working days.</p>
                                    </li>
                                    <li>
                                        <span>3. Does the price of the order include shipping charges?</span>
                                        <p>For all local & international orders, shipping charges are mentioned separately as part of the order on the check-out page. Final amount charged will include shipping charges.</p>
                                    </li>
                                    <li>
                                        <span>4. How do I check the delivery status?</span>
                                        <p>After the order confirmation log into Ruposh then clich on profile then click Order History, where you can also check your order status.</p>
                                    </li>
                                    <li>
                                        <p className='redColor'>Note: Please do not accept the parcel if it's already opened or tempered in any way.<br />
                                        Kindly only accept parcels that are packed in Ruposh branded flyers.</p>
                                    </li>
                                </ul>
                            </div>
                        </Collapsible>
                        <Collapsible
                            trigger="Security"
                            className="accordian_footer hide_footer"
                        >
                            <div className="mf_box">
                                <ul className='unstyled ques_list'>
                                    <li>
                                        <span>1. Is my personal information kept secured?</span>
                                        <p>Yes, you can place an order with us without any hesitation all your personal informations are secured with us. We at Ruposh never compromise on the security of the personal details of customers.</p>
                                    </li>
                                    <li>
                                        <span>2. What are cookies and why should I know about them?</span>
                                        <p>A cookie is a small text file that is saved to, and, during subsequent visits, retrieved from your computer or mobile device. We use cookies to enhance and simplify your visit. We do not use cookies to store personal information or to disclose information to third parties but rather to store your choice of start page and to store your details. Session cookies are used when you apply product filtration and to check if you are logged in. You can easily erase cookies from your computer or mobile device using your browser.</p>
                                    </li>
                                    <li>
                                        <p className='redColor'>Note: Please do not accept the parcel if it's already opened or tempered in any way.<br />
                                        Kindly only accept parcels that are packed in Ruposh branded flyers.</p>
                                    </li>
                                </ul>
                            </div>
                        </Collapsible>
                        <Collapsible
                            trigger="Exchanges"
                            className="accordian_footer hide_footer"
                        >
                            <div className="mf_box">
                                <ul className='unstyled ques_list'>
                                    <li>
                                        <span>1. Can I exchange my order?</span>
                                        <p>For all local orders, yes, you can always exchange your order within 30 days of the purchase, granted you have the original invoice and article is not being used.</p>
                                        <p><strong>Note: </strong><b className='redColor'> Sale articles are neither exchangeable nor refundable.</b></p>
                                    </li>
                                    <li>
                                        <span>2. Are there any additional charges on exchange?</span>
                                        <p>We will not charge for any exchange orders if the article(s) delivered to you was damaged or incorrect. If the customer wishes to exchange the article, even if the order was correct, then the customer will bear the expense of sending us the article(s).</p>
                                    </li>
                                    <li>
                                        <span>3. How long will the exchange process take?</span>
                                        <p>It usually takes 7-10 days to complete the online exchange process.</p>
                                    </li>
                                    <li>
                                        <span>4. What if my order amount changes due to exchange product?</span>
                                        <p>If there is a change in your order amount due to the exchange, in cases were the exchange order value is below original order value, the balance amount will be provided to you by hand in Cash at the time of delivery. In cases where the exchange order value is above original order value, you can pay in cash at the time of delivery. To make a partial exchange, call customer service at ++92 303 702222-9. and specify the articles you wish to exchange and your reasons for wanting to do so.</p>
                                    </li>
                                    <li>
                                        <span>5. Which articles are not exchangeable?</span>
                                        <p>Fragrances, Cosmetics and Sale articles do not qualify for exchange.</p>
                                    </li>
                                </ul>
                            </div>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FAQ