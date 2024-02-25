import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const FreeCreditsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_5.svg"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
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
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue-A700_01 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[48%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_coinsoutline.svg"
                        alt="coinsOutline"
                      />
                      <Text
                        className="mt-1 text-base text-blue-A700_01"
                        size="txtGilroySemiBold16BlueA70001"
                      >
                        My Credits
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
            <div className="flex flex-1 flex-col gap-6 items-center justify-start md:mt-0 mt-8 w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-gray-900 text-lg"
                  size="txtGilroySemiBold18Gray900"
                >
                  My Credits
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[161px] rounded-md text-base text-center"
                  color="blue_A700_01"
                  size="lg"
                  variant="fill"
                >
                  Earn Free Credits
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-col gap-6 items-start justify-start pr-[5px] py-[5px]">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Total Credits
                    </Text>
                    <Text
                      className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                      size="txtGilroySemiBold28"
                    >
                      $50,000
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start pr-[5px] py-[5px]">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Free Credits
                    </Text>
                    <Text
                      className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                      size="txtGilroySemiBold28"
                    >
                      $10,000
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-col gap-[23px] items-start justify-start pr-[5px] py-[5px]">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Redeemed Credits
                    </Text>
                    <Text
                      className="mb-0.5 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                      size="txtGilroySemiBold28"
                    >
                      $08,000
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row gap-8 items-center justify-between w-full">
                <div className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start p-6 sm:px-5 rounded-md w-[71%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-gray-900 text-lg"
                      size="txtGilroySemiBold18Gray900"
                    >
                      Total Credits
                    </Text>
                    <div className="flex sm:flex-1 flex-row gap-8 items-center justify-between w-[41%] sm:w-full">
                      <div className="border-b border-blue_gray-400 border-solid flex flex-row gap-4 items-start justify-between w-[81%]">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-start p-2.5 w-full">
                            <Text
                              className="text-base text-blue-A700_01 w-auto"
                              size="txtGilroyMedium16BlueA70001"
                            >
                              Yearly
                            </Text>
                          </div>
                          <Line className="bg-blue-A700_01 h-0.5 w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-base text-blue_gray-400 w-auto"
                            size="txtGilroyMedium16"
                          >
                            Monthly
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-center w-auto">
                          <Text
                            className="text-base text-blue_gray-400 w-auto"
                            size="txtGilroyMedium16"
                          >
                            Daily
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_overflowmenu.svg"
                        alt="overflowmenu"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                      size="txtGilroyBold28Gray900"
                    >
                      $50,000
                    </Text>
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-[17px] items-start justify-start pb-1 pl-1">
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          50K
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          40K
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          30K
                        </Text>
                        <Text
                          className="text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          20K
                        </Text>
                        <Text
                          className="ml-1 md:ml-[0] text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          10K
                        </Text>
                        <Text
                          className="h-4 ml-2.5 md:ml-[0] text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          5K
                        </Text>
                        <Text
                          className="mb-5 md:ml-[0] ml-[9px] text-blue_gray-900 text-sm"
                          size="txtGilroyRegular14Bluegray900"
                        >
                          0K
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[30px] items-end justify-between w-[94%] md:w-full">
                        <div className="flex flex-col gap-2.5 items-center justify-start w-[5%]">
                          <div className="bg-blue-A700 h-[212px] rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Jan
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[132px] w-[5%]">
                          <div className="bg-blue-A700 h-20 rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Feb
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-9 w-[5%]">
                          <div className="bg-blue-A700 h-44 rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Mar
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[31px] w-[5%]">
                          <div className="bg-blue-A700 h-[181px] rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Apr
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[157px] w-[5%]">
                          <div className="bg-blue-A700 h-[55px] rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            May
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[94px] w-[5%]">
                          <div className="bg-blue-A700 h-[118px] rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Jun
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[49px] w-[5%]">
                          <div className="bg-blue-A700 h-[163px] rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Jul
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[108px] w-[5%]">
                          <div className="bg-blue-A700 h-[104px] rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Aug
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[91px] w-[5%]">
                          <div className="bg-blue-A700 h-[121px] rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Sep
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-[58px] w-[5%]">
                          <div className="bg-blue-A700 h-[154px] rounded-[5px] w-full"></div>
                          <Text
                            className="text-blue_gray-900 text-sm"
                            size="txtGilroyRegular14Bluegray900"
                          >
                            Oct
                          </Text>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 mt-[39px] w-[13%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                            <div className="bg-blue-A700 h-[173px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Nov
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                            <div className="bg-blue-A700 h-[173px] rounded-[5px] w-full"></div>
                            <Text
                              className="text-blue_gray-900 text-sm"
                              size="txtGilroyRegular14Bluegray900"
                            >
                              Des
                            </Text>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-[27%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        className="text-gray-900 text-lg"
                        size="txtGilroySemiBold18Gray900"
                      >
                        Friend List
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_overflowmenu.svg"
                        alt="overflowmenu One"
                      />
                    </div>
                    <List
                      className="flex flex-col gap-[15px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[93px] w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                          src="images/img_jankoferlicg.png"
                          alt="jankoferlicG"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtGilroyMedium14Gray900"
                          >
                            Benny Chagur
                          </Text>
                          <Text
                            className="text-blue_gray-400_01 text-xs"
                            size="txtGilroyRegular12"
                          >
                            Member
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[93px] w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                          src="images/img_studioportrait.png"
                          alt="studioportrait"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtGilroyMedium14Gray900"
                          >
                            Chynita Heree
                          </Text>
                          <Text
                            className="text-blue_gray-400_01 text-xs"
                            size="txtGilroyRegular12"
                          >
                            Member
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[87px] w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                          src="images/img_youngbeardedm.png"
                          alt="youngbeardedm"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtGilroyMedium14Gray900"
                          >
                            David Yers
                          </Text>
                          <Text
                            className="text-blue_gray-400_01 text-xs"
                            size="txtGilroyRegular12"
                          >
                            Regular Customer
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                          src="images/img_cheerfulindian.png"
                          alt="cheerfulindian"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtGilroyMedium14Gray900"
                          >
                            Hayder Jahid
                          </Text>
                          <Text
                            className="text-blue_gray-400_01 text-xs"
                            size="txtGilroyRegular12"
                          >
                            Member
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                          src="images/img_cheerfulindian.png"
                          alt="cheerfulindian One"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtGilroyMedium14Gray900"
                          >
                            Hayder Jahid
                          </Text>
                          <Text
                            className="text-blue_gray-400_01 text-xs"
                            size="txtGilroyRegular12"
                          >
                            Member
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-2.5 items-center justify-start md:pr-10 sm:pr-5 pr-[99px] w-full">
                        <Img
                          className="h-10 md:h-auto object-cover rounded-[3px] w-10"
                          src="images/img_cheerfulindian.png"
                          alt="cheerfulindian Two"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-sm"
                            size="txtGilroyMedium14Gray900"
                          >
                            Hayder Jahid
                          </Text>
                          <Text
                            className="text-blue_gray-400_01 text-xs"
                            size="txtGilroyRegular12"
                          >
                            Member
                          </Text>
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
    </>
  );
};

export default FreeCreditsPage;
