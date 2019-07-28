import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCloudMeatball = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M14.5,15.92h-.77l.39-.67a1,1,0,0,0-1.74-1l-.38.67-.38-.67a1,1,0,0,0-1.74,1l.39.67H9.5a1,1,0,0,0,0,2h.77l-.39.66a1,1,0,0,0,1.74,1l.38-.66.38.66a1,1,0,0,0,1.74-1l-.39-.66h.77a1,1,0,0,0,0-2Zm3.92-7.79A7,7,0,0,0,5.06,10,4,4,0,0,0,2,13.92a4,4,0,0,0,3.34,3.93l.16,0a1,1,0,0,0,.16-2,2,2,0,0,1-1.66-2,2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66,3,3,0,0,1,.62,5.72,1,1,0,1,0,.74,1.85,5,5,0,0,0-.45-9.41Z" />
    </Svg>
  );
};

UilCloudMeatball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilCloudMeatball.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilCloudMeatball;