"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const StoreTools = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState({
    plantType: [],
    potType: [],
    size: [],
    lightRequirement: [],
    priceRange: [],
    color: []
  });

  // const [isFilterBoxOpen, setIsFilterBoxOpen] = useState(true);

  const [appliedFilters, setAppliedFilters] = useState({
    plantType: [],
    potType: [],
    size: [],
    lightRequirement: [],
    priceRange: [],
    color: []
  });

  const handleSelection = (category, value) => {
    setSelectedFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updatedCategory };
    });
  };

  const applyFilters = () => {
    // onApplyFilters(selectedFilters);
    // setIsFilterBoxOpen(false);
    setAppliedFilters(selectedFilters);
    setOpenFilter(false);
  };

  const clearFilters = () => {
    setSelectedFilters({
      plantType: [],
      potType: [],
      size: [],
      lightRequirement: [],
      priceRange: [],
      color: []
    });
    // onClearFilters();
    setAppliedFilters({
      plantType: [],
      potType: [],
      size: [],
      lightRequirement: [],
      priceRange: [],
      color: []
    });
  };

  const getSelectedCount = () => {
    return Object.values(selectedFilters).reduce((total, category) => total + category.length, 0);
  };

  const isSelected = (category, value) => {
    return selectedFilters[category].includes(value);
  };

  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const [isOtherDropdownOpen, setIsOtherDropdownOpen] = useState(false);

  const toggleSizeDropdown = () => {
    setIsSizeDropdownOpen(!isSizeDropdownOpen);
  };

  const toggleOtherDropdown = () => {
    setIsOtherDropdownOpen(!isOtherDropdownOpen);
  };
  
  return (
    <div className="mt-[42px] md:mt-10 w-screen">
      <div className="w-full px-[25px] py-[30px] md:px-[98px] md:py-[38px] bg-[#9A5CF50F] bg-opacity-[6%] flex flex-col justify-center items-center">
        <div className="max-w-[355px] md:max-w-full w-full text-xs md:text-xl flex justify-between">
          <div className="w-fit flex items-center">
            {/* Filter */}
            <div className="w-fit flex items-center">
              <div>
                <div
                  onClick={() => {
                    setOpenFilter(!openFilter);
                  }}
                  className="w-fit flex justify-center items-center cursor-pointer"
                >
                  <Image
                    className="object-contain"
                    src="/filter.svg"
                    alt="filter"
                    width={25}
                    height={25}
                  />
                  <p className="ml-[9px] md:ml-3 font-normal">Filter</p>
                </div>
                {openFilter && (
                  <div className="w-[307px] sm:w-[462px] h-fit border-[1px] rounded-2xl border-[#858585] bg-[#FFFFFF] absolute top-[393px] left-[10%] sm:top-[413px] sm:left-[92px] xl:top-[470px] xl:left-[202px] z-10 overflow-hidden">
                    <div className="w-full pt-[13px] pb-[17px] px-8 rounded-2xl bg-[#F5F7FF] flex flex-col justify-center items-center">
                      <p className="text-base text-[#000000] font-bold">
                        Filters
                      </p>
                      <button
                        className="absolute top-2 right-2 text-black"
                        onClick={() => setOpenFilter(false)}
                      >
                      <VscChromeClose size={24} />
                      </button>
                      {/* Clear filter button */}
                      <button className="mt-[9px] w-[236px] py-2 border-2 rounded-[50px] text-sm font-[600] text-[#A2A6B0] border-[#A2A6B0] flex justify-center items-center"
                      onClick={clearFilters}>
                        Clear Filter
                      </button>
                    </div>

                    <div className="w-full bg-white">
                      <div className="w-[462px] h-[172px] px-5 py-3 border-b border-black flex flex-col justify-start items-start gap-[30px]">
                        <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">
                          Plant type
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2.5">
                          {['Indoor Plants', 'Outdoor Plants', 'Seasonal Plants'].map((type, index) => (
                            <div
                              key={type}
                              className={`w-full flex justify-between items-center ${
                                isSelected('plantType', type) ? 'bg-blue-100' : ''
                              } cursor-pointer`}
                              onClick={() => handleSelection('plantType', type)}
                              style={{ gap: index === 0 ? '324px' : index === 1 ? '312px' : '306px' }}
                            >
                              <div className="text-black text-[13px] font-normal font-['Poppins'] leading-7">
                                {type}
                              </div>
                              <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">
                                2
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="h-[246px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
                      <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Pot Type</div>
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                          {['Hydroponics', 'Traditional', 'FRP', 'Ceramic'].map((type) => (
                            <div
                              key={type}
                              className={`w-[417px] justify-start items-start gap-[324px] inline-flex ${isSelected('potType', type) ? 'bg-blue-100' : ''}`}
                              onClick={() => handleSelection('potType', type)}
                            >
                              <div className="grow shrink basis-0 text-black text-[13px] font-normal font-['Poppins'] leading-7">{type}</div>
                              <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="h-[246px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
                        <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Size</div>
                        <div className="flex-col justify-start items-start gap-2.5 flex">
                          {['Extra Small','Small', 'Medium', 'Large', 'Extra Large'].map((size) => (
                            <div
                              key={size}
                              className={`w-[417px] justify-start items-start gap-[324px] inline-flex ${isSelected('size', size) ? 'bg-blue-100' : ''}`}
                              onClick={() => handleSelection('size', size)}
                            >
                              <div className="grow shrink basis-0 text-black text-[13px] font-normal font-['Poppins'] leading-7">{size}</div>
                              <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    
                      <div className="h-[172px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
                        <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Light Requirement</div>
                          <div className="flex-col justify-start items-start gap-2.5 flex">
                            {['More', 'Medium', 'Less'].map((requirement) => (
                              <div
                                key={requirement}
                                className={`w-[417px] justify-start items-start gap-[324px] inline-flex ${isSelected('lightRequirement', requirement) ? 'bg-blue-100' : ''}`}
                                onClick={() => handleSelection('lightRequirement', requirement)}
                              >
                                <div className="grow shrink basis-0 text-black text-[13px] font-normal font-['Poppins'] leading-7">{requirement}</div>
                                <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="h-[135px] px-5 py-3 border-b border-black flex-col justify-start items-start gap-[30px] flex">
                          <div className="text-violet-500 text-sm font-semibold font-['Urbanist']">Price Range</div>
                          <div className="flex-col justify-start items-start gap-2.5 flex">
                            {['RS.100 - RS.1000'].map((range) => (
                              <div
                                key={range}
                                className={`w-[417px] justify-between items-start inline-flex ${isSelected('priceRange', range) ? 'bg-blue-100' : ''}`}
                                onClick={() => handleSelection('priceRange', range)}
                              >
                                <div className="text-black text-[13px] font-normal font-['Poppins'] leading-7">{range}</div>
                                <div className="text-right text-black text-[13px] font-normal font-['Poppins'] leading-7">2</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="w-[462px] h-[90px] relative">
                          <div className="w-[462px] h-[90px] left-0 top-0 absolute" />
                          <div className="w-[31.59px] h-4 left-[396.85px] top-[18px] absolute" />
                          <div className="w-[416.59px] h-[50px] left-[31.59px] top-0 absolute text-black text-sm font-semibold font-['Poppins']">Color</div>
                          <div
                            className={`w-[45.41px] h-[23px] left-[31.59px] top-[50px] absolute rounded-[20px] ${isSelected('color', 'black') ? 'border-2 border-blue-500' : ''}`}
                            onClick={() => handleSelection('color', 'black')}
                            style={{ backgroundColor: 'black' }}
                          />
                          <div
                            className={`w-[45.41px] h-[23px] left-[157.95px] top-[50px] absolute rounded-[20px] ${isSelected('color', 'blue') ? 'border-2 border-blue-500' : ''}`}
                            onClick={() => handleSelection('color', 'blue')}
                            style={{ backgroundColor: 'blue' }}
                          />
                          <div
                            className={`w-[45.41px] h-[23px] left-[217.18px] top-[50px] absolute rounded-[20px] ${isSelected('color', 'fuchsia') ? 'border-2 border-blue-500' : ''}`}
                            onClick={() => handleSelection('color', 'fuchsia')}
                            style={{ backgroundColor: 'fuchsia' }}
                          />
                          <div
                            className={`w-[45.41px] h-[23px] left-[90.82px] top-[50px] absolute rounded-[20px] ${isSelected('color', 'red') ? 'border-2 border-blue-500' : ''}`}
                            onClick={() => handleSelection('color', 'red')}
                            style={{ backgroundColor: 'red' }}
                          />
                        </div>

                      <div className="w-full px-5 py-5">
                        <div className="w-full flex justify-between items-center">
                          <p className="text-sm font-bold text-[#000000]">
                            Filter Name
                          </p>

                          <RiArrowDownSLine />
                        </div>

                        <button className="mt-[10px] w-full py-2 text-sm font-[600] text-[#FFFFFF] rounded-[50px] flex flex-col justify-center items-center bg-primaryMain"
                        onClick={applyFilters} >
                           Apply Filters ({getSelectedCount()})
                        </button>
                      </div> 
                    </div>
                  </div>
                )}
              </div>
              <Image
                className="object-contain hidden md:flex ml-[24px]"
                src="/gridRound.svg"
                alt="gridRound"
                width={28}
                height={28}
              />
              <Image
                className="object-contain hidden md:flex ml-[24px]"
                src="/list.svg"
                alt="list"
                width={24}
                height={24}
              />
            </div>

            <div className="hidden md:flex ml-[30px] mr-[34px] w-[2px] h-[37px] bg-[#9F9F9F]" />

            <div className="w-fit hidden md:flex items-center">
              <p className="ml-[9px] text-base font-normal">
                Showing 1–16 of 32 results
              </p>
            </div>
          </div>

          {/* Sort by, Default */}
          <div className="w-fit flex xl:gap-[29px] justify-center items-center">
            <div className="w-fit hidden lg:flex justify-end items-center">
              <p className="font-normal mr-[20px]">Show</p>
              <p className="px-[18px] py-3 rounded-full font-normal bg-white flex justify-center items-center">
                16
              </p>
            </div>

            <div className="w-fit flex md:hidden lg:flex justify-end items-center">
              <p className="font-normal mr-[20px]">Sort by</p>
              <p className="px-8 py-3 rounded-[53px] font-normal bg-white flex justify-center items-center">
                Default
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 hidden w-full px-8 md:flex lg:hidden gap-[29px] justify-end items-center">
        <div className="w-fit flex justify-end items-center">
          <p className="font-normal mr-[20px]">Show</p>
          <p className="px-[18px] py-3 rounded-full font-normal bg-white flex justify-center items-center">
            16
          </p>
        </div>

        <div className="w-fit flex justify-end items-center">
          <p className="font-normal mr-[20px]">Sort by</p>
          <p className="px-8 py-3 rounded-[53px] font-normal bg-white flex justify-center items-center">
            Default
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreTools;
