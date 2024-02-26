import React, { useState } from 'react';
import { Sidebar } from 'react-pro-sidebar';
import { Img, Line, Text } from "components";
import List from 'Routes/List';
import { useNavigate } from 'react-router-dom';
function SideBar() {
    const navigate = useNavigate();
    const [active, setActive] = useState(0);
    const [navWidth, setNavWidth] = useState(0);


    const handleClick = (index, path) => {
        setActive(index);
        navigate(path);
    }

    return (
        <Sidebar className="!w-[3%] hover:!w-[16%] flex h-full md:hidden justify-start overflow-auto top-[0]">
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[441px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                    {List.map((elem, index) => (
                        (active !== index) ?

                            <div key={index} onClick={() => { handleClick(index, elem.path) }} className="flex flex-col items-start justify-start p-2 w-full cursor-pointer">
                                <div className="flex flex-row gap-2 items-start justify-start my-[9px]  md:w-full">
                                    <Img
                                        className="h-6 w-6"
                                        src={elem.icon}
                                        alt={elem.title}
                                    />
                                    <Text
                                        className="mt-[3px] text-base text-blue_gray-700"
                                        size="txtGilroySemiBold16"
                                    >
                                        {elem.title}
                                    </Text>
                                </div>
                            </div>
                            :
                            <div key={index} className="flex flex-row gap-1.5 items-center justify-start pr-[17px] py-[17px] w-full">
                                <Line className="bg-blue-A700_01 h-6 w-0.5" />
                                <div className="flex flex-row gap-2 items-start justify-start ">
                                    <Img
                                        className="h-6 w-6"
                                        src={elem.icon}
                                        alt={elem.title}
                                    />
                                    <Text
                                        className="mt-[3px] text-base text-blue-A700_01"
                                        size="txtGilroySemiBold16BlueA70001"
                                    >
                                        {elem.title}
                                    </Text>
                                </div>
                            </div>
                    ))}
                
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                    <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                        <Img
                            className="h-6 w-6"
                            src="images/img_question.svg"
                            alt="question"
                        />
                        <Text
                            className="mt-[5px] text-base text-blue_gray-700"
                            size="txtOpenSansRomanSemiBold16"
                        >
                            Help
                        </Text>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}

export default SideBar;
