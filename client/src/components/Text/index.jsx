import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyBold36: "font-bold font-gilroy",
  txtGilroySemiBold16WhiteA700: "font-gilroy font-semibold",
  txtGilroyMedium100: "font-gilroy font-medium",
  txtGilroySemiBold16Gray90002: "font-gilroy font-semibold",
  txtGilroyMedium18Red700: "font-gilroy font-medium",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroySemiBold24Black90001: "font-gilroy font-semibold",
  txtGilroySemiBold18Red700: "font-gilroy font-semibold",
  txtGilroyMedium16Gray900: "font-gilroy font-medium",
  txtGilroyRegular14Bluegray900: "font-gilroy font-normal",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtOpenSansMedium18: "font-medium font-opensans",
  txtGilroyMedium14Gray900: "font-gilroy font-medium",
  txtGilroySemiBold18Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Gray90003: "font-gilroy font-medium",
  txtOpenSansMedium16: "font-medium font-opensans",
  txtGilroyMedium18Black90001: "font-gilroy font-medium",
  txtGilroyBold28: "font-bold font-gilroy",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroySemiBold18Green600: "font-gilroy font-semibold",
  txtGilroySemiBold18Black900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtGilroySemiBold16Green600: "font-gilroy font-semibold",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroyMedium12BlueA70001: "font-gilroy font-medium",
  txtGilroyBold28Gray900: "font-bold font-gilroy",
  txtGilroyMedium24Bluegray400: "font-gilroy font-medium",
  txtOpenSansRomanRegular14: "font-normal font-opensans",
  txtGilroyMedium16BlueA70001: "font-gilroy font-medium",
  txtGilroyMedium14Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium12Green600: "font-gilroy font-medium",
  txtOpenSansMedium24: "font-medium font-opensans",
  txtOpenSansMedium20: "font-medium font-opensans",
  txtGilroySemiBold32Bluegray900: "font-gilroy font-semibold",
  txtGilroySemiBold18Gray900: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold28: "font-opensans font-semibold",
  txtGilroyMedium18Black900: "font-gilroy font-medium",
  txtGilroySemiBold16Red700: "font-gilroy font-semibold",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtOpenSansMedium24Black90001: "font-medium font-opensans",
  txtGilroyMedium18BlueA70001: "font-gilroy font-medium",
  txtGilroySemiBold16Bluegray200: "font-gilroy font-semibold",
  txtGilroySemiBold24Bluegray900: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray600: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray200: "font-gilroy font-medium",
  txtGilroySemiBold14Bluegray900: "font-gilroy font-semibold",
  txtGilroyRegular14Bluegray400: "font-gilroy font-normal",
  txtGilroySemiBold16BlueA70001: "font-gilroy font-semibold",
  txtGilroySemiBold12Green600: "font-gilroy font-semibold",
  txtGilroyMedium12WhiteA700: "font-gilroy font-medium",
  txtOpenSansMedium18Bluegray400: "font-medium font-opensans",
  txtGilroySemiBold12: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtMontserratMedium14: "font-medium font-montserrat",
  txtGilroyBold36Bluegray900: "font-bold font-gilroy",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium20BlueA70001: "font-gilroy font-medium",
  txtGilroyRegular12: "font-gilroy font-normal",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtOpenSansRomanSemiBold14: "font-opensans font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtGilroySemiBold16Blue800: "font-gilroy font-semibold",
  txtGilroySemiBold16Bluegray900: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16BlueA70001: "font-opensans font-semibold",
  txtGilroyMedium14BlueA70001: "font-gilroy font-medium",
  txtGilroyMedium16WhiteA700: "font-gilroy font-medium",
  txtGilroySemiBold18Gray90001: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
