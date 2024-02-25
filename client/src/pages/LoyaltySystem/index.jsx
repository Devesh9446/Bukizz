import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LoyaltySystemPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_7.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search Items, Customer etc"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
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
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[83%] md:w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[309px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                    <Line className="bg-blue-A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[62%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_coinsoutline.svg"
                        alt="coinsOutline"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700_01"
                        size="txtGilroySemiBold16BlueA70001"
                      >
                        Rewards Points
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[46%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Friend List
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit_24X24.svg"
                        alt="edit"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[42%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_ticket.svg"
                        alt="ticket"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Coupons
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification One"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_question.svg"
                      alt="question"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-8 pt-1 w-full">
              <div className="flex flex-col gap-[21px] justify-start w-full">
                <Text
                  className="text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Rewards Points
                </Text>
                <div className="flex flex-col gap-8 items-center justify-start md:ml-[0] ml-[218px] w-3/4 md:w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                    <div className="bg-white-A700 flex md:flex-1 flex-row items-center justify-between p-[30px] sm:px-5 rounded-md w-[73%] md:w-full">
                      <div className="flex flex-col gap-[31px] items-start justify-start ml-5">
                        <Text
                          className="text-blue_gray-400 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Total Reward Points
                        </Text>
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
                          size="txtGilroyBold36Bluegray900"
                        >
                          $500
                        </Text>
                      </div>
                      <Img
                        className="h-[100px] md:h-auto mr-5 object-cover w-[100px]"
                        src="images/img_image2022051.png"
                        alt="image2022051"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[26%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium rounded-md text-center text-lg w-[162px]"
                        color="blue_A700_01"
                        size="lg"
                        variant="fill"
                      >
                        Withdraw
                      </Button>
                      <Button
                        className="cursor-pointer font-medium rounded-md text-center text-lg w-[163px]"
                        color="blue_A700_01"
                        size="lg"
                        variant="outline"
                      >
                        Deposit
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-8 sm:px-5 rounded-md w-full">
                    <div className="flex flex-col gap-[35px] items-start justify-start mt-[5px] w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroySemiBold18Bluegray900"
                      >
                        Recent Transactions
                      </Text>
                      <List
                        className="flex flex-col font-inter gap-[28.79px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                          <Text
                            className="text-base text-blue-A700_01"
                            size="txtInterMedium16"
                          >
                            Today
                          </Text>
                          <div className="flex flex-col font-gilroy gap-[17px] items-center justify-end pt-[5px] w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="text-green-600 text-lg"
                                size="txtGilroySemiBold18Green600"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="text-green-600 text-lg"
                                size="txtGilroySemiBold18Green600"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="text-lg text-red-700"
                                size="txtGilroySemiBold18Red700"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-full">
                          <Text
                            className="text-base text-blue-A700_01"
                            size="txtInterMedium16"
                          >
                            21/09/2021
                          </Text>
                          <div className="flex flex-col font-gilroy gap-[17px] items-center justify-end pt-[5px] w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="text-green-600 text-lg"
                                size="txtGilroySemiBold18Green600"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="text-green-600 text-lg"
                                size="txtGilroySemiBold18Green600"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="text-lg text-red-700"
                                size="txtGilroySemiBold18Red700"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-[29px] items-start justify-start w-full">
                          <Text
                            className="text-base text-blue-A700_01"
                            size="txtInterMedium16"
                          >
                            03/09/2021
                          </Text>
                          <div className="flex flex-col font-gilroy gap-[17px] items-center justify-end pt-[5px] w-full">
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="text-green-600 text-lg"
                                size="txtGilroySemiBold18Green600"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Earned Reward
                              </Text>
                              <Text
                                className="text-green-600 text-lg"
                                size="txtGilroySemiBold18Green600"
                              >
                                +$10
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                            <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroyRegular18"
                              >
                                Transferred To Account
                              </Text>
                              <Text
                                className="text-lg text-red-700"
                                size="txtGilroySemiBold18Red700"
                              >
                                -$5
                              </Text>
                            </div>
                            <Line className="bg-blue_gray-100 h-px w-full" />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoyaltySystemPage;
