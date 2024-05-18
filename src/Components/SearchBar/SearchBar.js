import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";


const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-transparent px-5">
      <div className="container mx-auto flex justify-end items-center">



        <div
          className={`flex  items-center mr-4  transition-all duration-300 ${
            isExpanded ? 'w-full' : 'w-20'
          }`}
        >
          <div>
          <input
            type="text"
            placeholder="Titles, people, genres"
            className={`bg-transparent h-9 text-white px-4  focus:outline-none focus:ring-1 focus:ring-[#1d1d1d] focus:border-gray-300 transition-all duration-300 ${
              isExpanded ? 'w-full opacity-85 bg-gray-950' : 'w-0 opacity-0 bg-opacity-0'
            }`}
          />
          </div>



          <div
            className="right-4 cursor-pointer"
            onClick={handleSearchIconClick}
          >
            <IoSearch className='size-6 text-white mx-3' /> 
          </div>




        </div>
      </div>
    </div>
  );
};

export default SearchBar;
