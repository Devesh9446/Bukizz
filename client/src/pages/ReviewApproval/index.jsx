import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ReviewApprovalPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
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
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start md:px-5 w-[95%] md:w-full">
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
                    <div className="flex flex-row gap-2 items-end justify-start w-[84%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_coinsoutline.svg"
                        alt="coinsOutline"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue-A700_01"
                        size="txtGilroySemiBold16BlueA70001"
                      >
                        Request Management
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[46%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_1.svg"
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
                        src="images/img_edit.svg"
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
            <div className="flex-1 md:h-[1852px] h-[953px] sm:h-[982px] relative w-full">
              <div className="absolute flex flex-col items-center justify-center left-[3%] top-[0] w-auto">
                <Text
                  className="text-base text-blue_gray-400 w-auto"
                  size="txtGilroyMedium16"
                >
                  Approved
                </Text>
              </div>
              <div className="absolute flex flex-col gap-[30px] h-max inset-[0] items-start justify-center m-auto w-full">
                <div className="h-[52px] relative w-[46%] sm:w-full">
                  <div className="absolute bg-gray-50 border-b border-blue_gray-100 border-solid h-[50px] inset-[0] justify-center m-auto w-full"></div>
                  <div className="absolute flex flex-row h-full inset-[0] items-start justify-between m-auto w-[87%]">
                    <div className="flex flex-col items-start justify-center w-auto">
                      <Text
                        className="text-base text-blue_gray-400 w-auto"
                        size="txtGilroyMedium16"
                      >
                        Approved
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start mt-0.5 w-auto">
                      <div className="flex flex-col items-center justify-start p-2.5 w-full">
                        <Text
                          className="text-base text-blue-A700_01 w-auto"
                          size="txtGilroyMedium16BlueA70001"
                        >
                          Pending
                        </Text>
                      </div>
                      <Line className="bg-blue-A700_01 h-0.5 w-full" />
                    </div>
                    <div className="flex flex-col items-start justify-end p-2.5">
                      <Text
                        className="mt-1.5 text-base text-blue_gray-400"
                        size="txtGilroyMedium16"
                      >
                        Rejected
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end w-full">
                  <List
                    className="flex flex-col gap-6 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            src="images/img_ellipse6_3.png"
                            alt="ProfileImgLarg One"
                          />
                          <div className="flex flex-col gap-3.5 items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[30px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="mt-0.5 text-blue_gray-900 text-lg"
                                size="txtGilroySemiBold18Bluegray900"
                              >
                                Stein Hanley
                              </Text>
                              <Img
                                className="h-[18px] w-[47%]"
                                src="images/img_star.svg"
                                alt="star"
                              />
                            </div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              HR Manager
                            </Text>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue-50 h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                            size="txtGilroyMedium14BlueA70001"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="text-base text-blue-A700_01 w-auto"
                                size="txtGilroyMedium16BlueA70001"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium rounded-md text-base text-center w-[150px]"
                              color="blue_A700_01"
                              size="lg"
                              variant="fill"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            src="images/img_profileimglarg_56X56.png"
                            alt="ProfileImgLarg Two"
                          />
                          <div className="flex flex-col items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[22px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroySemiBold18Bluegray900"
                              >
                                Lara Johnson
                              </Text>
                              <Img
                                className="h-[18px] w-[47%]"
                                src="images/img_star.svg"
                                alt="star One"
                              />
                            </div>
                            <Text
                              className="mt-[19px] text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              Design Head
                            </Text>
                            <Text
                              className="mt-3 text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue-50 h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                            size="txtGilroyMedium14BlueA70001"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="text-base text-blue-A700_01 w-auto"
                                size="txtGilroyMedium16BlueA70001"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium rounded-md text-base text-center w-[150px]"
                              color="blue_A700_01"
                              size="lg"
                              variant="fill"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            src="images/img_ellipse6_1.png"
                            alt="ProfileImgLarg Three"
                          />
                          <div className="flex flex-col gap-3.5 items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[33px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="mt-0.5 text-blue_gray-900 text-lg"
                                size="txtGilroySemiBold18Bluegray900"
                              >
                                jose Cooper
                              </Text>
                              <Img
                                className="h-[18px] w-[47%]"
                                src="images/img_star.svg"
                                alt="star Two"
                              />
                            </div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              Product Manager
                            </Text>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue-50 h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                            size="txtGilroyMedium14BlueA70001"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="text-base text-blue-A700_01 w-auto"
                                size="txtGilroyMedium16BlueA70001"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium rounded-md text-base text-center w-[150px]"
                              color="blue_A700_01"
                              size="lg"
                              variant="fill"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            src="images/img_ellipse6_3.png"
                            alt="ProfileImgLarg Four"
                          />
                          <div className="flex flex-col gap-3.5 items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[30px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="mt-0.5 text-blue_gray-900 text-lg"
                                size="txtGilroySemiBold18Bluegray900"
                              >
                                Stein Hanley
                              </Text>
                              <Img
                                className="h-[18px] w-[47%]"
                                src="images/img_star.svg"
                                alt="star Three"
                              />
                            </div>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              HR Manager
                            </Text>
                            <Text
                              className="text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue-50 h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                            size="txtGilroyMedium14BlueA70001"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="text-base text-blue-A700_01 w-auto"
                                size="txtGilroyMedium16BlueA70001"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium rounded-md text-base text-center w-[150px]"
                              color="blue_A700_01"
                              size="lg"
                              variant="fill"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[63%] md:w-full">
                          <Img
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            src="images/img_profileimglarg_56X56.png"
                            alt="ProfileImgLarg Five"
                          />
                          <div className="flex flex-col items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[22px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="text-blue_gray-900 text-lg"
                                size="txtGilroySemiBold18Bluegray900"
                              >
                                Lara Johnson
                              </Text>
                              <Img
                                className="h-[18px] w-[47%]"
                                src="images/img_star.svg"
                                alt="star Four"
                              />
                            </div>
                            <Text
                              className="mt-[19px] text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              Design Head
                            </Text>
                            <Text
                              className="mt-3 text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue-50 h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                            size="txtGilroyMedium14BlueA70001"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="text-base text-blue-A700_01 w-auto"
                                size="txtGilroyMedium16BlueA70001"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium rounded-md text-base text-center w-[150px]"
                              color="blue_A700_01"
                              size="lg"
                              variant="fill"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start my-0 p-4 rounded-md shadow-bs2 w-full">
                      <div className="flex md:flex-col flex-row md:gap-[49px] items-center justify-between mb-0.5 w-[98%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between pb-2 w-[63%] md:w-full">
                          <Img
                            className="h-14 md:h-auto rounded-[50%] w-14"
                            src="images/img_ellipse6_1.png"
                            alt="ProfileImgLarg Six"
                          />
                          <div className="flex flex-col items-start justify-start pt-[5px]">
                            <div className="flex flex-row gap-[33px] items-start justify-start w-[49%] md:w-full">
                              <Text
                                className="mt-0.5 text-blue_gray-900 text-lg"
                                size="txtGilroySemiBold18Bluegray900"
                              >
                                jose Cooper
                              </Text>
                              <Img
                                className="h-[18px] w-[47%]"
                                src="images/img_star.svg"
                                alt="star Five"
                              />
                            </div>
                            <Text
                              className="mt-3.5 text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              Product Manager
                            </Text>
                            <Text
                              className="mt-2 text-base text-blue_gray-400"
                              size="txtGilroyMedium16"
                            >
                              It was amazing experience working with you. I
                              would love to be a part...
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 items-end justify-start w-[33%] md:w-full">
                          <Text
                            className="bg-blue-50 h-[26px] justify-center pl-2 pr-1 py-[5px] rounded-[3px] text-blue-A700_01 text-sm w-[87px]"
                            size="txtGilroyMedium14BlueA70001"
                          >
                            18/05/2022
                          </Text>
                          <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
                            <div className="flex flex-col items-center justify-center px-[18px] py-3 rounded-md w-[150px]">
                              <Text
                                className="text-base text-blue-A700_01 w-auto"
                                size="txtGilroyMedium16BlueA70001"
                              >
                                Reject
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer font-medium rounded-md text-base text-center w-[150px]"
                              color="blue_A700_01"
                              size="lg"
                              variant="fill"
                            >
                              Approve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewApprovalPage;
