import React from "react";

export const Header = () => {
  return (
    <div className="bg-white px-2">
      <div className="container">
        <div className="text-2xl">
          <span className="text-blue-700 font-semibold">coinbase</span>
          <span className="font-semibold ml-2">NFT</span>
          <sup
            style={{ fontSize: 10 }}
            className="bg-blue-600 text-white px-2 py-0.5"
          >BETA</sup>
        </div>
      </div>
    </div>
  );
};
