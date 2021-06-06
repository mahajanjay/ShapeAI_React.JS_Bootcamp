import React from "react";
import "./styles.css";

 function Footer() {
   var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>  
  );
}

export default Footer;