import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilCloudMoonRain = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M8.5,14a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V15A1,1,0,0,0,8.5,14Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,8.5,19ZM21.7,7.07a1,1,0,0,0-.94-.26,3,3,0,0,1-.65.08,3,3,0,0,1-3-3,3.13,3.13,0,0,1,.08-.66,1,1,0,0,0-.26-.93A1,1,0,0,0,16,2a4.93,4.93,0,0,0-3.83,4.21A6.24,6.24,0,0,0,10.5,6a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,4,14.5,1.5,1.5,0,0,1,5.5,13a1,1,0,0,0,1-1,4,4,0,0,1,4-4,3.91,3.91,0,0,1,2.17.66l0,0a3.94,3.94,0,0,1,1.57,2,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,16,15.61a1,1,0,0,0,1.1,1.68A4.32,4.32,0,0,0,19,13.67a4.23,4.23,0,0,0-.49-2A4.94,4.94,0,0,0,22,8,1,1,0,0,0,21.7,7.07ZM17.11,9.89a2.72,2.72,0,0,1-.42,0A4.6,4.6,0,0,0,16,9.54a6.06,6.06,0,0,0-1.82-2.28c0-.12,0-.25,0-.37a3,3,0,0,1,1.05-2.28,5,5,0,0,0,4.23,4.23A3,3,0,0,1,17.11,9.89ZM12.5,13a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V14A1,1,0,0,0,12.5,13Zm0,5a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V19A1,1,0,0,0,12.5,18Z" />
    </Svg>
  );
};

UilCloudMoonRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilCloudMoonRain.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilCloudMoonRain;