import React from "react";
export const SelectSVG = ({
  fillColor = "#000000",
  className = "",
  ...props
}) => {
  return (
    <svg
      height="256"
      viewBox="0 0 256 256"
      width="256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      >
        <path d="m16.000736 48.000563a31.999783 31.999783 0 0 1 31.999783-31.999781" />
        <path
          d="m-239.99926 48.000563a31.999783 31.999783 0 0 1 31.99978-31.999781"
          transform="scale(-1 1)"
        />
        <path
          d="m-239.99926-207.99947a31.999783 31.999783 0 0 1 31.99978-31.99978"
          transform="scale(-1)"
        />
        <path
          d="m16.000736-207.99947a31.999783 31.999783 0 0 1 31.999783-31.99978"
          transform="scale(1 -1)"
        />
        <path d="m239.99923 143.99987v31.9998" />
        <path d="m239.99923 80.000312v31.999798" />
        <path d="m16.000747 143.99991v31.99976" />
        <path d="m16.000751 80.000312v31.999798" />
        <path d="m112.00008 16.000744h-31.999796" />
        <path d="m175.99964 16.000748h-31.99976" />
        <path d="m112.00008 239.99922h-31.999796" />
        <path d="m175.99964 239.99922h-31.99976" />
        <path d="m96.000202 127.99999h63.999558" />
        <path d="m128 96.000192v63.999598" />
      </g>
    </svg>
  );
};
