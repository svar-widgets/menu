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

-   Using core@2.2.0

## 2.1.0

### Fixes

-   ContextMenu breaks parent scrollable container
-   Dropdown Menu is incorrectly positioned near viewport edges

## 2.0.1

### New features

-   Svelte 5 support

### 1.3.0

-   Public release, using core@1.3.0

## 1.2.4

### Updates

-   Ability to define custom css class for top Menu and submenu's containers

### Fixes

-   Incorrect z-index when shown from Popup

## 1.2.3

### Updates

-   When Menu is closed it doesn't affect other popup elements

### Fixes

-   Regression in repositioning Menu when clicking on next active area

## 1.2.1

### Fixes

-   Regression in popup closing in some cases

## 1.2.0

-   Using core@1.2.0

## 1.1.1

### Fixes

-   Incorrect positioning in "point" mode when menu initialized not as child of document.body
-   Submenus lost context values

## 1.1.0

### Updates

-   Visual improvements

### Fixes

-   Incorrect auto-position logic

#### 0.0.1-rc21

-   [fix] space between icon and text

#### 0.0.1-rc20

-   [add] auto-fit for sub menus

#### 0.0.1-rc19

-   [add] MenuBar - top level menu bar

#### 0.0.1-rc18

-   menu doesn't require that all items have an unique IDs ( will generate missed ids on its own )

#### 0.0.1-rc17

-   fix position in scrolled container
-   temporary fix for cypress tests

#### 0.0.1-rc11

-   updated styles
-   bottom-fit mode

#### 0.0.1-rc10

-   ability to init menu in some specific container
-   ability to define subtext ( hotkey, etc. )
-   ability to use custom components as menu items
-   ability to use left and bottom-left position strategies
