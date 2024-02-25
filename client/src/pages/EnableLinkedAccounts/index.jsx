import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Switch, Text } from "components";

const EnableLinkedAccountsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-gray-50_02 flex flex-col justify-start p-6 sm:px-5 w-full">
              <Img
                className="h-[35px] mx-auto w-[65%]"
                src="images/img_group10392_35X162.svg"
                alt="Group10392"
              />
              <div className="flex flex-col gap-[41px] justify-start mt-12 w-3/5 md:w-full">
                <div className="flex flex-col gap-[42px] items-start justify-start ml-2 md:ml-[0] w-[95%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-start w-[81%] md:w-full">
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
                  <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_dollaraltsoli.svg"
                      alt="dollaraltSoli"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Payments
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_walletoutline.svg"
                      alt="walletOutline"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Wallet & Cards
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[89%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_car.svg"
                      alt="car"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Transactions
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-[70%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                    <Text
                      className="mt-1 text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Analytics
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-end justify-start w-[74%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16"
                    >
                      Messages
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start w-[67%] md:w-full">
                  <Line className="bg-blue-A700_01 h-6 w-0.5" />
                  <Img
                    className="h-6 ml-1.5 w-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="ml-2 mt-[5px] text-base text-blue-A700_01"
                    size="txtGilroySemiBold16BlueA70001"
                  >
                    Settings
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-opensans gap-2 items-end justify-start mb-6 ml-2 md:ml-[0] mt-[478px] w-[27%] md:w-full">
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
          </Sidebar>
          <div className="flex flex-1 flex-col md:gap-10 gap-[76px] items-center justify-start md:mt-0 mt-8 w-full">
            <div className="flex flex-col gap-9 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <Text
                  className="mb-0.5 md:mt-0 mt-3.5 md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32Bluegray900"
                >
                  Settings
                </Text>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[819px] p-2 rounded-[50%] w-14">
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
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-10 md:ml-[0] w-[73%] md:w-full">
                    <Text
                      className="md:mt-0 my-0.5 text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Profile Settings
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[34px] text-base text-blue-A700_01"
                      size="txtGilroyMedium16BlueA70001"
                    >
                      Notifications
                    </Text>
                    <a
                      href="javascript:"
                      className="md:ml-[0] ml-[34px] md:mt-0 mt-[3px] text-base text-blue_gray-400"
                    >
                      <Text size="txtGilroyMedium16">Privacy</Text>
                    </a>
                    <Text
                      className="ml-11 md:ml-[0] md:mt-0 mt-[5px] text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Discovery Settings
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[34px] md:mt-0 my-0.5 text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Data Usage
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[34px] md:mt-0 my-0.5 text-base text-blue_gray-400"
                      size="txtGilroyMedium16"
                    >
                      Display & Theme
                    </Text>
                  </div>
                  <div className="flex flex-col relative w-full">
                    <Line className="bg-gray-300 h-px mx-auto w-full" />
                    <Line className="bg-blue-A700_01 h-0.5 mb-auto ml-[173px] mt-[-1px] w-[11%] z-[1]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[41px] items-center justify-start w-[52%] md:w-full">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                size="txtGilroySemiBold28"
              >
                Enable Linked Accounts
              </Text>
              <List
                className="flex flex-col gap-8 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[26%]">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="circle"
                      color="blue_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_instagram.svg"
                        alt="instagram"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Instagram
                    </Text>
                  </div>
                  <Switch
                    onColor="#0061ff"
                    offColor="#eaecf0"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={true}
                    className="w-[9%]"
                  />
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[21%]">
                    <Button
                      className="common-pointer flex h-10 items-center justify-center w-10"
                      onClick={() => navigate("")}
                      shape="circle"
                      color="blue_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Twitter
                    </Text>
                  </div>
                  <Switch
                    onColor="#0061ff"
                    offColor="#eaecf0"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={true}
                    className="w-[9%]"
                  />
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[26%]">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="circle"
                      color="blue_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Facebook
                    </Text>
                  </div>
                  <Switch
                    onColor="#0061ff"
                    offColor="#eaecf0"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={false}
                    className="w-[9%]"
                  />
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[23%]">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="circle"
                      color="blue_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_layoutube.svg"
                        alt="layoutube"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Youtube
                    </Text>
                  </div>
                  <Switch
                    onColor="#0061ff"
                    offColor="#eaecf0"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={true}
                    className="w-[9%]"
                  />
                </div>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[24%]">
                    <Button
                      className="flex h-10 items-center justify-center w-10"
                      shape="circle"
                      color="blue_50"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_send.svg"
                        alt="send"
                      />
                    </Button>
                    <Text
                      className="text-black-900 text-lg"
                      size="txtGilroyMedium18Black900"
                    >
                      Telegram
                    </Text>
                  </div>
                  <Switch
                    onColor="#0061ff"
                    offColor="#eaecf0"
                    onHandleColor="#f9fbff"
                    offHandleColor="#f9fbff"
                    value={false}
                    className="w-[9%]"
                  />
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnableLinkedAccountsPage;
