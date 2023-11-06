// GLOBAL
import React, { useState, createContext } from 'react';
import './DropDownMenu.css';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineCaretUp } from 'react-icons/ai';

// SELF
import MenuItem from '../MenuItem/MenuItem';
import MenuList from '../MenuList/MenuList';

// CONTEXT
export const ToggleContext = createContext();

const DropDownMenu = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (selected) => setValue(selected);
  const handleDropDownClick = () => setToggleOpen(!toggleOpen);
  const handleMouseEnter = () => setToggleOpen(true);
  const handleMouseLeave = () => setToggleOpen(false);

  return (
    <ToggleContext.Provider
      value={{ toggleOpen, setToggleOpen, onChange, value }}
    >
      <div
        className='container'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleDropDownClick}
      >
        <div className='input-wrapper'>
          <input
            className='input'
            value={value}
            placeholder='Choose a pattern...'
          />
          {!toggleOpen && <AiOutlineCaretDown className='arrow-icon' />}
          {toggleOpen && <AiOutlineCaretUp className='arrow-icon' />}
        </div>
        {children}
      </div>
    </ToggleContext.Provider>
  );
};

DropDownMenu.MenuList = MenuList;
DropDownMenu.MenuItem = MenuItem;

export default DropDownMenu;
