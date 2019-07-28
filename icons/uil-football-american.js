import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilFootballAmerican = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21.84,5.56A4.08,4.08,0,0,0,20.7,3.31h0a4.08,4.08,0,0,0-2.25-1.14,13.65,13.65,0,0,0-5.29.24,1.17,1.17,0,0,0-.2.06,14.44,14.44,0,0,0-6.69,3.8A14.59,14.59,0,0,0,2.45,13c0,.06,0,.12-.05.19a13.7,13.7,0,0,0-.24,5.3A4.08,4.08,0,0,0,3.3,20.69h0a4.08,4.08,0,0,0,2.25,1.14A13.12,13.12,0,0,0,7.63,22a13.8,13.8,0,0,0,3.26-.41l.14,0a14.54,14.54,0,0,0,10.52-10.5c0-.06,0-.12.05-.19A13.7,13.7,0,0,0,21.84,5.56ZM16.37,4a10.44,10.44,0,0,1,1.76.14,1.68,1.68,0,0,1,.24.07L17,5.59,15.46,4.05C15.76,4,16.07,4,16.37,4ZM7.67,7.67a12.72,12.72,0,0,1,5.4-3.19L15.59,7,13.44,9.15l-.73-.73a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l.73.73L10.56,12l-.73-.73a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l.73.73L7,15.59,4.49,13.08A12.67,12.67,0,0,1,7.67,7.67ZM4.21,18.37a1.68,1.68,0,0,1-.07-.24A11.38,11.38,0,0,1,4,15.46L5.59,17Zm1.66,1.49a1.68,1.68,0,0,1-.24-.07L7,18.41,8.54,20A11.38,11.38,0,0,1,5.87,19.86Zm10.46-3.53a12.67,12.67,0,0,1-5.41,3.18L8.41,17l2.15-2.15.73.73a1,1,0,1,0,1.42-1.41L12,13.44,13.44,12l.73.73a1,1,0,0,0,.71.29,1,1,0,0,0,.7-1.71l-.73-.73L17,8.41l2.51,2.51A12.67,12.67,0,0,1,16.33,16.33ZM20,8.54,18.41,7l1.38-1.37a1.68,1.68,0,0,1,.07.24A11.38,11.38,0,0,1,20,8.54Z" />
    </Svg>
  );
};

UilFootballAmerican.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilFootballAmerican.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilFootballAmerican;