
import React from 'react';



interface FilterButtonProps {
  options: Array<{ value: string; label: string }>;
  active: string;
  onChange: (value: string) => void;
  className?: string;
}

export const FilterButtonBar: React.FC<FilterButtonProps> = ({ options, active, onChange, className }) => (
  <div className={`flex flex-wrap gap-2.5 ${className || ''}`}>
    {options.map((option, idx) => (
      <button
        key={option.value}
        onClick={() => onChange(option.value)}
        className={`text-gray-600 text-lg md:text-xl cursor-pointer rounded-xl px-3 md:px-6 transition-all duration-300 outline-none focus:ring-0 h-12 md:h-[60px] ${
          idx === options.length - 1 ? 'mr-[30px]' : ''
        } ${
          active === option.value
            ? 'text-white bg-black border border-transparent hover:bg-transparent hover:text-black hover:border-black'
            : 'text-black border border-black hover:bg-black hover:text-white'
        }`}
        tabIndex={0}
      >
        #{option.label}
      </button>
    ))}
  </div>
);
