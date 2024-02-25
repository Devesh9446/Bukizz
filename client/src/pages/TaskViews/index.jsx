import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const TaskViewsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          {/* <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_8.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
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
          </div> */}
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto md:px-5 w-full">
            {/* <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
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
                    <div className="flex flex-row gap-2 items-start justify-start w-[31%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue-A700_01"
                        size="txtGilroySemiBold16BlueA70001"
                      >
                        Tasks
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[38%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_chartlineoutl.svg"
                        alt="chartlineOutl"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Activity
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[81%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Project management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[39%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_file.svg"
                        alt="file"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16"
                      >
                        Reports
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
            </Sidebar> */}
            <div className="flex flex-1 flex-col gap-8 items-center justify-start w-full">
              <div className="flex h-[51px] md:h-[52px] justify-end relative w-full">
                <Text
                  className="mb-1.5 mt-auto text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtGilroySemiBold24Bluegray900"
                >
                  Task Management
                </Text>
                <div className="absolute h-[51px] md:h-[52px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute flex flex-row gap-6 h-max inset-y-[0] items-center justify-between my-auto right-[0] w-[36%]">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-start p-2.5 w-full">
                        <Text
                          className="text-base text-blue-A700_01 w-auto"
                          size="txtGilroyMedium16BlueA70001"
                        >
                          All
                        </Text>
                      </div>
                      <Line className="bg-blue-A700_01 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        On Going
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        On Hold
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        Completed
                      </Text>
                    </div>
                  </div>
                  <Line className="absolute bg-blue_gray-100 bottom-[0] h-px inset-x-[0] mx-auto w-full" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve"
                        />
                      </div>
                      <Button
                        className="border border-blue-A700_01 border-solid cursor-pointer font-semibold min-w-[72px] text-center text-xs"
                        shape="round"
                        color="gray_50"
                        size="md"
                        variant="fill"
                      >
                        In process
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user One"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen One"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen One"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve One"
                        />
                      </div>
                      <Button
                        className="border border-green-600 border-solid cursor-pointer font-semibold min-w-[76px] text-center text-xs"
                        shape="round"
                        color="gray_100"
                        size="md"
                        variant="fill"
                      >
                        completed
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Two"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Two"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Two"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Two"
                        />
                      </div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[61px] text-center text-xs"
                        shape="round"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        On Hold
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Three"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Three"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Three"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Three"
                        />
                      </div>
                      <Button
                        className="border border-blue-A700_01 border-solid cursor-pointer font-semibold min-w-[72px] text-center text-xs"
                        shape="round"
                        color="gray_50"
                        size="md"
                        variant="fill"
                      >
                        In process
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Four"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Four"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Four"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Four"
                        />
                      </div>
                      <Button
                        className="border border-green-600 border-solid cursor-pointer font-semibold min-w-[76px] text-center text-xs"
                        shape="round"
                        color="gray_100"
                        size="md"
                        variant="fill"
                      >
                        completed
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Five"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Five"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Five"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Five"
                        />
                      </div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[61px] text-center text-xs"
                        shape="round"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        On Hold
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Six"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Six"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Six"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Six"
                        />
                      </div>
                      <Button
                        className="border border-blue-A700_01 border-solid cursor-pointer font-semibold min-w-[72px] text-center text-xs"
                        shape="round"
                        color="gray_50"
                        size="md"
                        variant="fill"
                      >
                        In process
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Seven"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Seven"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Seven"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Seven"
                        />
                      </div>
                      <Button
                        className="border border-green-600 border-solid cursor-pointer font-semibold min-w-[76px] text-center text-xs"
                        shape="round"
                        color="gray_100"
                        size="md"
                        variant="fill"
                      >
                        completed
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Eight"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Eight"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Eight"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Eight"
                        />
                      </div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[61px] text-center text-xs"
                        shape="round"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        On Hold
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Nine"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Nine"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Nine"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Nine"
                        />
                      </div>
                      <Button
                        className="border border-blue-A700_01 border-solid cursor-pointer font-semibold min-w-[72px] text-center text-xs"
                        shape="round"
                        color="gray_50"
                        size="md"
                        variant="fill"
                      >
                        In process
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Ten"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Ten"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Ten"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Ten"
                        />
                      </div>
                      <Button
                        className="border border-green-600 border-solid cursor-pointer font-semibold min-w-[76px] text-center text-xs"
                        shape="round"
                        color="gray_100"
                        size="md"
                        variant="fill"
                      >
                        completed
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Eleven"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Eleven"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Eleven"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Eleven"
                        />
                      </div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[61px] text-center text-xs"
                        shape="round"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        On Hold
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Twelve"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Twelve"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Twelve"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Twelve"
                        />
                      </div>
                      <Text
                        className="bg-gray-50 border border-blue-A700_01 border-solid h-6 justify-center pb-0.5 pt-[7px] px-2 rounded-[3px] text-blue-A700_01 text-xs w-[72px]"
                        size="txtGilroySemiBold12"
                      >
                        In process
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Thirteen"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Thirteen"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Thirteen"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Thirteen"
                        />
                      </div>
                      <Text
                        className="bg-gray-100 border border-green-600 border-solid h-6 justify-center pb-0.5 pt-1.5 px-2 rounded-[3px] text-green-600 text-xs w-[76px]"
                        size="txtGilroySemiBold12Green600"
                      >
                        completed
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="mt-[7px] text-gray-900_01 text-lg"
                        size="txtGilroySemiBold18Gray90001"
                      >
                        Project 1
                      </Text>
                      <Img
                        className="h-6 mb-[5px] w-6"
                        src="images/img_user.svg"
                        alt="user Fourteen"
                      />
                    </div>
                    <Text
                      className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                      size="txtGilroyMedium12"
                    >
                      <>
                        Brainstorming brings team members&#39; diverse
                        experience into play.{" "}
                      </>
                    </Text>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="h-6 relative w-[21%]">
                        <div className="absolute h-6 inset-y-[0] my-auto right-[0] w-[70%]">
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"
                            src="images/img_ellipse6_1.png"
                            alt="EllipseFifteen Fourteen"
                          />
                          <Img
                            className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-[25px]"
                            src="images/img_ellipse6_150X150.png"
                            alt="EllipseThirteen Fourteen"
                          />
                        </div>
                        <Img
                          className="absolute h-6 inset-y-[0] left-[0] my-auto rounded-[50%] w-6"
                          src="images/img_ellipse6.png"
                          alt="EllipseTwelve Fourteen"
                        />
                      </div>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[61px] text-center text-xs"
                        shape="round"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        On Hold
                      </Button>
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

export default TaskViewsPage;
