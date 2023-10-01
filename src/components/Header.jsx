//rfce
import React from "react";
//impt
import PropTypes from "prop-types";

function Header({ text, bgColor, textcolor }) {
  //props      //props.text

  const HeaderStyles = {
    backgroundColor: bgColor,
    color: textcolor,
  };
  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "FeedBack UI",
  bgColor: "rgba(0,0,0,0.4)",
  textcolor: "#ff6a95",
};

Header.prototype = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textcolor: PropTypes.string,
};

export default Header;
