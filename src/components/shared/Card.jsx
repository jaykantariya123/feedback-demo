import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  //conditional style
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "#000" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
