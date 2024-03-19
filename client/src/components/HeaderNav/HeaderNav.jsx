import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const HeaderNav = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <header className="top-auto flex items-center justify-center shadow-[0_2px_4px_0_rgba(0,0,0,.2)] md:px-5 h-[12vh] w-full z-10">
        <div className="bg-white-A700 flex flex-row items-center justify-center p-[1vh] h-full sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-between h-full w-[93%]">
            <div className="flex justify-center items-center text-lg">
              <Img
                className="h-[7vh] "
                src="images/bookizLogo.png"
                alt="Group"
              />
              Bukizz
            </div>

            <Input
              name="InputField"
              placeholder="Search Items, Customer etc"
              value={inputfieldvalue}
              onChange={(e) => setInputfieldvalue(e)}
              className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid flex items-center md:ml-[0]  md:mt-0 h-full w-[32%] md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-5 mx-3"
                  src="images/img_search_black_900.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#bac1ce"
                  className="cursor-pointer h-5 "
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
            <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans  items-end justify-start md:ml-[0] ml-[480px] my-[1vh] p-1 rounded-[50%] h-[75%]">
              <div className=" h-full   relative ">
                <Img
                  className=" bottom-[0] h-full  left-[0] "
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
            <div className="border border-blue-A700 border-solid flex flex-col  items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%]  h-[75%] ">
              <Img
                className="  rounded-[50%] h-full"
                src="images/sugam.jpeg"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNav;
