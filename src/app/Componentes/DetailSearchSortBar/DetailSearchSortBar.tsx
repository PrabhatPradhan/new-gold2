'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const sortOptions = [
  'Recently Added',
  'Top Rated',
  'Lowest Price First',
  'Highest Price First',
  'Shortest Duration First',
  'Longest Duration First',
  'Alphabetical - A to Z',
];

export default function SearchSortBar() {
  const [sortBy, setSortBy] = useState('Recently Added');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-1 mb-4">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-full sm:max-w-md">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-full max-w-[200px] text-gray-700"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <span>Sort ({sortBy})</span>
            <IoIosArrowDown className="ml-2 text-gray-600" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-full sm:w-56 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {sortOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSortBy(option);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${
                    sortBy === option ? 'bg-gray-100 font-medium' : ''
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
