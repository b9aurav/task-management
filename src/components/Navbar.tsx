"use client";
import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { TbSearch } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="flex justify-center items-center w-[331px] m-4">
        <InputGroup className="">
          <InputLeftElement pointerEvents="none">
            <TbSearch />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
      </div>
    </div>
  );
};

export default Navbar;