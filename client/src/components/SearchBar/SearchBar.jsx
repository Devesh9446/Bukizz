import React, { useState } from "react";
import styles from "./SearchBox.module.css";
import arrowupDown from "../../assets/images/data-transfer.png";
// import filter from "../../Assets/filter.png";
// import deleteIcon from "../../Assets/delete.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import { useEffect } from "react";
import { Img, SelectBox } from "components";
import { cities } from "constants/constants";
const SearchBar = ({ query, 
  setQuery, placeholder = "Search", handleSort = () => { },
  startDateInt = "", setStartDateInt = () => { },
  endDateInt = "", setEndDateInt = () => { }, showDateFilter = true, mainContainerStyle = {},
  showCity=true ,cityOpt =[],setCityOpt= ()=>{}
}) => {

  const [startDate, setStartDate] = useState(getStandardTime(startDateInt) || "");

  const [endDate, setEndDate] = useState(getStandardTime(endDateInt) || "");
  const queryIpRef = useRef();
  const [dummyQuery, setDummyQuery] = useState(query);

  


  useEffect(() => {
    const timer = setTimeout(() => setQuery(dummyQuery), 500);


    return () => clearTimeout(timer);

  }, [dummyQuery, setQuery])

  return (
    <div
      className={`flex items-center justify-between gap-1vw p-.5vw w-full sticky`}
      style={{ ...mainContainerStyle }}
    >
      <input
        type="search"
        value={dummyQuery}
        onChange={(e) => setDummyQuery(e.target.value)}
        placeholder={placeholder}
        className={`flex-grow font-[.8vw] bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.1)] rounded-5px p-.5vw outline-none ${styles.searchBox}`}
        ref={queryIpRef}
      />
      
      {showCity && <SelectBox
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
        name="city"
        options={cities}
        isSearchable={false}
        placeholder="Select city"
        onChange={setCityOpt}
        size="xs"
      />}
      {showDateFilter && (
        <>
          <div className={`cursor-pointer flex-grow-0 h-[1.8vw]`}>
            <img src={arrowupDown} alt="pic" className="h-full" onClick={handleSort} />
          </div>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setStartDateInt(getIntDate(date));
              }}
              timeInputLabel="Time:"
              dateFormat="d/M/yy h:mm aa"
              showTimeInput
              placeholderText="From"
              className={`font-1vw bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.1)] rounded-5px p-8px`}
              isClearable={true}
              maxDate={new Date()}
            />
          </div>
          <div>
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                setEndDateInt(getIntDate(date));
              }}
              timeInputLabel="Time:"
              dateFormat="d/M/yy h:mm aa"
              showTimeInput
              placeholderText="To"
              className={`font-1vw bg-[rgba(255,255,255,0.8)] border border-[rgba(0,0,0,0.1)] rounded-5px p-8px`}
              isClearable={true}
              todayButton={"Today"}
              minDate={startDate}
              maxDate={new Date()}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;


export const getIntDate = (inputTime) => {
  if (inputTime) {

    const date = new Date(inputTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const convertedTime = `${year}${month}${day}${hours}${minutes}${seconds}`;
    return convertedTime
  } else {
    return ""
  }
}

export const getStandardTime = (inputTime) => {
  if (inputTime) {
    const year = inputTime.slice(0, 4);
    const month = inputTime.slice(4, 6);
    const day = inputTime.slice(6, 8);
    const hours = inputTime.slice(8, 10);
    const minutes = inputTime.slice(10, 12);
    const seconds = inputTime.slice(12, 14);


    const date = new Date(year, month - 1, day, hours, minutes, seconds);


    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata' };
    const convertedTime = date.toLocaleString('en-US', options);
    return convertedTime
  } else {
    return ""
  }

}