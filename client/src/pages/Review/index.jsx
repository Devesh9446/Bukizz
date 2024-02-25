import React from "react";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ReviewPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <header className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs2 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_4.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 my-4 mx-3"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer h-5 my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="round"
                  size="md"
                ></Input>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="ml-[9px] text-base text-gray-900_03"
                      size="txtGilroyMedium16Gray90003"
                    >
                      Orders
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                  <Text
                    className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900_03"
                    size="txtGilroyMedium16Gray90003"
                  >
                    Categories
                  </Text>
                  <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                    <Text
                      className="ml-4 text-base text-gray-900_03"
                      size="txtGilroyMedium16Gray90003"
                    >
                      More
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown One"
                    />
                  </div>
                </div>
                <Img
                  className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                  src="images/img_cart.svg"
                  alt="cart"
                />
              </div>
            </div>
          </header>
        </div>
        <div className="flex flex-col items-center justify-end md:ml-[0] ml-[86px] mr-[388px] md:px-5 w-[966px] md:w-full">
          <div className="flex flex-col gap-[52px] items-center justify-start pb-[50px] w-[966px] md:w-full">
            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                size="txtGilroySemiBold32Bluegray900"
              >
                Reviews
              </Text>
              <Button
                className="cursor-pointer font-medium rounded-md text-base text-center w-[242px]"
                color="blue_A700_01"
                size="lg"
                variant="fill"
              >
                Write Review
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[15%] md:w-full">
                <Text
                  className="md:text-5xl text-[100px] text-amber-500"
                  size="txtGilroyMedium100"
                >
                  4.0
                </Text>
                <div className="flex flex-row items-center justify-evenly mt-4 w-[96%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_star.svg"
                    alt="star"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_star.svg"
                    alt="star One"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_star.svg"
                    alt="star Two"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_star.svg"
                    alt="star Three"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_star_24X24.svg"
                    alt="star Four"
                  />
                </div>
                <Text
                  className="mt-[23px] text-2xl md:text-[22px] text-blue_gray-400 sm:text-xl"
                  size="txtGilroyMedium24Bluegray400"
                >
                  2.2k reviews{" "}
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-end py-[5px] w-[78%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Excellent
                  </Text>
                  <Img
                    className="h-px"
                    src="images/img_group9980.svg"
                    alt="Group9980"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[27px] w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Good
                  </Text>
                  <Img
                    className="h-px"
                    src="images/img_group9980_bluegray_100.svg"
                    alt="Group9980 One"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-7 w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Average
                  </Text>
                  <Img
                    className="h-px"
                    src="images/img_group9980_bluegray_100_1X600.svg"
                    alt="Group9980 Two"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-between mt-[23px] w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Below Average
                  </Text>
                  <Img
                    className="h-px"
                    src="images/img_group9980_1X600.svg"
                    alt="Group9980 Three"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[21px] w-full">
                  <Text
                    className="text-black-900 text-lg"
                    size="txtGilroyMedium18Black900"
                  >
                    Poor
                  </Text>
                  <Img
                    className="h-px"
                    src="images/img_group9980_1.svg"
                    alt="Group9980 Four"
                  />
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-[50px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_ellipse31.png"
                    alt="EllipseThirtyOne"
                  />
                  <Text
                    className="ml-4 md:ml-[0] text-black-900 text-lg"
                    size="txtGilroySemiBold18Black900"
                  >
                    Jane Cooper
                  </Text>
                  <Img
                    className="h-8 md:ml-[0] ml-[757px] w-8"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-[24%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[43%]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Five"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star One"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Two"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Three"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star_24X24.svg"
                      alt="star Four"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14Bluegray400"
                  >
                    10 June 2022
                  </Text>
                </div>
                <Text
                  className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                  size="txtGilroyMedium14Bluegray400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  et consequat nisi id id aliquam quis. Scelerisque at morbi
                  arcu nibh faucibus duis facilisis nunc. Dolor non semper
                  elementum diam dictum faucibus. Tellus euismod in euismod
                  eget. Adipiscing sed vitae sagittis metus orci, platea.
                  Aliquam donec in nec dignissim nec pulvinar morbi.{" "}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_ellipse31.png"
                    alt="EllipseThirtyOne One"
                  />
                  <Text
                    className="ml-4 md:ml-[0] text-black-900 text-lg"
                    size="txtGilroySemiBold18Black900"
                  >
                    Jane Cooper
                  </Text>
                  <Img
                    className="h-8 md:ml-[0] ml-[757px] w-8"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu One"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-[24%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[43%]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Six"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star One One"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Two One"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Three One"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star_24X24.svg"
                      alt="star Four One"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14Bluegray400"
                  >
                    10 June 2022
                  </Text>
                </div>
                <Text
                  className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                  size="txtGilroyMedium14Bluegray400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  et consequat nisi id id aliquam quis. Scelerisque at morbi
                  arcu nibh faucibus duis facilisis nunc. Dolor non semper
                  elementum diam dictum faucibus. Tellus euismod in euismod
                  eget. Adipiscing sed vitae sagittis metus orci, platea.
                  Aliquam donec in nec dignissim nec pulvinar morbi.{" "}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-[15px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_ellipse31.png"
                    alt="EllipseThirtyOne Two"
                  />
                  <Text
                    className="ml-4 md:ml-[0] text-black-900 text-lg"
                    size="txtGilroySemiBold18Black900"
                  >
                    Jane Cooper
                  </Text>
                  <Img
                    className="h-8 md:ml-[0] ml-[757px] w-8"
                    src="images/img_overflowmenu.svg"
                    alt="overflowmenu Two"
                  />
                </div>
                <div className="flex flex-row gap-2 items-center justify-start pr-[3px] py-[3px] w-[24%] md:w-full">
                  <div className="flex flex-row items-center justify-evenly w-[43%]">
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Seven"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star One Two"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Two Two"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star.svg"
                      alt="star Three Two"
                    />
                    <Img
                      className="h-4 w-4"
                      src="images/img_star_24X24.svg"
                      alt="star Four Two"
                    />
                  </div>
                  <Text
                    className="text-blue_gray-400 text-sm"
                    size="txtGilroyRegular14Bluegray400"
                  >
                    10 June 2022
                  </Text>
                </div>
                <Text
                  className="text-blue_gray-400 text-sm"
                  size="txtGilroyMedium14Bluegray400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                  et consequat nisi id id aliquam quis. Scelerisque at morbi
                  arcu nibh faucibus duis facilisis nunc. Dolor non semper
                  elementum diam dictum faucibus. Tellus euismod in euismod
                  eget. Adipiscing sed vitae sagittis metus orci, platea.
                  Aliquam donec in nec dignissim nec pulvinar morbi.{" "}
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
