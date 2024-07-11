"use client";
import React from "react";

const Switch = ({ color = "#21AAFF" }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
        style={{ backgroundColor: "var(--switch-bg-color, gray)" }}
      ></div>
      <style jsx>{`
        input:checked + div {
          --switch-bg-color: ${color};
        }
        input:not(:checked) + div {
          --switch-bg-color: gray;
        }
      `}</style>
    </label>
  );
};

export default Switch;
