import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";

import AutorenewIcon from '@mui/icons-material/Autorenew';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReplayIcon from '@mui/icons-material/Replay';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function Topfooter() {
    return (
        <div>
            <div className="top_footer">
                <div className="tf_box">
                    <Link to="/orders" className="tf_con">
                        <AutorenewIcon />
                        <span>Track your order</span>
                    </Link>
                </div>
                <div className="tf_box">
                    <div className="tf_con">
                        <AccessTimeIcon />
                        <span>Contact us 24 hours a day, 7 days a week</span>
                    </div>
                </div>
                <div className="tf_box">
                    <div className="tf_con">
                        <ReplayIcon />
                        <span>Simply return it within 30 days for an exchange</span>
                    </div>
                </div>
                <div className="tf_box">
                    <div className="tf_con">
                        <DirectionsCarIcon />
                        <span>Free Shipping on all orders worth Rs. 3000 & above</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topfooter