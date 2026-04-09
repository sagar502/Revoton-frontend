import React from "react";

const TopHeader = () => {
  return (
    
        <div className="bg-[#0f3d3a] text-white text-sm w-full overflow-hidden">

      <div className="flex items-center px-6 py-2 gap-16">
        <div className="whitespace-nowrap">
          +91 9328295446
        </div>
        <div className="hidden md:block whitespace-nowrap text-gray-300">
          sales@revoton.com
        </div>

        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-blue to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0f172a] to-transparent z-10" />
<div className="marquee-track flex justify-center">
<div className="marquee-content flex gap-10 whitespace-nowrap">

  <span>India’s steel prices are rising due to strong demand and shortage of scrap materials, even as global trade remains slow and uncertain</span>

  <span>Jindal Steel has introduced advanced coal gasification technology, reducing dependency on imported fuel and improving cost efficiency in steel production</span>

  <span>Steel Authority of India (SAIL) has crossed 20 million tonnes sales in FY 2026, showing strong growth in production and market demand</span>

  <span>RINL recorded a 22% increase in turnover with significant growth in steel production and sales performance this year</span>

</div>
</div>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;