import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[3px]" };
const variants = {
  fill: {
    gray_100: "bg-gray-100 text-green-600",
    gray_50_04: "bg-gray-50_04 text-amber-500",
    blue_gray_300_87: "bg-blue_gray-300_87",
    white_A700: "bg-white-A700 text-blue_gray-400",
    blue_A700_01: "bg-blue-A700_01 text-white-A700",
    blue_gray_100: "bg-blue_gray-100 text-black-900_01",
    gray_50: "bg-gray-50 text-blue-A700_01",
    blue_50: "bg-blue-50 text-blue-A700_01",
  },
  outline: {
    blue_gray_400: "border border-blue_gray-400 border-solid text-black-900_01",
    blue_A700_01: "border border-blue-A700_01 border-solid text-blue-A700_01",
    blue_gray_100: "border border-blue_gray-100 border-solid",
  },
};
const sizes = { xs: "p-1", sm: "pl-1.5 py-1.5", md: "p-2", lg: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_100",
    "gray_50_04",
    "blue_gray_300_87",
    "white_A700",
    "blue_A700_01",
    "blue_gray_100",
    "gray_50",
    "blue_50",
    "blue_gray_400",
  ]),
};

export { Button };
