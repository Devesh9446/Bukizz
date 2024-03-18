import React, { useEffect, useState } from "react";
import { Button, Img, Line, Text } from "components";
import { useLocation } from "react-router-dom";
import { fetchApi, fetchApi2 } from "utils/fetchApi";
import { Toast } from "utils/swal";

const OrderDetails = () => {
  const { state } = useLocation();
  const [orderData, setOrderData] = useState(null);
  const [user, setUser] = useState();
  const [product, setProduct] = useState();
  const [schoolname, setSchoolname] = useState(Object.keys(state.cartData)[0]);
  const [productId, setProductId] = useState(
    Object.keys(state.cartData[schoolname])[0]
  );
  const [set, setSet] = useState(
    Object.keys(state.cartData[schoolname][productId])[0]
  );
  const [stream, setStream] = useState(
    Object.keys(state.cartData[schoolname][productId][set])[0]
  );
  const [sigleProduct, setSingleProduct] = useState();
  const orderStatus = [
    "Initiated",
    "Processed",
    "Packed",
    "Out For Delivery",
    "Delivered",
    "Replacement",
    "Not Placed ",
    "Cancelled",
  ];
  const [trackNum, setTrackNum] = useState(
    orderStatus.findIndex((item) => item === state?.status)
  );

  useEffect(() => {
    console.log("data :", state);
    getData();
  }, [state]);
  const getData = async () => {
    try {
      const [userData, productData, orderDat] = await Promise.all([
        fetchApi2("/v1/admin/user/readOne", { userId: state.userId }),
        fetchApi2("/v1/admin/product/readOne", { productId: productId }),
        fetchApi2("/v1/admin/orders/readOne", { orderId: state.orderId }),
      ]);
      console.log("Product data", productData);
      // console.log("user data", userData);
      if (userData) {
        setUser(userData.data);
      }
      const setIndex = productData.data[0].set.findIndex(
        (item) => item.name === set
      );
      const streamIndex = productData.data[0].stream.findIndex(
        (item) => item.name === stream
      );
      // console.log(setIndex, streamIndex);
      const temp =
        productData.data[0]?.variation[setIndex == -1 ? 0 : setIndex][
          streamIndex == -1 ? 0 : streamIndex
        ];
      // console.log("temp : ", temp);
      if (productData) {
        setProduct(productData.data[0]);
        setSingleProduct(temp);
      }

      if (orderDat) {
        setOrderData(orderDat.data[0]);
        const order = orderDat.data[0];
        const updatedSchoolName = Object.keys(order.cartData)[0];
        const updatedProductId = Object.keys(
          order.cartData[updatedSchoolName]
        )[0];
        const updatedSet = Object.keys(
          order.cartData[updatedSchoolName][updatedProductId]
        )[0];
        const updatedStream = Object.keys(
          order.cartData[updatedSchoolName][updatedProductId][updatedSet]
        )[0];
        const updatedTracknum = orderStatus.findIndex(
          (item) => item === order?.status
        );
        // Now, update the state with the extracted values
        setSchoolname(updatedSchoolName);
        setProductId(updatedProductId);
        setSet(updatedSet);
        setStream(updatedStream);
        setTrackNum(updatedTracknum);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const handleRetailer = async () => {
    try {
      const data = {
        orderId: state.orderId,
        retailerId: product.retailerId,
        // retailerId: "hi govind ji"
      };
      const resp = await fetchApi2("/v1/admin/orders/sendtoretailer", data);
      if (resp.success) {
        Toast.fire({
          icon: "success",
          title: "Order sent to retailer",
        });
        getData();
      }
    } catch (error) {
      console.log("error sending to retailer", error);
      Toast.fire({
        icon: "error",
        title: "error sending to retailer",
      });
    }
  };
  return (
    <div className="flex flex-col font-opensans gap-[30px] items-center justify-start max-w-[1268px] mx-auto md:px-5 w-full">
      <div className="bg-white-A700 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-md shadow-bs1 w-full">
        <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
          <Img
            className="h-[180px] md:h-auto object-cover rounded w-[180px]"
            src={sigleProduct?.image[0]}
            alt="pngwingOne"
          />
          <div className="flex md:flex-1 flex-col items-start justify-start w-[60%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtOpenSansMedium24"
              >
                {schoolname}
              </Text>
            </div>
            <Text
              className="mt-5 text-blue_gray-400 text-xl"
              size="txtOpenSansMedium20"
            >
              {product?.name}
            </Text>
            <div className="flex flex-row items-center justify-start mt-[18px] w-[10%] md:w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtOpenSansMedium18"
              >
                set:
              </Text>
              <Text
                className="ml-1 text-blue_gray-400 text-lg"
                size="txtOpenSansMedium18Bluegray400"
              >
                {set}
              </Text>
            </div>
            <div className="flex flex-row items-center justify-start mt-[18px] w-[10%] md:w-full">
              <Text
                className="text-blue_gray-900 text-lg"
                size="txtOpenSansMedium18"
              >
                stream:
              </Text>
              <Text
                className="ml-1 text-blue_gray-400 text-lg"
                size="txtOpenSansMedium18Bluegray400"
              >
                {stream}
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-end justify-start mt-[17px] w-[16%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtOpenSansMedium24"
              >
                <span className="text-colors2 font-opensans text-left font-semibold">
                  ₹
                </span>
                <span className="text-colors3 font-opensans text-left font-semibold">
                  {sigleProduct?.salePrice}
                </span>
              </Text>
              <Text
                className="line-through mt-[11px] text-base text-blue_gray-400"
                size="txtOpenSansMedium16"
              >
                <span className="text-colors4 font-opensans text-left font-semibold">
                  $
                </span>
                <span className="text-colors4 font-opensans text-left font-semibold">
                  {sigleProduct?.price}
                </span>
              </Text>
            </div>
          </div>
          {user && (
            <div className="flex md:flex-1 flex-col items-start justify-start w-[30%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                  size="txtOpenSansMedium24"
                >
                  {user.name}
                </Text>
              </div>
              <Text
                className="mt-5 text-blue_gray-400 text-xl"
                size="txtOpenSansMedium20"
              >
                {user.email} , {user.mobile}
              </Text>
            </div>
          )}
        </div>
      </div>
      {orderData && (
        <div className="flex md:flex-col flex-row font-gilroy gap-[29px] items-start justify-between w-full">
          <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[60%] md:w-full">
            <div className="bg-white-A700 flex flex-col gap-[37px] items-start justify-start p-4 rounded-md shadow-bs1 w-full">
              <div className="flex flex-col gap-[15px] items-center justify-start ml-3.5 md:ml-[0] w-[93%] md:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtGilroyMedium24"
                  >
                    Order Summary
                  </Text>
                  <Line className="bg-blue_gray-100 h-px w-full" />
                </div>
                <div className="flex flex-col gap-7 items-center justify-end w-full">
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      email
                    </Text>
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      {state.address.email}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      address
                    </Text>
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      {orderData?.address.houseNo} - {orderData?.address.street}{" "}
                      ,{orderData?.address.city}, {orderData?.address.orderData}{" "}
                      - {orderData?.address.pinCode}
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
                <div className="flex flex-col gap-7 items-center justify-end w-full">
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Order Id
                    </Text>
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      {orderData?.orderId}
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Order Name
                    </Text>
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      {orderData?.orderName}
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Transaction Id
                    </Text>
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      {orderData?.transactionId}
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
                <div className="flex flex-col gap-7 items-center justify-end w-full">
                  <div className="flex flex-row items-center justify-between mt-[5px] w-full">
                    <Text
                      className="text-blue_gray-400 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Price (2 items)
                    </Text>
                    <Text
                      className="text-black-900_01 text-lg"
                      size="txtGilroyMedium18Black90001"
                    >
                      ₹{orderData?.saleAmount}
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
                      ₹{orderData?.deliveryCharge}
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray-100 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtGilroySemiBold24Black90001"
                  >
                    Total Payment
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                    size="txtGilroySemiBold24Black90001"
                  >
                    ₹{orderData?.saleAmount + orderData?.deliveryCharge}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[29px] items-start justify-start mb-1.5 ml-3.5 md:ml-[0]">
                <Text
                  className="text-blue-A700_01 text-lg"
                  size="txtGilroyMedium18BlueA70001"
                >
                  Cancel this order
                </Text>
                <Text
                  className="text-blue-A700_01 text-lg"
                  size="txtGilroyMedium18BlueA70001"
                >
                  View order destails
                </Text>
              </div>
            </div>
            {trackNum == 0 && (
              <Button
                className="cursor-pointer font-semibold rounded text-base text-center w-[386px]"
                shape="round"
                color="blue_A700_01"
                size="lg"
                variant="fill"
                onClick={() => handleRetailer()}
              >
                send to Retailer
              </Button>
            )}
          </div>

          <div className="bg-white-A700 flex md:flex-1 flex-col gap-[30px] justify-start p-[29px] sm:px-5 rounded-md shadow-bs1 w-[35%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
              size="txtGilroyMedium24"
            >
              Track your order
            </Text>
            <div className="flex flex-row gap-4 items-center  justify-start md:ml-[0] ml-[78px] mr-[405px] w-2/5 md:w-full">
              <div className=" h-[450px] relative w-[8%] ">
                <Line className="absolute bg-blue_gray-100 h-[450px] inset-[0] justify-center m-auto w-1" />

                <div className="absolute flex flex-col inset-[0] items-center justify-between w-[84%]">
                  {orderStatus.map((item, index) => (
                    <div key={index}>
                      {trackNum >= index ? (
                        <Button
                          className=" flex h-6 inset-x-[0] items-center justify-center mx-auto outline outline-[1.5px] outline-gray-50 rounded-[50%]  w-6"
                          shape="circle"
                          color="blue_A700_01"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-4"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        </Button>
                      ) : (
                        <div className="bg-gray-50 h-5 outline outline-[1.5px] outline-blue_gray-100 rounded-[50%] w-5"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* <div className="absolute bg-gray-50 bottom-[0] h-5 inset-x-[0] mx-auto outline outline-[1.5px] outline-blue_gray-100 rounded-[50%] w-5"></div> */}
              </div>
              <div className="flex flex-col items-start justify-between h-[450px]">
                {orderStatus.map((item, index) => (
                  <Text
                    key={index}
                    className={
                      trackNum >= index
                        ? "text-base text-blue-800"
                        : "text-base text-blue_gray-200"
                    }
                    size={
                      trackNum <= index
                        ? "txtGilroySemiBold16Blue800"
                        : "txtGilroySemiBold16Bluegray200"
                    }
                  >
                    {item}
                  </Text>
                ))}
                {/* <Text
                                className="text-base text-blue-800"
                                size="txtGilroySemiBold16Blue800"
                            >
                                Order placed
                            </Text>

                            <Text
                                className=" text-base text-blue_gray-200"
                                size="txtGilroySemiBold16Bluegray200"
                            >
                                Order Processed
                            </Text>
                            <Text
                                className="text-base text-blue_gray-200"
                                size="txtGilroySemiBold16Bluegray200"
                            >
                                Order packed
                            </Text>
                            <Text
                                className=" text-base text-blue_gray-200"
                                size="txtGilroySemiBold16Bluegray200"
                            >
                                Out for Delivery
                            </Text>
                            <Text
                                className="text-base text-blue_gray-200"
                                size="txtGilroySemiBold16Bluegray200"
                            >
                                Order Delivered
                            </Text> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
