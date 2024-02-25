import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes/Routes";
import MainPage from "pages/MainPage/MainPage";

function App() {
  return (
    <ProSidebarProvider>
      {/* <Routes /> */}
      <MainPage/>
    </ProSidebarProvider>
  );
}

export default App;
