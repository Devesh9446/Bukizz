import React, { useEffect, useState } from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";
import SearchBar from "components/SearchBar/SearchBar";
import { fetchApi } from "utils/fetchApi";
import ReviewPromptModal from "modals/ReviewPrompt";
import { Toast } from "utils/swal";
import Model from "components/Model/Model";
import AddCategories from "./AddCategories";

const Categories = () => {
    const [showAddCategoriesForm, setShowAddCategoryForm] = useState(false);
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        try {
            const resp = await fetchApi('/v1/admin/category');
            console.log(resp);
            if (resp.success) {
                setCategoriesData(resp.data);
                Toast.fire({
                    icon: "success",
                    title: "Data fetched successfully",
                });
            }

        } catch (error) {
            console.log("error in fetching data", error);
            Toast.fire({
                icon: "error",
                title: "Mobile already linked with other account",
            });
        }
    }

    if (showAddCategoriesForm) {
        return <Model
            setShowModel={setShowAddCategoryForm}
            title="Add Categories"
            children={
                <AddCategories setShowModel ={setShowAddCategoryForm}/>
            }
        />
    }

    return (
        <>
            <div className="bg-gray-50_01 flex sm:flex-col md:flex-col flex-row font-gilroy gap-[30px] items-start mx-auto w-full">

                <div className="flex-1 sm:h-[1056px]  md:mt-0 mt-6 md:px-5 relative w-full">
                    <div className="absolute flex flex-col gap-6 inset-x-[0] items-center justify-start mx-auto top-[1%] w-full">
                        <div className="flex flex-row md:gap-10 items-end justify-between w-full">
                            <Text
                                className="mb-[5px] mt-4 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900"
                                size="txtGilroySemiBold28"
                            >
                                Categories
                            </Text>
                            <div className="    ">
                                <Button
                                    className="cursor-pointer font-medium min-w-[161px] rounded-md text-base text-center"
                                    color="blue_A700_01"
                                    size="lg"
                                    variant="fill"
                                    onClick={() => { setShowAddCategoryForm(true) }}
                                >
                                    Add Categories
                                </Button>
                            </div>


                        </div>
                        <div className="flex flex-col gap-[30px] items-start justify-start w-[98%] md:w-full">
                            <SearchBar />
                            {/* <div className="flex flex-col gap-6 items-center justify-start my-0 w-full">
                                {categoriesData.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                                            <div className="flex flex-row gap-2 items-center justify-start rounded-[3px] w-1/5 md:w-full">
                                                <Img
                                                    className="h-[50px] md:h-auto object-cover rounded-[3px] w-[50px]"
                                                    src={item.image}
                                                    alt="unsplashEnrurZ One"
                                                />
                                                <Text
                                                    className="text-base text-blue_gray-900"
                                                    size="txtGilroySemiBold16Bluegray900"
                                                >
                                                    {item.name}
                                                </Text>
                                            </div>
                                            <Text
                                                className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                                                size="txtGilroyMedium16BlueA70001"
                                            >
                                                {item.categoryId}
                                            </Text>

                                            <Text
                                                className="md:ml-[0] ml-[60px] text-base text-blue_gray-900"
                                                size="txtGilroyMedium16Bluegray900"
                                            >
                                                {item.offers}
                                            </Text>
                                            <Text
                                                className="leading-[26.00px] md:ml-[0] ml-[49px] text-base text-blue_gray-900 w-[15%] sm:w-full"
                                                size="txtGilroyMedium16Bluegray900"
                                            >
                                                {item.description}
                                            </Text>

                                        </div>
                                        <Line className=" bg-blue_gray-100 h-px w-full" />
                                    </div>
                                ))}
                            </div> */}
                            <div className="flex gap-20 items-center justify-start flex-wrap my-0 w-full">
                                {categoriesData.map((item, index) => (

                                    <div key={index} className="bg-white-A700 flex  gap-2 items-center justify-start p-4 rounded-[10px] shadow-bs2 w-80">
                                        <div className="w-1/5 ">
                                            <Img
                                                className="h-[60px] md:h-auto object-cover rounded-[3px] w-[60px]"
                                                src={item.image}
                                                alt="unsplashEnrurZ One"
                                            />
                                        </div>
                                        <div className="w-4/5 text-left">
                                            <div className="flex flex-row items-end justify-between w-full">
                                                <Text
                                                    className="mt-[7px] text-gray-900_01 text-lg"
                                                    size="txtGilroySemiBold18Gray90001"
                                                >
                                                    {item.name}
                                                </Text>
                                                <Text
                                                    className="md:ml-[0] ml-[30px] text-base text-blue-A700_01"
                                                    size="txtGilroyMedium16BlueA70001"
                                                >
                                                    {item.offers}
                                                </Text>
                                            </div>
                                            <Text
                                                className="leading-[20.00px] text-blue_gray-400 text-xs w-full"
                                                size="txtGilroyMedium12"
                                            >
                                                <>
                                                    {item.description}
                                                </>
                                            </Text>
                                        </div>
                                        {/* <div className="w-24 ">dalkfsdj;k</div> */}

                                    </div>

                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Categories;
