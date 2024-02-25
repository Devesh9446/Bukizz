import React from 'react';
import HeaderNav from 'components/HeaderNav/HeaderNav';
import SideBar from 'components/SideBar/SideBar';
import Routes from "Routes/Routes";

function MainPage() {
    return (
        <div className="fixed bg-gray-50 flex flex-col font-gilroy items-center justify-between mx-auto + w-full h-screen">
            <HeaderNav />
            {/* <div className='h-[90vh]'></div> */}
            <div className=" flex md:flex-col flex-row h-[88vh]  gap-8 items-start justify-between mx-auto md:px-5 w-full">
                <SideBar />
                <div className=" flex flex-1 flex-col h-full overflow-auto !sticky items-center justify-start w-full">
                    <Routes />
                </div>
            </div>
        </div>
    );
}

export default MainPage;
