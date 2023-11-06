
# DropDownMenu Component README

## Introduction

The **DropDownMenu** component is a versatile dropdown menu for React applications that allows you to create interactive and customizable dropdown menus. It supports nested components such as **MenuList** and **MenuItem** to facilitate structured and dynamic menu content.

## Usage

### Basic Usage
```jsx
    <DropDownMenu>
      <DropDownMenu.MenuList>
        <DropDownMenu.MenuItem value='Option 1'>Option 1</DropDownMenu.MenuItem>
        <DropDownMenu.MenuItem value='Option 2'>Option 2</DropDownMenu.MenuItem>
        <DropDownMenu.MenuItem value='Option 3'>Option 3</DropDownMenu.MenuItem>
      </DropDownMenu.MenuList>
    </DropDownMenu>


```

### Required attrubites
 **value** attribute required for MenuItem
 ```
<DropDownMenu.MenuItem value='Option'>Option</DropDownMenu.MenuItem>
 ```

### Optional attrubites
**style** attribute optional for MenuItem 
 ```
<DropDownMenu.MenuItem value='Option' style={{ color: 'blue', fontWeight: 'bold' }}>Option</DropDownMenu.MenuItem>
 ```

