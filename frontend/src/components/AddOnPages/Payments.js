import React, { Fragment } from 'react'

import "./Payments.css"


function Payments() {
    window.scrollTo({top: 0, left: 0, });

  return (
    <Fragment>
        <div className='pageWrapper paymentsWrapper'>
            <div className='pageHolder'>
                <div className='pageHeading'>
                    <h3>Payments</h3>
                </div>
                <div className='pageContent'>
                    <div className='pageBox'>
                        <h3>Cash On Delivery (Local Orders Only)</h3>
                        <p>COD is available for nationwide orders.</p>
                        <p>You will have to pay the required amount in cash at the time of the delivery to the courier, and will be provided with a receipt along with your purchase.</p>
                        <p>Please cross verify your order number received with your order confirmation email against the receipt.</p>
                        <p>There are no additional charges for Cash on Delivery orders.</p>
                    </div>
                    <div className='pageBox'>
                        <h3>Jazzcash</h3>
                        <p>You can pay through Jazzcash at the time of delivery as well as advanced after confirming your order. The jazzcash Accounts Numbers given at the paymenth method page as below.</p>
                        <h4>Jazzcash Accounts</h4>
                        <p>
                            <strong>
                                <span className='themeColor'>Muhammad Hamza: </span>
                                <span className='redColor'> 0302-702222-9</span>
                            </strong>
                        </p>
                    </div>
                    <div className='pageBox'>
                        <h3>Easypaisa</h3>
                        <p>You can pay through Easypaisa at the time of delivery as well as advanced after confirming your order. The Easypaisa Accounts Numbers given at the paymenth method page as below.</p>
                        <h4>Easypaisa Accounts</h4>
                        <p>
                            <strong>
                            <span className='themeColor'>Muhammad Hamza: </span>
                                <span className='redColor'> 0346-145462-0</span>
                            </strong>
                        </p>
                    </div>
                    <div className='pageBox'>
                        <h3>Bank Deposit</h3>
                        <p>You can pay the amount by depositing it in bank accounts at the time of delivery as well as advanced after confirming your order. The Bank Deposit Accounts Numbers given at the paymenth method page as below.</p>
                        <h4>Bank Deposit Accounts</h4>
                        <p>
                            <strong>
                                <span className='themeColor'>Syed Muhammad Saim: </span>
                                <span className='redColor'>HABIB BANK </span>
                                <span className='redColor'>(3520 - 2426 - 0464 - 0115)</span>
                            </strong>
                        </p>
                        <p>
                            <strong>
                                <span className='themeColor'>Muhammad Hamza: </span>
                                <span className='redColor'> ALLIED BANK</span>
                                <span className='redColor'> (1118-0010-0667-1709-0013)</span>
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Payments