import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const frame9870OptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ExpenseTrackingPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-[50px] items-center justify-end mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_1.svg"
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
        <div className="sm:h-[1104px] md:h-[1909px] h-[951px] max-w-[1120px] mx-auto md:px-5 relative w-full">
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-auto p-4 rounded-bl-md rounded-br-md shadow-bs2 w-[95%] sm:w-full">
            <SelectBox
              className="font-bold mb-[621px] mt-[31px] text-blue-A700_01 text-left text-lg w-[13%] sm:w-full"
              placeholderClassName="text-blue-A700_01"
              indicator={
                <Img
                  className="h-6 mr-[0] w-6"
                  src="images/img_arrowdown_blue_A701.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="Frame9870"
              options={frame9870OptionsList}
              isSearchable={false}
              placeholder="Filter & Sort"
              size="xs"
            />
          </div>
          <div className="absolute flex flex-col gap-[50px] h-max inset-[0] items-center justify-center m-auto w-full">
            <div className="bg-blue-A700_01 flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-md shadow-bs2 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[7px] ml-3 md:ml-[0] w-[94%] md:w-full">
                <div className="flex flex-col gap-[43px] items-start justify-start w-[30%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                    size="txtGilroySemiBold32"
                  >
                    Expense Tracking
                  </Text>
                  <div className="flex flex-row gap-[30px] items-center justify-start w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtGilroyMedium16WhiteA700"
                    >
                      Total Expense :
                    </Text>
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                      size="txtGilroyBold36"
                    >
                      $2145.00
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[13px] items-center justify-between w-[28%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-16 items-end justify-start">
                    <Text
                      className="mr-[3px] text-base text-white-A700"
                      size="txtGilroyMedium16WhiteA700"
                    >
                      30% from transfer
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtGilroyMedium16WhiteA700"
                    >
                      70% from salary
                    </Text>
                  </div>
                  <div className="!w-[131px] h-[132px] overflow-visible">
                    <CircularProgressbar
                      className="!w-[131px] h-[132px] overflow-visible"
                      value={70}
                      strokeWidth={18}
                      styles={{
                        trail: { strokeWidth: 18, stroke: "#ffffff67" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          transformOrigin: "center",
                          transform: "rotate(0deg)",
                          stroke: "#ffffff",
                        },
                      }}
                    ></CircularProgressbar>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end w-full">
              <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs2 w-full">
                <Input
                  name="FrameOne"
                  placeholder="Recent Transactions"
                  className="font-medium p-0 placeholder:text-blue_gray-900 text-left text-lg w-full"
                  wrapClassName="rounded-tl-md rounded-tr-md w-full"
                  color="blue_50"
                  size="xs"
                ></Input>
                <List
                  className="flex flex-col gap-6 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Lightbill
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14Bluegray400"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[801px] text-base text-red-700"
                        size="txtGilroySemiBold16Red700"
                      >
                        -$20.00
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Salary
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14Bluegray400"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[803px] text-base text-green-600"
                        size="txtGilroySemiBold16Green600"
                      >
                        +120.00
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright One"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-1 w-[96%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          House Rent
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14Bluegray400"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[803px] text-base text-green-600"
                        size="txtGilroySemiBold16Green600"
                      >
                        +120.00
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright Two"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[13px] items-center justify-start">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Loan, Interests
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14Bluegray400"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[803px] text-base text-green-600"
                        size="txtGilroySemiBold16Green600"
                      >
                        +120.00
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright Three"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14Bluegray400"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[738px] text-base text-green-600"
                        size="txtGilroySemiBold16Green600"
                      >
                        +120.00
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright Four"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-[5px] w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyRegular14Bluegray400"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[738px] text-base text-green-600"
                        size="txtGilroySemiBold16Green600"
                      >
                        +120.00
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright Five"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start pt-1 w-[96%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="text-base text-blue_gray-900 text-center"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-center text-sm"
                          size="txtGilroyRegular14Bluegray400"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[738px] text-base text-green-600 text-right"
                        size="txtGilroySemiBold16Green600"
                      >
                        +120.00
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright Six"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-base text-blue_gray-900 text-center"
                          size="txtGilroyMedium16Bluegray900"
                        >
                          Sent to Angelyn Weiner
                        </Text>
                        <Text
                          className="mt-1 text-blue_gray-400 text-center text-sm"
                          size="txtGilroyRegular14Bluegray400"
                        >
                          29 Jan, 06:32 pm
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[738px] text-base text-green-600 text-right"
                        size="txtGilroySemiBold16Green600"
                      >
                        +120.00
                      </Text>
                      <Img
                        className="h-6 md:ml-[0] ml-[23px] w-6"
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright Seven"
                      />
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseTrackingPage;
