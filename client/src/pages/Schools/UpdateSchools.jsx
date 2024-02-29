import React, { useState } from 'react';
import { Button, Img, Input, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";
import ImageUpload from 'components/ImageUpload/ImageUpload';

function UpdateSchools({ data = {}, showModel = () => { } }) {
    console.log("data", data);
    const [formData, setFormData] = useState(data);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'Image') {
            setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
        }
        else {
            setFormData((prevData) => ({ ...prevData, [name]: value }))
        }
    };
    return (
        <>
            <button onClick={() => showModel(false)}>close</button>
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
                            type="number"
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
                                    handleChange({ target: { name: 'board', value: data } })
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
                                Contact Number
                            </Text>
                        </div>
                        <Input
                            name="contactNumber"
                            placeholder="Enter Contact Number"
                            className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                            wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
                            type="number"
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
                                About us :
                            </Text>
                        </div>
                        <div className='border border-blue_gray-100 border-solid mt-1 rounded-lg w-full'>
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
                                Mission :
                            </Text>
                        </div>
                        <div className='border border-blue_gray-100 border-solid mt-1 rounded-lg w-full'>
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
                                placeholder="Enter logo"
                                className="font-medium md:h-auto p-0 placeholder:text-blue_gray-300 sm:h-auto text-base text-left w-full"
                                wrapClassName="border border-blue_gray-100 border-solid mt-1 rounded-lg w-full"
                                type="file"
                                value={formData.logo}
                                onChange={handleChange}
                                uploadPath={`school_image/`}
                            />
                        </div>

                    </div>

                    <Button className="cursor-pointer font-medium text-base text-center w-full">
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
}

export default UpdateSchools;
