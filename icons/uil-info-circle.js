import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilInfoCircle = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M12,11a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V12A1,1,0,0,0,12,11Zm.38-3.92a1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1.15,1.15,0,0,0-.21.33A.84.84,0,0,0,11,8a1,1,0,0,0,.29.71,1.15,1.15,0,0,0,.33.21A1,1,0,0,0,13,8a1.05,1.05,0,0,0-.29-.71A1,1,0,0,0,12.38,7.08ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
    </Svg>
  );
};

UilInfoCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilInfoCircle.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilInfoCircle;
