import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Hourglass({ color, size, className, style }) {
  return (
    <div className={`lds-hourglass ${className}`} style={{ ...style }}>
      <div
        className="lds-hourglass-after"
        style={{ background: color, borderWidth: size, borderHeight: size }}
      ></div>
    </div>
  );
}

Hourglass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
};

Hourglass.defaultProps = {
  color: "#7f58af",
  className: "",
  size: 32,
  style: {},
};
