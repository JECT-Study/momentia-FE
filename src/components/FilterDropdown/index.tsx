import { FC, useState } from 'react';
import Icon from '../Icon/Icon';

interface FilterDropdownProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const FilterDropdown: FC<FilterDropdownProps> = ({
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className='body2 relative inline-block text-left'>
      <button
        className='flex items-center justify-between w-[149px] h-[44px] px-[23px] py-[10px]
        text-white bg-gray-900 rounded-[5px] gap-[36px] shadow-sm
        hover:bg-gray-700 focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <span className='text-gray-300'>
          {isOpen ? (
            <Icon name='ChevronUp' size='m' />
          ) : (
            <Icon name='ChevronDown' size='m' />
          )}
        </span>
      </button>

      {isOpen && (
        <div className='w-full mt-3 bg-gray-900 rounded-[5px] shadow-lg'>
          <ul className='py-1'>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className={`block w-[149px] h-[44px] px-[23px] py-[10px] text-gray-400 cursor-pointer hover:bg-gray-700`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
