import React from "react";
import ReactDOM from "react-dom";

var dat = new Date();
function CurrentYear(){
    var Year= dat.getFullYear();
    return Year;
}

function Footer(){
    return <footer>
        <p>Copyright {CurrentYear()}</p>
    </footer>
}
export default Footer;