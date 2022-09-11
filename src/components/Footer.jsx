import React from "react";

const Footer = ({ api }) => {
  return (
    <div className="footer">
      <img src="logobird.png" alt="javascript"></img>
      <a className="navbar-brand text-uppercase" href={api} target="_blanck">
        {api}
      </a>
      <img src="logo512.png" alt="react"></img>
    </div>
  );
};

export default Footer;
