import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const OrderTrackingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-start mx-auto pb-[199px] w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_35X162.svg"
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
                    src="images/img_search_black_900.svg"
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
                    src="images/img_arrowdown.svg"
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
                    src="images/img_arrowdown.svg"
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
        <div className="flex flex-col font-opensans gap-[30px] items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs1 w-full">
            <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
              <Img
                className="h-[180px] md:h-auto object-cover rounded w-[180px]"
                src="images/img_pngwing1.png"
                alt="pngwingOne"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start w-[84%] md:w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtOpenSansMedium24"
                  >
                    Samsung Galaxy M12 | 6000 mAh with 8nm Processor
                  </Text>
                </div>
                <Text
                  className="mt-5 text-blue_gray-400 text-xl"
                  size="txtOpenSansMedium20"
                >
                  (Blue,6GB RAM, 128GB Storage)
                </Text>
                <div className="flex flex-row items-center justify-start mt-[18px] w-[10%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtOpenSansMedium18"
                  >
                    Color:
                  </Text>
                  <Text
                    className="ml-1 text-blue_gray-400 text-lg"
                    size="txtOpenSansMedium18Bluegray400"
                  >
                    Blue
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[16%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                    size="txtOpenSansMedium24"
                  >
                    <span className="text-colors2 font-opensans text-left font-semibold">
                      $
                    </span>
                    <span className="text-colors3 font-opensans text-left font-semibold">
                      555.29
                    </span>
                  </Text>
                  <Text
                    className="line-through mt-[11px] text-base text-blue_gray-400"
                    size="txtOpenSansMedium16"
                  >
                    <span className="text-colors4 font-opensans text-left font-semibold">
                      $
                    </span>
                    <span className="text-colors4 font-opensans text-left font-semibold">
                      55.99
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-gilroy gap-[29px] items-start justify-between w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-[30px] justify-start p-[29px] sm:px-5 rounded-md shadow-bs1 w-[68%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                size="txtGilroyMedium24"
              >
                Track your order
              </Text>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-start md:ml-[0] ml-[78px] mr-[405px] w-2/5 md:w-full">
                <div className="md:h-[322px] h-[340px] relative w-[8%] md:w-full">
                  <Line className="absolute bg-blue_gray-100 h-[322px] inset-[0] justify-center m-auto w-1" />
                  <Button
                    className="absolute flex h-6 inset-x-[0] items-center justify-center mx-auto outline outline-[1.5px] outline-gray-50 rounded-[50%] top-[0] w-6"
                    shape="circle"
                    color="blue_A700_01"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  </Button>
                  <div className="absolute flex flex-col md:gap-10 gap-[86px] h-max inset-[0] items-center justify-center m-auto w-[84%]">
                    <div className="bg-gray-50 h-5 outline outline-[1.5px] outline-blue_gray-100 rounded-[50%] w-5"></div>
                    <div className="bg-gray-50 h-5 outline outline-[1.5px] outline-blue_gray-100 rounded-[50%] w-5"></div>
                  </div>
                  <div className="absolute bg-gray-50 bottom-[0] h-5 inset-x-[0] mx-auto outline outline-[1.5px] outline-blue_gray-100 rounded-[50%] w-5"></div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-base text-blue-800"
                    size="txtGilroySemiBold16Blue800"
                  >
                    Order placed
                  </Text>
                  <Text
                    className="mt-[87px] text-base text-blue_gray-200"
                    size="txtGilroySemiBold16Bluegray200"
                  >
                    Orde packed at final delivery station
                  </Text>
                  <Text
                    className="mt-[85px] text-base text-blue_gray-200"
                    size="txtGilroySemiBold16Bluegray200"
                  >
                    Order shipped
                  </Text>
                  <Text
                    className="mt-[85px] text-base text-blue_gray-200"
                    size="txtGilroySemiBold16Bluegray200"
                  >
                    Order Delivered
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[31%] md:w-full">
              <div className="bg-white-A700 flex flex-col gap-[37px] items-start justify-start p-4 rounded-md shadow-bs1 w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start ml-3.5 md:ml-[0] w-[93%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroyMedium24"
                    >
                      Order Summary
                    </Text>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-7 items-center justify-end w-full">
                    <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Price (2 items)
                      </Text>
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtGilroyMedium18Black90001"
                      >
                        $1110.58
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-400 text-lg"
                        size="txtGilroyMedium18"
                      >
                        Delivery Charges
                      </Text>
                      <Text
                        className="text-black-900_01 text-lg"
                        size="txtGilroyMedium18Black90001"
                      >
                        $10
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroySemiBold24Black90001"
                    >
                      Total Payment
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtGilroySemiBold24Black90001"
                    >
                      $1120.58
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[29px] items-start justify-start mb-1.5 ml-3.5 md:ml-[0]">
                  <Text
                    className="text-blue-A700_01 text-lg"
                    size="txtGilroyMedium18BlueA70001"
                  >
                    Cancel this order
                  </Text>
                  <Text
                    className="text-blue-A700_01 text-lg"
                    size="txtGilroyMedium18BlueA70001"
                  >
                    View order destails
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold rounded text-base text-center w-[386px]"
                shape="round"
                color="blue_A700_01"
                size="lg"
                variant="fill"
              >
                Continue shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTrackingPage;
