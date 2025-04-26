"use client";
import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { TbSearch } from "react-icons/tb";

const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <div className="flex flex-col items-end">
      <div className="flex justify-center items-center w-[331px] m-8">
        <InputGroup className="">
          <InputLeftElement pointerEvents="none">
            <TbSearch />
          </InputLeftElement>
          <Input
            placeholder="Search"
            onChange={(e) => onSearch(e.target.value)}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default Navbar;
