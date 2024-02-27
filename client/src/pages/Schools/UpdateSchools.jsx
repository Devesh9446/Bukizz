import React from 'react';
import { Button, Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

function UpdateSchools({ data = {}, showModel =()=>{}}) {
    console.log("data",data);
  return (
    <div>
          <button onClick={()=>showModel(false)}>close</button>
      // this is update school

          <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:mt-0 mt-[59px] w-full">
              <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
                  size="txtGilroySemiBold32"
              >
                  Custom Form
              </Text>
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-1 items-start justify-start w-full sm:w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                          >
                              First Name
                          </Text>
                      </div>
                      <Input
                          name="InputField One"
                          placeholder="Enter Your First Name"
                          className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                          type="text"
                      ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                          >
                              Last Name
                          </Text>
                      </div>
                      <Input
                          name="InputField Two"
                          placeholder="Enter Your Last Name"
                          className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
                          type="text"
                      ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                          >
                              Email Id
                          </Text>
                      </div>
                      <Input
                          name="InputField Three"
                          placeholder="Enter Your Email Id"
                          className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
                          type="email"
                      ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                          >
                              Phone Number
                          </Text>
                      </div>
                      <Input
                          name="InputField Four"
                          placeholder="Enter Your Phone Number"
                          className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
                          type="number"
                      ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                          >
                              Password
                          </Text>
                      </div>
                      <Input
                          name="InputField Five"
                          placeholder="Enter Your Password"
                          className="font-medium p-0 placeholder:text-blue_gray-300 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100 border-solid flex md:h-auto mt-1 rounded-lg w-full sm:w-full"
                          type="password"
                          suffix={
                              <Img
                                  className="h-5 ml-[35px] mr-3 my-4"
                                  src="images/img_eye.svg"
                                  alt="eye"
                              />
                          }
                      ></Input>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                              className="text-blue_gray-900 text-lg"
                              size="txtGilroyMedium18"
                          >
                              Confirm Password
                          </Text>
                      </div>
                      <Input
                          name="language"
                          placeholder="Confirm Your Password "
                          className="font-medium p-0 placeholder:text-blue_gray-300 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-100 border-solid flex md:h-auto mt-1 rounded-lg w-full sm:w-full"
                          type="password"
                          suffix={
                              <Img
                                  className="h-5 ml-[35px] mr-3 my-4"
                                  src="images/img_eye.svg"
                                  alt="eye"
                              />
                          }
                      ></Input>
                  </div>
                  <Button className="cursor-pointer font-medium text-base text-center w-full">
                      Submit
                  </Button>
              </div>
          </div>
    </div>
  );
}

export default UpdateSchools;
