import React from 'react';

function Tab({
  index,
  title,
  icon,
  isActive = false,
  setActiveTab,
}: {
  index: number;
  title: string;
  icon?: React.ReactNode;
  isActive: boolean;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <button
      className={`w-full h-full flex items-center justify-center tab space-x-4 border-[#0381FF] hover:border-4 ease-in duration-200 ${
        isActive ? 'active' : ''
      }`}
      onClick={() => setActiveTab(index)}
    >
      <span className="flex items-center justify-center w-[56px] h-[56px] relative">
        <svg
          width="56"
          height="56"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="#bbb"
            strokeWidth="3"
            fill="white"
          />
          <circle
            className="circle"
            cx="50"
            cy="50"
            r="48"
            stroke="#0381FF"
            strokeWidth="3"
            fill="white"
          />
        </svg>
        {icon && React.cloneElement(icon as React.ReactElement, { isActive })}
      </span>
      <span className="text-[20px] font-[500] text-[#0B172A]">{title}</span>
    </button>
  );
}

export default Tab;
