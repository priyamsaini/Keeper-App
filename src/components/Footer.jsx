import React from "react";

function Footer(){
    const currntYear = new Date().getFullYear();
    return (
    <footer>
        <p>Copyright @ {currntYear} </p>
    </footer>
    );
}

export default Footer;