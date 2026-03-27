## 2.5.1

-   Using Svelte Core v2.5.1

## 2.5.0

### Fixes

-   Incorrect submenu position when there is not enough space to the right

## 2.4.2

### Fixes

-   Submenus are not shown on mobile devices

## 2.4.1

-   Using Svelte Core v2.4.1

## 2.4.0

### Updates

-   More options to precisely position and align ContextMenu, DropDownMenu, ActionMenu

### Fixes

-   Incorrect position of Menus in a relatively positioned continer
-   Incorrect position of Menus close to the container edges

## 2.3.1

### Fixes

-   Backward compatibility for option type

## 2.3.0

### New features

-   TypeScript definitions

### Updates

API changes with backward compatibility until 3.0

-   `onclick` event of all menus: `action` parameter is renamed to `option`
-   Option `type` property is renamed to `comp`
-   Property `item` of a custom component, registered as menu option, is renamed to `option`

## 2.2.1

### Fixes

-   Using in Salesforce environment

## 2.2.0

-   Using Svelte Core v2.2.0

## 2.1.0

### Fixes

-   ContextMenu breaks parent scrollable container
-   Dropdown Menu is incorrectly positioned near viewport edges

## 2.0.1

### New features

-   Svelte 5 support

### 1.3.0

### Initial features

-   Adding menu widgets: Menu, MenuBar, DropDownMenu, ContextMenu, ActionMenu
-   Ability to init Menu in some specific container
-   Ability to define subtext ( hotkey, etc. )
-   Ability to use custom components as menu items
-   Ability to use left and bottom-left position strategies
