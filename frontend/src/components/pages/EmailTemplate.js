import React from 'react'
import logo from "../../images/logo.png";

function EmailTemplate() {
    return (
        <div id='eWrapper' style={{ display: "block", textAlign: "center", padding: "20px" }}>
            <div id='email' style={{ boxShadow: "0px 1px 38px -5px rgba(44, 39, 39, 0.75)", width: "600px", background: "#fff", margin: "0 auto", padding: "50px 20px" }}>
                <table border={0} cellSpacing="0" width="100%" style={{ width: "100%", padding: "0", border: "0px", borderCollapse: "collapse" }}>
                    <tr style={{ display: "block", background: "transparent", textAlign: "center" }}>
                        <td className='logo' style={{ display: "block", width: "100%", margin: "0 auto" }}>
                            <img width="200px" height="100px" alt='logo' src={logo} />
                        </td>
                    </tr>
                    <tr style={{display: "block", color: "#444", fontSize: "18px", fontWeight: 600, lineHeight: "22px", padding: "20px 5px" }}>
                        Thanks for shopping at RUPOSH
                    </tr>
                    <tr style={{ textAlign: "left", display: "block", color: "#444", fontSize: "14px", fontWeight: 400, lineHeight: "18px", padding: "20px 5px" }}>
                        Thanks for signing up for the <b>RUPOSH</b> particle system designer alpha. Please download the app by clicking the download button below.
                    </tr>
                    <tr style={{ textAlign: "left", display: "block", color: "#444", fontSize: "14px", fontWeight: 400, lineHeight: "18px", padding: "20px 5px" }}>
                        As part of the alpha, we'd really appreciate it if you could let
                        us know your thoughts about the app in our{" "}
                        <a href="https://www.ruposh.pk/help" style={{color: "red"}}>
                        ruposh.help
                        </a>{" "}
                        space.
                    </tr>
                    <tr style={{  textAlign: "left", display: "inline-block", color: "#444", fontSize: "10px", fontWeight: 400, lineHeight: "14px", padding: "20px 5px" }}>
                        <a href="https://www.ruposh.com/order" style={{textTransform: "uppercase", background: "#444", border: "1px solid #444", color: "#fff", padding: "10px 10px"}}>
                            View order
                        </a>{" "}
                    </tr>
                    <tr style={{  textAlign: "left", display: "inline-block", color: "#444", fontSize: "10px", fontWeight: 400, lineHeight: "14px", padding: "20px 10px" }}>
                        <a href="https://www.ruposh.com/order" style={{textTransform: "uppercase", background: "#fff", border: "1px solid #444", color: "#444", padding: "10px 5px"}}>
                            check status
                        </a>{" "}
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default EmailTemplate