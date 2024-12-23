import ActionMenu from "./cases/ActionMenu.svelte";
import BasicInit from "./cases/BasicInit.svelte";
import Context from "./cases/Context.svelte";
import ContextData from "./cases/ContextData.svelte";
import CustomArea from "./cases/CustomArea.svelte";
import CustomOptions from "./cases/CustomOptions.svelte";
import DropDown from "./cases/DropDown.svelte";
import MenuBar from "./cases/MenuBar.svelte";
import MenuPositions from "./cases/MenuPositions.svelte";
import Relative from "./cases/Relative.svelte";
import MenuInAreas from "./cases/MenuInAreas.svelte";
import Styling from "./cases/Styling.svelte";

export const links = [
	["/base/:skin", "Menu basic", BasicInit],
	["/bar/:skin", "Menu bar", MenuBar],
	["/dropdown/:skin", "Dropdown menu", DropDown],
	["/context/:skin", "Context menu", Context],
	["/action/:skin", "Action menu for items", ActionMenu],
	["/context-data/:skin", "Context menu for items", ContextData],
	["/custom-area/:skin", "Custom activation area", CustomArea],
	["/custom/:skin", "Custom options", CustomOptions],
	["/positions/:skin", "Menu positions", MenuPositions],
	["/relative/:skin", "Relative scroll", Relative],
	["/areas/:skin", "Menu in modals", MenuInAreas],
	["/styling/:skin", "Styling", Styling],
];
