### 1.3.0

-   [dev] public release, using core@1.3.0

### 1.2.4

-   [update] ability to define custom css class for top menu and submenu's containers
-   [fix] incorrect z-index when shown from popup

### 1.2.3

-   [update] when menu is closed it doesn't affect other popup elements
-   [fix] regression in repositioning menu when clicking on next active area

### 1.2.1

-   [fix] regression in popup closing in some cases

### 1.2.0

-   [deps] uses core@1.2.0

### 1.1.1

-   [fix] incorrect positioning in "point" mode when menu initialized not as child of document.body
-   [fix] submenus lost context values

### 1.1.0

-   [update] visual improvements
-   [fix] incorrect auto-position logic

### 0.0.1-rc21

-   [fix] space between icon and text

### 0.0.1-rc20

-   [add] auto-fit for sub menus

### 0.0.1-rc19

-   [add] MenuBar - top level menu bar

### 0.0.1-rc18

-   menu doesn't require that all items have an unique IDs ( will generate missed ids on its own )

### 0.0.1-rc17

-   fix position in scrolled container
-   temporary fix for cypress tests

### 0.0.1-rc11

-   updated styles
-   bottom-fit mode

### 0.0.1-rc10

#### Fixes

-   incorrect position in scrollable container
-   activation area can't contain complex markup inside
-   missed hover styling

#### New features

-   ability to init menu in some specific container
-   ability to define subtext ( hotkey, etc. )
-   ability to use custom components as menu items
-   ability to use left and bottom-left position strategies
