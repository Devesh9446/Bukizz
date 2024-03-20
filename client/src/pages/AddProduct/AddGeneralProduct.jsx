import React, { useEffect, useState } from "react";
import { Button, Img, Input, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";
import ImageUpload from "components/ImageUpload/ImageUpload";
import ArrayInput from "components/ArrayInput/ArrayInput";
import { Toast } from "utils/swal";
import { axiosApi, fetchApi, fetchApi2 } from "utils/fetchApi";

function AddGeneralProduct({}) {
  const [category, setCategory] = useState([]);
  const [retailers, setRetailers] = useState([]);

  const fetchRetailers = async () => {
    try {
      const resp = await fetchApi("/v1/admin/getretailer");
      if (resp.success) {
        console.log(resp.data);
        setRetailers(resp.data);
      } else {
        console.error("Error fetching retailers:", resp.error);
        Toast.fire({
          icon: "error",
          title: "Failed to fetch retailers",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Toast.fire({
        icon: "error",
        title: "An error occurred",
      });
    }
  };

  const fetchCategory = async () => {
    try {
      const resp = await fetchApi("/v1/admin/category");
      if (resp.success) {
        // console.log(resp.data);
        setCategory(resp.data);
      } else {
        console.error("Error fetching category:", resp.error);
        Toast.fire({
          icon: "error",
          title: "Failed to fetch category",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Toast.fire({
        icon: "error",
        title: "An error occurred",
      });
    }
  };
  useEffect(() => {
    fetchCategory();
    fetchRetailers();
  }, []);

  const [formData, setFormData] = useState({
    city: [],
    productId: "",
    name: "",
    description: "",
    categoryId: "",
    brand: "",
    // board: "CBSE",
    retailerId: "",
    // stream: [],
    // set: [],
    // reviewList: [],
    variation: [],
    deliveryCharge: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Image") {
      setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    console.log(formData);
  };
  const handleSubmit = async () => {
    // Basic form validation
    if (
      !formData.productId ||
      !formData.name ||
      !formData.categoryId ||
      !formData.brand ||
      !formData.retailerId
    ) {
      Toast.fire({
        icon: "error",
        title: "Please fill all fields",
      });
      return;
    }

    try {
        const resp = await fetchApi2("/v1/admin/addgeneralproduct", formData);
    //   console.log("Product added successfully:", formData);

        if (resp.success) {
          // Product added successfully
          console.log("Product added successfully:", resp.data);
          Toast.fire({
            icon: "success",
            title: "Product added successfully",
          });

        } else {
          // Handle API errors
          console.error("Error adding product:", resp.error);
          Toast.fire({
            icon: "error",
            title: "Failed to add product",
          });
        }
    } catch (error) {
      // Handle fetch API errors
      console.error("Error:", error);
      Toast.fire({
        icon: "error",
        title: "An error occurred",
      });
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:mt-0 mt-[59px] w-full py-8">
        <Text
          className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
          size="txtGilroySemiBold32"
        >
          Add Product
        </Text>
        <div className="flex flex-col gap-4 items-center justify-start w-[50%]">
          <div className="flex flex-col gap-1 items-start justify-start w-full sm:w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Product Name :
              </Text>
            </div>
            <Input
              name="name"
              placeholder="Enter Your Product Name"
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
                Product Id :
              </Text>
            </div>
            <Input
              name="productId"
              placeholder="Enter Product Id"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
              type="text"
              value={formData.productId}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                City :
              </Text>
            </div>
            <ArrayInput
              name="city"
              placeholder="Add city"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
              type="text"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Brand :
              </Text>
            </div>
            <Input
              name="brand"
              placeholder="Enter Brand"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
              type="text"
              value={formData.brand}
              onChange={handleChange}
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Delivery Charge:
              </Text>
            </div>
            <Input
              name="deliveryCharge"
              placeholder="Enter deliveryCharge"
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
              type="number"
              value={formData.deliveryCharge}
              onChange={handleChange}
            ></Input>
          </div>
          {/* <div className="flex flex-col items-center justify-start w-full">
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
                  { label: "CBSE", value: "CBSE" },
                  { label: "ICSE", value: "ICSE" },
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
          </div> */}
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                Category Id
              </Text>
              <SelectBox
                className="font-bold   text-blue-A700_01 text-left text-lg w-[50%]"
                placeholderClassName="text-blue-A700_01"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown_blue_A701.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="categoryId"
                options={category.map((cat) => {
                  return {
                    label: cat.name + " : " + cat.categoryId,
                    value: cat.categoryId,
                  };
                })}
                isSearchable={false}
                placeholder="Select Category Id"
                value={formData.categoryId}
                onChange={(data) => {
                  handleChange({ target: { name: "categoryId", value: data } });
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
                Retailer Id
              </Text>
              <SelectBox
                className="font-bold   text-blue-A700_01 text-left text-lg w-[50%]"
                placeholderClassName="text-blue-A700_01"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown_blue_A701.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="retailerId"
                options={
                  retailers &&
                  retailers.map((retailer) => {
                    return {
                      label: retailer.name + " : ( " + retailer.schools + " )",
                      value: retailer.id,
                    };
                  })
                }
                isSearchable={false}
                placeholder="Select RetailerId"
                value={formData.retailerId}
                onChange={(data) => {
                  handleChange({ target: { name: "retailerId", value: data } });
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
                Variants :
              </Text>
            </div>
            <Variants
              name="variation"
              value={formData.variation}
              onChange={handleChange}
              className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
            />
          </div>

          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtGilroyMedium18"
              >
                description :
              </Text>
            </div>
            <div className="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full">
              <textarea
                name="description"
                placeholder="Enter aboutUs"
                className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full border-0"
                rows={4}
                type="textarea"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
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

export default AddGeneralProduct;

const Variants = (
    { name, value, wrapClassName, onChange = () => {} },
    ...props
) => {
    const [variants, setVariants] = useState(
        value || [
            {
                image: [],
                name: "",
                price: 0,
                reviewList: [],
                salePrice: 0,
                sku: 0,
            },
        ]
    );

    const handlePriceChange = (setIndex, event) => {
        const updatedVariants = [...variants];
        if (!updatedVariants[setIndex]) {
            updatedVariants[setIndex] = {};
        }
        const { name: fieldName, value: fieldValue } = event.target;

        updatedVariants[setIndex] = {
            ...updatedVariants[setIndex],
            [fieldName]: fieldValue,
        };

        setVariants(updatedVariants);
        onChange({ target: { name: name, value: updatedVariants } });
    };

    return (
        <div className={`${wrapClassName} px-3.5`}>
            {variants.map((variant, setIndex) => {
                return (
                  <div
                    key={setIndex}
                    className={`${wrapClassName} px-3.5 flex  gap-4 items-start justify-start w-full`}
                  >
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Variant Name :
                        </Text>
                      </div>
                      <Input
                        name="name"
                        placeholder="Enter Your Variant Name"
                        className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                        type="text"
                        value={variant?.name}
                        onChange={(e) => handlePriceChange(setIndex, e)}
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Price :
                        </Text>
                      </div>
                      <Input
                        name="price"
                        placeholder="Enter Your Price"
                        className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                        type="number"
                        value={variant?.price}
                        onChange={(e) => handlePriceChange(setIndex, e)}
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Sale Price :
                        </Text>
                      </div>
                      <Input
                        name="salePrice"
                        placeholder="Enter Your Sale Price"
                        className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                        type="number"
                        value={variant?.salePrice}
                        onChange={(e) => handlePriceChange(setIndex, e)}
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18"
                        >
                          SKU :
                        </Text>
                      </div>
                      <Input
                        name="sku"
                        placeholder="Enter sku"
                        className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                        type="number"
                        value={variant?.sku}
                        onChange={(e) => handlePriceChange(setIndex, e)}
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
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
                        placeholder="Enter image"
                        className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-60"
                        wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
                        type="file"
                        allowMultiple={true}
                        value={variant?.image}
                        onChange={(e) => handlePriceChange(setIndex, e)}
                        uploadPath={`product_image/general_product/variation/`}
                      />
                    </div>
                  </div>
                );
            })}

            <div className="flex items-center justify-start w-full">
                <Button
                    className="cursor-pointer font-medium min-w-[161px] rounded-md text-base text-center"
                    color="blue_A700_01"
                    size="lg"
                    variant="fill"
                    onClick={() => {
                        var temp = [...variants];
                        temp.push({
                            image: [],
                            name: "",
                            price: 0,
                            reviewList: [],
                            salePrice: 0,
                            sku: 0,
                        });
                        setVariants(temp);
                        onChange({ target: { name: name, value: temp } });
                    }}
                >
                    Add Variant
                </Button>
                <Button
                    className="cursor-pointer font-medium min-w-[161px] rounded-md text-base text-center"
                    color="blue_A700_01"
                    size="lg"
                    variant="fill"
                    onClick={() => {
                        var temp = [...variants];
                        temp.pop();
                        setVariants(temp);
                        onChange({ target: { name: name, value: temp } });
                    }}
                >

                    Remove Variant
                </Button>

            </div>
        </div>
    );
};
