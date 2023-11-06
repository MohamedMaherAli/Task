import './MenuItem.css';

const MenuItem = ({ isSelected, children, ...rest }) => {
  return (
    <div
      className={`menu-item-container ${isSelected ? 'active' : ''}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MenuItem;
