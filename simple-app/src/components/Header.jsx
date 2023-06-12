import React from "react";
import { BiSearch } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="bg-white px-2 py-3">
      <div className="container">
        <div className="text-2xl">
          <span className="text-blue-700 font-semibold">coinbase</span>
          <span className="font-semibold ml-2">NFT</span>
          <sup
            style={{ fontSize: 10, top: -20 }}
            className="bg-blue-600 text-white px-2 py-0.5 rounded-full relative"
          >
            BETA
          </sup>
        </div>
        <div className="relative ml-5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch />
          </div>
          <input
            type="text"
            className="w-full p-2 pl-10 text-gray-900 border-gray-300 rounded"
            placeholder="Search"
          />
        </div>
        <ul className="flex font-medium">
          <li>
            <a className="block py-2 pl-3 pr-4 font-semibold" />
            Discover
          </li>
          <li>
            <a className="block py-2 pl-3 pr-4 font-semibold" />
            Shop
          </li>
          <li>
            <a className="block py-2 pl-3 pr-4 font-semibold" />
            Trending
          </li>
          <li>
            <a className="block py-2 pl-3 pr-4 font-semibold" />
            Drops
          </li>
        </ul>
      </div>
    </div>
  );
};
