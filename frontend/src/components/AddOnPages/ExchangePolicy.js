import React, { Fragment,useEffect } from 'react'

import "./ExchangePolicy.css"

function ExchangePolicy() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, });
   
    }, [])
    return (
        <Fragment>
            <div className='pageWrapper'>
                <div className='pageHolder'>
                    <div className='pageHeading'>
                        <h3>Exchange & Returns</h3>
                    </div>
                    <div className='pageContent'>
                        <div className='pageBox'>
                            <h3>EXCHANGE POLICY</h3>
                            <p>At Ruposh, our customers are our first priority. Our customer care team will facilitate you on each step if you wish to exchange your purchased item. The help you need is just a click away!</p>
                        </div>
                        <div className='pageBox'>
                            <h4>Domestic Orders:</h4>
                            <h5>Valid Days of Exchange:</h5>
                            <p>Any article purchased online can be exchanged within 3 days, once the article has been delivered, given that the customer has proof of purchase. For customers who opt for online exchange process, with a valid reason for exchange, customer have to pay courier charges for exchange pickup.</p>
                        </div>
                        <div className='pageBox'>
                            <h5>Proof of Purchase:</h5>
                            <p>This includes either a receipt or the online order confirmation email.</p>
                        </div>
                        <div className='pageBox'>
                            <h5>Conditions Qualified for Exchange:</h5>
                            <p>Articles are qualified for change only if they are unused, all tags are intact, packing is in its original condition and original invoice is present. Also, state a valid reason for requesting an exchange, such as if the article is defected, in wrong size, or incorrect. In case of home article exchange, it should be in Ruposh’s original home packing. Similarly, with articles that are delivered in boxes such as the Unstitched Women’s collection, Menswear and semi-formal pieces that are delivered in garment bags must be returned with their original packaging.</p>
                        </div>
                        <div className='pageBox'>
                            <h5>Process of Online Exchange:</h5>
                            <p>It usually takes 7-10 days to complete the online exchange process after it has been verified. f customers are dissatisfied with the item or have ordered and received the size that won’t fit them then they would be asked to drop off the purchased item at a given location. However, if the item is defected or incorrect then the article will be picked up from the customer’s doorstep.</p>
                        </div>
                        <div className='pageBox'>
                            <h5>Items not Allowed for Exchange:</h5>
                            <p>Articles purchased on discount or on sale are not qualified for exchange. Similarly, Fragrances, Cosmetics and Intimate apparel cannot be exchanged. Note: For sale orders, exchanges will only be provided for valid reasons and exchange time will also take longer than usual. For further assistance, you can contact our customer service department by emailing us at <span className='redColor'>wecare@ruposh.pk</span> or you can call us at <span className='redColor'>+92 303-702222-9</span>. Provide all the required information to our representative and if all the conditions of the exchange are met, we will schedule the pick-up from your doorstep.</p>
                        </div>
                        <div className='pageBox'>
                            <h5>NOTE:</h5>
                            <p className='redColor italic'>Please take pictures of the package and invoice before opening your order and keep them with you unless you find your complete order intact. It will be helpful to resolve your complaints timely, in case you receive an incorrect or damaged article.</p>
                        </div>
                        <div className='pageBox'>
                            <h3>Return POLICY</h3>
                            <p>Ruposh does not offer a return policy. However, we can guide you in requesting an exchange for your article. Please refer to the above-mentioned Exchange policy for this.</p>
                        </div>
                        <div className='pageBox'>
                            <h5>Refund Policy:</h5>
                            <p>Refunds are not in cash - the client will be issued a coupon of same value valid for Online Store ONLY, which can be used immediately or in the future. Please study your coupon carefully for further details.</p>
                        </div>
                        <div className='pageBox'>
                            <h3>ORDER CANCELLATION</h3>
                            <p>Customers can cancel orders at any time before the order has been processed.</p>
                        </div>
                        <div className='pageBox'>
                            <p>Once the order has been shipped, you will receive a shipping confirmation via email and an SMS with your COD amount as well as order tracking ID. As soon as the product has been delivered, our above-mentioned exchange policy will be applicable to your order.</p>
                        </div>
                        <div className='pageBox'>
                            <p>Ruposh holds the authority to cancel any order in cases, such as; the item is out of stock, pricing errors, or the credit card payment declined by the issuing financial institution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ExchangePolicy