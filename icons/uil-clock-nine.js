import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilClockNine = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M11,2A10,10,0,1,0,21,12,10,10,0,0,0,11,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,11,20ZM11,6a1,1,0,0,0-1,1v4H8a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1V7A1,1,0,0,0,11,6Z" />
    </Svg>
  );
};

UilClockNine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilClockNine.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilClockNine;
