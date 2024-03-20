import React, { useEffect, useState } from "react";
import { Button, Img, Input, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";
import ImageUpload from "components/ImageUpload/ImageUpload";
import { fetchApi2 } from "utils/fetchApi";
import { Toast } from "utils/swal";

function UpdateSchools({
  data = {
    schoolId: "",
    name: "",
    address: "",
    city: "",
    state: "",
    board: "",
    pincode: "",
    contactNumber: "",
    email: "",
    website: "",
    logo: "",
    banner: "",
    aboutUs: "",
    mission: "",
    image: "",
    ourInspiration: "",
    productsId: [],
    uniformId: [],
  },
  showModel = () => {},
}) {
  //   console.log("data", data);
  const [formData, setFormData] = useState(data);
  const [product, setProduct] = useState(data.productsId);
  const [uniform, setUniform] = useState(data.uniformId);

  const getData = async () => {
    const [productResp, uniformResp] = await Promise.all([
      fetchApi2("/v1/admin/product/categoryId", {
        id: "BookSet",
      }),
      fetchApi2("/v1/admin/product/categoryId", {
        id: "Uniform",
      }),
    ]);
    if (productResp.success) {
      setProduct(productResp.data);
    }
    if (uniformResp.success) {
      setUniform(uniformResp.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Image") {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      console.log("name", name, "value", value);
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    console.log("formData", formData);
    const resp = await fetchApi2("/v1/admin/addschool", formData);
    console.log("resp", resp);
    if (resp.success) {
      // showModel(false);
      Toast.fire({
        icon: "success",
        title: "School updated successfully",
      });
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:mt-0 mt-[59px] w-[50%]">
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Add School
          </Text>
          <Button
            className="cursor-pointer rounded-full border-2 border border-red-500 p-1 text-base text-center flex items-center justify-center"
            variant="fill"
            onClick={() => showModel(false)}
          >
            <CloseSVG fillColor="red" className="w-6 h-6" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start w-full sm:w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                School Id :
              </Text>
            </div>
            <Input
              name="schoolId"
              placeholder="Enter Your School Id"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
              type="text"
              value={formData?.schoolId}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-full sm:w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                School Name :
              </Text>
            </div>
            <Input
              name="name"
              placeholder="Enter Your School Name"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
              type="text"
              value={formData?.name}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Website :
              </Text>
            </div>
            <Input
              name="website"
              placeholder="Enter Website URL"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
              type="text"
              value={formData.website}
              onChange={handleChange}
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
              name="email"
              placeholder="Enter Email Id"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
              type="email"
              value={formData.email}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Contact Number
              </Text>
            </div>
            <Input
              name="contactNumber"
              placeholder="Enter Contact Number"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
              type="text"
              value={formData.contactNumber}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Board
              </Text>
              <SelectBox
                className="font-bold   text-blue-A700_01 text-left text-lg sm:w-full"
                placeholderClassName="text-blue-A700_01"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown_blue_A701.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="board"
                options={[
                  { label: "CBSE", value: "cbse" },
                  { label: "ICSE", value: "icse" },
                ]}
                isSearchable={false}
                placeholder="Select board"
                value={formData.board}
                onChange={(data) => {
                  handleChange({ target: { name: "board", value: data } });
                }}
                size="xs"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Products :
              </Text>
              <SelectBox
                className="font-bold   text-blue-A700_01 text-left text-lg sm:w-full"
                placeholderClassName="text-blue-A700_01"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown_blue_A701.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={true}
                name="productsId"
                options={
                  product?.map((item) => ({
                    label: (
                      <div>
                        <Img
                          className="w-10"
                          src={item["set"][0]["image"][0]}
                        />{" "}
                        {item.name}
                      </div>
                    ),
                    value: item.productsId,
                  })) || []
                }
                isSearchable={true}
                placeholder="Select Product"
                value={formData.productsId}
                onChange={(data) => {
                  handleChange({ target: { name: "productsId", value: data } });
                }}
                size="xs"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Uniforms :
              </Text>
              <SelectBox
                className="font-bold   text-blue-A700_01 text-left text-lg sm:w-full"
                placeholderClassName="text-blue-A700_01"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown_blue_A701.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={true}
                name="uniformId"
                options={
                  uniform?.map((item) => ({
                    label: (
                      <div>
                        <Img
                          className="w-10"
                          src={item["set"][0]["image"][0]}
                        />{" "}
                        {item.name}
                      </div>
                    ),
                    value: item.productsId,
                  })) || []
                }
                isSearchable={true}
                placeholder="Select Uniform"
                value={formData.uniformId}
                onChange={(data) => {
                  handleChange({ target: { name: "uniformId", value: data } });
                }}
                size="xs"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Address
              </Text>
            </div>

            <div className="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full flex flex-col gap-4 p-4">
              <div className="flex flex-row items-center justify-between w-full gap-4">
                <Input
                  name="address"
                  placeholder="Enter address"
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left "
                  wrapClassName="py-1 w-full border border-blue_gray-100 rounded"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                ></Input>
                <Input
                  name="state"
                  placeholder="Enter state"
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                  wrapClassName="py-1 w-full border border-blue_gray-100 rounded"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                ></Input>
              </div>
              <div className="flex flex-row items-center justify-between w-full gap-4">
                <Input
                  name="city"
                  placeholder="Enter city"
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left "
                  wrapClassName="py-1 w-full border border-blue_gray-100 rounded"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                ></Input>
                <Input
                  name="pincode"
                  placeholder="Enter Pincode"
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                  wrapClassName="py-1 w-full border border-blue_gray-100 rounded"
                  type="text"
                  min="0"
                  max="999999"
                  value={formData.pincode}
                  onChange={handleChange}
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                About us :
              </Text>
            </div>
            <div className="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full">
              <textarea
                name="aboutUs"
                placeholder="Enter aboutUs"
                className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full border-0"
                rows={4}
                type="textarea"
                value={formData.aboutUs}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Our Inspiration :
              </Text>
            </div>
            <div className="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full">
              <textarea
                name="ourInspiration"
                placeholder="Enter our Inspiration"
                className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full border-0"
                rows={4}
                type="textarea"
                value={formData.ourInspiration}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Mission :
              </Text>
            </div>
            <div className="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full">
              <textarea
                name="mission"
                placeholder="Enter Mission"
                className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full border-0"
                rows={4}
                type="textarea"
                value={formData.mission}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex gap-4 items-center justify-start w-full p-4 w-full border border-blue_gray-100 rounded ">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Logo :
                  </Text>
                </div>
                <ImageUpload
                  name="logo"
                  placeholder=""
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                  type="file"
                  value={formData.logo}
                  onChange={handleChange}
                  uploadPath={`school_image/logo/`}
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Banner :
                  </Text>
                </div>
                <ImageUpload
                  name="banner"
                  placeholder=""
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                  type="file"
                  value={formData.banner}
                  onChange={handleChange}
                  uploadPath={`school_image/banner/`}
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroyMedium18"
                  >
                    Image :
                  </Text>
                </div>
                <ImageUpload
                  name="image"
                  placeholder=""
                  className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid  rounded-lg w-full"
                  type="file"
                  value={formData.image}
                  onChange={handleChange}
                  uploadPath={`school_image/image/`}
                />
              </div>
            </div>
          </div>

          <Button
            className="cursor-pointer font-medium min-w-[161px] rounded-md text-base text-center"
            color="blue_A700_01"
            size="lg"
            variant="fill"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
}

export default UpdateSchools;
