"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { TbSearch } from "react-icons/tb";
import { Image } from "@chakra-ui/react";

const Navbar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchIconClick = () => {
    setIsSearchVisible(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="flex justify-between">
      <Image src="/image.png" alt="logo" width={150} />
      {/* Mobile Search */}
      <div className="md:hidden w-full p-4 flex justify-end" ref={containerRef}>
        {isSearchVisible ? (
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <TbSearch />
            </InputLeftElement>
            <Input
              ref={inputRef}
              placeholder="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
          </InputGroup>
        ) : (
          <IconButton
            onClick={handleSearchIconClick}
            aria-label="Search"
            icon={<TbSearch />}
          />
        )}
      </div>

      {/* Desktop Search */}
      <div className="flex justify-center items-center w-[331px] m-4 sm:block hidden">
        <InputGroup>
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
