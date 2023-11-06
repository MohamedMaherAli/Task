import './App.css';
import React from 'react';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';

function App() {
  return (
    <div className='App'>
      <DropDownMenu>
        <DropDownMenu.MenuList>
          <DropDownMenu.MenuItem
            value='HOC Pattern'
            style={{ color: 'blue', fontWeight: 'bold' }}
          >
            HOC Pattern
          </DropDownMenu.MenuItem>
          <DropDownMenu.MenuItem value='Provider Pattern'>
            Provider Pattern
          </DropDownMenu.MenuItem>
          <DropDownMenu.MenuItem value='Conditional Pattern'>
            Conditional Pattern
          </DropDownMenu.MenuItem>
          <DropDownMenu.MenuItem value='Compound Pattern'>
            Compound Pattern
          </DropDownMenu.MenuItem>
          <DropDownMenu.MenuItem value='React  Pattern'>
            Hooks Pattern
          </DropDownMenu.MenuItem>
        </DropDownMenu.MenuList>
      </DropDownMenu>
    </div>
  );
}

export default App;
