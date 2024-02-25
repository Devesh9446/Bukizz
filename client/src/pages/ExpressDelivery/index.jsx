import React from "react";

import { Button, Img, Input, Line, Switch, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ExpressDeliveryPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs2 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_2.svg"
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
        <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-end pt-4 px-4 w-[68%] md:w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start rounded-lg shadow-bs1 w-[97%] md:w-full">
              <div className="overflow-x-auto w-full">
                <div className="h-[966px] md:h-[982px] relative rounded-lg w-full">
                  <div className="bg-white-A700 h-[982px] m-auto rounded-lg shadow-bs1 w-full"></div>
                  <div className="absolute flex flex-col gap-[50px] inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                      <Input
                        name="FrameSeventySeven"
                        placeholder="Order Summary"
                        className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_01 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="pr-[35px] w-full"
                        color="blue_gray_100"
                        size="md"
                        variant="underline"
                      ></Input>
                      <div className="flex md:flex-col flex-row gap-4 items-center justify-start pt-1.5 w-[77%] md:w-full">
                        <Img
                          className="h-[194px] md:h-auto object-cover rounded w-[194px]"
                          src="images/img_pngwing1.png"
                          alt="pngwingOne"
                        />
                        <div className="flex flex-col items-start justify-start w-[66%] md:w-full">
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtGilroyMedium20"
                          >
                            Samsung Galaxy M12
                          </Text>
                          <Text
                            className="mt-[19px] text-blue_gray-400 text-lg"
                            size="txtGilroyMedium18"
                          >
                            (Blue,6GB RAM, 128GB Storage)
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[23px] w-[23%] md:w-full">
                            <Text
                              className="text-black-900_01 text-lg"
                              size="txtGilroyMedium18Black90001"
                            >
                              Color:
                            </Text>
                            <Text
                              className="ml-1 text-blue_gray-400 text-lg"
                              size="txtGilroyMedium18"
                            >
                              Blue
                            </Text>
                          </div>
                          <div className="flex flex-row font-opensans gap-[15px] items-end justify-start mt-[18px] w-[39%] md:w-full">
                            <Text
                              className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                              size="txtOpenSansMedium24Black90001"
                            >
                              <span className="text-colors2 font-gilroy text-left font-semibold">
                                $
                              </span>
                              <span className="text-colors5 font-gilroy text-left font-semibold">
                                555.29
                              </span>
                            </Text>
                            <Text
                              className="line-through mt-[11px] text-base text-blue_gray-400"
                              size="txtOpenSansMedium16"
                            >
                              <span className="text-colors4 font-gilroy text-left font-semibold">
                                $6
                              </span>
                              <span className="text-colors4 font-gilroy text-left font-semibold">
                                55.99
                              </span>
                            </Text>
                          </div>
                          <div className="flex flex-row font-gilroy items-center justify-between mt-3 w-full">
                            <div className="flex flex-row items-center justify-evenly">
                              <Button
                                className="flex h-9 items-center justify-center rounded w-9"
                                shape="round"
                                color="blue_gray_100"
                                size="md"
                                variant="outline"
                              >
                                <Img
                                  className="h-4"
                                  src="images/img_menu.svg"
                                  alt="menu"
                                />
                              </Button>
                              <Button
                                className="cursor-pointer font-bold min-w-[64px] rounded text-center text-lg"
                                shape="round"
                                color="blue_gray_400"
                                size="md"
                                variant="outline"
                              >
                                1
                              </Button>
                              <Button
                                className="flex h-9 items-center justify-center rounded w-9"
                                shape="round"
                                color="blue_gray_100"
                                size="md"
                                variant="outline"
                              >
                                <Img
                                  className="h-4"
                                  src="images/img_plus.svg"
                                  alt="plus"
                                />
                              </Button>
                            </div>
                            <Line className="bg-blue_gray-100 h-6 my-1.5 w-px" />
                            <Text
                              className="text-black-900_01 text-lg"
                              size="txtGilroyMedium18Black90001"
                            >
                              Save For Later
                            </Text>
                            <Line className="bg-blue_gray-100 h-6 my-1.5 w-px" />
                            <Text
                              className="text-lg text-red-700"
                              size="txtGilroyMedium18Red700"
                            >
                              Remove
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-4 w-full">
                      <div className="flex flex-col gap-4 items-start justify-start my-2 w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                            size="txtGilroyMedium24"
                          >
                            Express Delivery
                          </Text>
                          <Switch
                            onColor="#0061ff"
                            offColor="#0061ff"
                            onHandleColor="#f9fbff"
                            offHandleColor="#f9fbff"
                            value={true}
                            className=""
                          />
                        </div>
                        <div className="flex flex-col gap-[22px] items-start justify-end pt-[5px] w-[54%] md:w-full">
                          <div className="flex flex-row gap-[81px] items-start justify-start w-[73%] md:w-full">
                            <Text
                              className="text-blue_gray-400 text-xl"
                              size="txtGilroyMedium20Bluegray400"
                            >
                              Delivery Charges :
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-lg"
                              size="txtGilroyMedium18"
                            >
                              $2.50
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Text
                              className="text-blue_gray-400 text-xl"
                              size="txtGilroyMedium20Bluegray400"
                            >
                              Delivery Date & Time :
                            </Text>
                            <Text
                              className="text-blue_gray-400 text-lg"
                              size="txtGilroyMedium18"
                            >
                              April 30,2022, 9 am
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                        size="txtGilroyMedium24"
                      >
                        Delivery Address
                      </Text>
                      <Line className="bg-blue_gray-100 h-px w-full" />
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start mt-[23px] p-4 rounded w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between my-2 w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-between w-[67%] sm:w-full">
                          <Img
                            className="h-9 w-9"
                            src="images/img_radiobutton.svg"
                            alt="RadioButton"
                          />
                          <div className="flex flex-col gap-[22px] items-start justify-start pt-0.5">
                            <div className="flex flex-row gap-4 items-start justify-start w-[43%] md:w-full">
                              <Text
                                className="mt-[3px] text-black-900_01 text-xl"
                                size="txtGilroyMedium20"
                              >
                                Jone Cooper
                              </Text>
                              <Button
                                className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[50px] rounded text-center text-sm"
                                shape="round"
                                color="blue_gray_100"
                                size="xs"
                                variant="fill"
                              >
                                Work
                              </Button>
                            </div>
                            <Text
                              className="text-blue_gray-400 text-xl"
                              size="txtGilroyMedium20Bluegray400"
                            >
                              2118 Thornridge Cir. Syracuse, Connecticut 35624
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="sm:mt-0 mt-1 text-blue-A700_01 text-xl"
                          size="txtGilroyMedium20BlueA70001"
                        >
                          Edit
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start mt-6 p-4 rounded w-full">
                      <div className="flex sm:flex-col flex-row gap-6 items-start justify-start my-2 w-[70%] md:w-full">
                        <Img
                          className="h-9 w-9"
                          src="images/img_search.svg"
                          alt="search"
                        />
                        <div className="flex flex-col gap-[22px] items-start justify-start pt-0.5 w-[89%] sm:w-full">
                          <div className="flex flex-row gap-4 items-start justify-start w-[42%] md:w-full">
                            <Text
                              className="mt-[3px] text-black-900_01 text-xl"
                              size="txtGilroyMedium20"
                            >
                              Jone Cooper
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] mb-0.5 min-w-[54px] rounded text-center text-sm"
                              shape="round"
                              color="blue_gray_100"
                              size="xs"
                              variant="fill"
                            >
                              Home
                            </Button>
                          </div>
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtGilroyMedium20"
                          >
                            4517 Washington Ave. Manchester, Kentucky 39495
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-end mt-6 pt-4 px-4 rounded w-full">
                      <div className="flex sm:flex-col flex-row gap-6 items-start justify-start mt-2 w-[62%] md:w-full">
                        <Img
                          className="h-9 w-9"
                          src="images/img_search.svg"
                          alt="search One"
                        />
                        <div className="flex flex-col gap-4 items-start justify-start">
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtGilroyMedium20"
                          >
                            Jone Cooper
                          </Text>
                          <Text
                            className="text-black-900_01 text-xl"
                            size="txtGilroyMedium20"
                          >
                            4140 Parker Rd. Allentown, New Mexico 31134
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex sm:flex-col flex-row gap-6 items-start justify-start mt-[60px] pt-4 px-4 w-full">
                      <Img
                        className="h-px sm:mt-0 mt-2 w-[5%]"
                        src="images/img_plussolid.svg"
                        alt="plusSolid"
                      />
                      <Text
                        className="sm:mt-0 mt-[11px] text-black-900_01 text-xl"
                        size="txtGilroyMedium20"
                      >
                        Add Address
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[551px] p-4 rounded-lg shadow-bs1 w-[31%] md:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-[92%] md:w-full">
              <Input
                name="Group551"
                placeholder="Price Details"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_01 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="blue_gray_100"
                size="md"
                variant="underline"
              ></Input>
              <div className="flex flex-col gap-7 items-center justify-start pt-[5px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Price(2 iteam)
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtGilroyMedium18Black90001"
                  >
                    $1110.58
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Discount
                  </Text>
                  <Text
                    className="text-green-600 text-lg"
                    size="txtGilroyMedium18Green600"
                  >
                    -$111.98
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
                  size="txtGilroyMedium24"
                >
                  Total Amount
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  $1120.58
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold rounded text-base text-center w-[326px]"
              shape="round"
              color="blue_A700_01"
              size="lg"
              variant="fill"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpressDeliveryPage;
