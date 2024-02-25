import React from "react";

import { Button, Img, Input, Line, List, Slider, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CustomisedOrderStatusPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1286px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group.svg"
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
        <div className="sm:h-[1181px] h-[980px] max-w-[1408px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col gap-4 h-full items-center justify-start ml-auto my-auto w-[77%]">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-gray-900 text-lg"
                size="txtGilroySemiBold18Gray900"
              >
                Orders
              </Text>
              <div className="sm:h-24 h-[50px] relative w-[38%] sm:w-full">
                <div className="absolute border-b border-blue_gray-100 border-solid flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-start justify-center m-auto pb-1 w-full">
                  <div className="flex flex-col items-start justify-center w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      All
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center sm:ml-[0] ml-[140px] w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Completed
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-center sm:ml-[0] ml-[30px] w-auto">
                    <Text
                      className="text-base text-blue_gray-400 w-auto"
                      size="txtGilroyMedium16"
                    >
                      Canceled
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-1 h-max inset-y-[0] items-center justify-start left-[17%] my-auto w-auto">
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
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[729px] justify-start pb-[30px] rounded-lg shadow-bs1 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-50 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-3.5 w-full">
                  <Text
                    className="text-base text-blue_gray-600"
                    size="txtGilroyMedium16Bluegray600"
                  >
                    Item
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[156px] text-base text-blue_gray-600"
                    size="txtGilroyMedium16Bluegray600"
                  >
                    Order ID
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[74px] text-base text-blue_gray-600"
                    size="txtGilroyMedium16Bluegray600"
                  >
                    Order BY
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[87px] text-base text-blue_gray-600"
                    size="txtGilroyMedium16Bluegray600"
                  >
                    Date
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[63px] text-base text-blue_gray-600"
                    size="txtGilroyMedium16Bluegray600"
                  >
                    Total Paid
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[73px] text-base text-blue_gray-600"
                    size="txtGilroyMedium16Bluegray600"
                  >
                    Address
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[85px] mr-[30px] text-base text-blue_gray-600"
                    size="txtGilroyMedium16Bluegray600"
                  >
                    Status
                  </Text>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
              </div>
              <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[774px] w-auto">
                <Button
                  className="cursor-pointer flex h-8 items-center justify-center rounded w-8"
                  onClick={() => sliderRef.current?.slidePrev?.()}
                  shape="round"
                  color="blue_gray_300_87"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="!text-blue-A700_01 border border-blue-A700_01 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  1
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  2
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-semibold font-sfprotext h-8 rounded text-center text-sm w-8"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  ...
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  9
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer font-bold font-gilroy h-8 rounded text-center text-sm w-8"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                >
                  10
                </Button>
                <Button
                  className="border border-blue_gray-100 border-solid cursor-pointer flex h-8 items-center justify-center rounded w-8"
                  onClick={() => sliderRef.current?.slideNext?.()}
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Slider
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 2 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00] absolute"
            ref={sliderRef}
            className="absolute inset-[0] justify-center m-auto w-full"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <List
                  className="flex flex-col gap-[23px] mx-2.5"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          src="images/img_unsplashenrurz.png"
                          alt="unsplashEnrurZ"
                        />
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                        size="txtGilroyMedium16BlueA70001"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="ml-8 md:ml-[0] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[31px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="leading-[26.00px] md:ml-[0] ml-[49px] text-base text-blue_gray-900 w-[15%] sm:w-full"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] rounded-md text-center text-sm"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          src="images/img_unsplashenrurz.png"
                          alt="unsplashEnrurZ One"
                        />
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                        size="txtGilroyMedium16BlueA70001"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="ml-8 md:ml-[0] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[31px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="leading-[26.00px] md:ml-[0] ml-[49px] text-base text-blue_gray-900 w-[15%] sm:w-full"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] rounded-md text-center text-sm"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          src="images/img_unsplashenrurz.png"
                          alt="unsplashEnrurZ Two"
                        />
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                        size="txtGilroyMedium16BlueA70001"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="ml-8 md:ml-[0] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[31px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="leading-[26.00px] md:ml-[0] ml-[49px] text-base text-blue_gray-900 w-[15%] sm:w-full"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] rounded-md text-center text-sm"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          src="images/img_unsplashenrurz.png"
                          alt="unsplashEnrurZ Three"
                        />
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                        size="txtGilroyMedium16BlueA70001"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="ml-8 md:ml-[0] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[31px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="leading-[26.00px] md:ml-[0] ml-[49px] text-base text-blue_gray-900 w-[15%] sm:w-full"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] rounded-md text-center text-sm"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          src="images/img_unsplashenrurz.png"
                          alt="unsplashEnrurZ Four"
                        />
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                        size="txtGilroyMedium16BlueA70001"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="ml-8 md:ml-[0] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[31px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="leading-[26.00px] md:ml-[0] ml-[49px] text-base text-blue_gray-900 w-[15%] sm:w-full"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] rounded-md text-center text-sm"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          src="images/img_unsplashenrurz.png"
                          alt="unsplashEnrurZ Five"
                        />
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                        size="txtGilroyMedium16BlueA70001"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="ml-8 md:ml-[0] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[31px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="leading-[26.00px] md:ml-[0] ml-[49px] text-base text-blue_gray-900 w-[15%] sm:w-full"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] rounded-md text-center text-sm"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                      <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                          src="images/img_unsplashenrurz.png"
                          alt="unsplashEnrurZ Six"
                        />
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Logo printed T-shirt
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                        size="txtGilroyMedium16BlueA70001"
                      >
                        #21204034879
                      </Text>
                      <Text
                        className="ml-8 md:ml-[0] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        Angelyn Weiner
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[31px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        April 30, 2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[60px] text-base text-blue_gray-900"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        $9.92
                      </Text>
                      <Text
                        className="leading-[26.00px] md:ml-[0] ml-[49px] text-base text-blue_gray-900 w-[15%] sm:w-full"
                        size="txtGilroyMedium16Bluegray900"
                      >
                        4517 Washington Ave. Manchester...
                      </Text>
                      <Button
                        className="border border-amber-500 border-solid cursor-pointer font-semibold min-w-[85px] md:ml-[0] ml-[27px] rounded-md text-center text-sm"
                        color="gray_50_04"
                        size="md"
                        variant="fill"
                      >
                        Pending
                      </Button>
                    </div>
                    <Line className="bg-blue_gray-100 h-px w-full" />
                  </div>
                </List>
              </React.Fragment>
            ))}
          />
        </div>
      </div>
    </>
  );
};

export default CustomisedOrderStatusPage;
