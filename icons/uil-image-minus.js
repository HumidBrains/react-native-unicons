import React from "react";
import Svg, { Path } from "react-native-svg";
import PropTypes from "prop-types";

const UilImageMinus = props => {
  const { color, size, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <Path d="M21,3H17a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2ZM19,7a1,1,0,0,0-1,1v5.39l-1.48-1.48a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,10.12a2.79,2.79,0,0,0-3.93,0L4,11.61V6A1,1,0,0,1,5,5h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,6V18a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V8A1,1,0,0,0,19,7ZM5,19a1,1,0,0,1-1-1V14.43l2.9-2.89a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.45,19Zm13-1a1,1,0,0,1-.18.54L13.31,14l.7-.69a.77.77,0,0,1,1.1,0L18,16.22Z" />
    </Svg>
  );
};

UilImageMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UilImageMinus.defaultProps = {
  color: "currentColor",
  size: "24"
};

export default UilImageMinus;
