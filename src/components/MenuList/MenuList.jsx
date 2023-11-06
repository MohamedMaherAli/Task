// GLOBAL
import React, { useContext } from 'react';
import './MenuList.css';

// SELF
import { ToggleContext } from '../DropDownMenu/DropDownMenu';

const MenuList = ({ children }) => {
  const { toggleOpen, setToggleOpen, onChange, value } =
    useContext(ToggleContext);

  const handleMenuItemClick = (child) => (e) => {
    onChange(child.props.value);
    setToggleOpen(false);
  };
  return (
    <div className={`menu-list-container ${toggleOpen ? 'active' : ''}`}>
      {toggleOpen && (
        <div>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              ...child.props,
              onClick: handleMenuItemClick(child),
              isSelected: value === child.props.value,
            })
          )}
        </div>
      )}
    </div>
  );
};

export default MenuList;
