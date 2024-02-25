import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Text } from "components";

const ReviewPromptModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[37%]"
      overlayClassName="bg-black-900_b2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start p-4 md:px-5 rounded-md w-full">
          <div className="flex flex-col gap-6 items-center justify-start mt-2 pt-[7px] w-1/2 md:w-full">
            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroySemiBold18Bluegray900"
              >
                Write your Review
              </Text>
              <Text
                className="text-base text-blue_gray-400"
                size="txtGilroyRegular16"
              >
                Are you satisfied with the service?
              </Text>
            </div>
            <Img
              className="h-8 w-[92%]"
              src="images/img_frame9844.svg"
              alt="Frame9844"
            />
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start mb-2 w-full">
            <div className="bg-white-A700 border border-blue_gray-50 border-solid flex flex-col md:gap-10 gap-[89px] justify-end p-[7px] rounded-lg w-full">
              <Text
                className="md:ml-[0] ml-[5px] mr-[220px] mt-2.5 text-base text-blue_gray-200"
                size="txtGilroyMedium16Bluegray200"
              >
                Describe your experience (optional)
              </Text>
              <Img
                className="h-4 md:ml-[0] ml-[470px] w-4"
                src="images/img_edit.svg"
                alt="edit"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
              <Button
                className="cursor-pointer font-medium h-[50px] rounded-md text-base text-center w-[242px]"
                color="blue_A700_01"
                size="lg"
                variant="outline"
              >
                Not Now
              </Button>
              <Button
                className="cursor-pointer font-medium rounded-md text-base text-center w-[242px]"
                color="blue_A700_01"
                size="lg"
                variant="fill"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ReviewPromptModal;
