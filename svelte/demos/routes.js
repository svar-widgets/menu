import ActionMenu from "./cases/ActionMenu.svelte";
import BasicInit from "./cases/BasicInit.svelte";
import ButtonMenu from "./cases/ButtonMenu.svelte";
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
	["/action/:skin", "Action menu for items", ActionMenu],
	["/bar/:skin", "Menu bar", MenuBar],
	["/base/:skin", "Menu basic", BasicInit],
	["/button/:skin", "Button Menu", ButtonMenu],
	["/context-data/:skin", "Context menu for items", ContextData],
	["/context/:skin", "Context menu", Context],
	["/custom-area/:skin", "Custom activation area", CustomArea],
	["/custom/:skin", "Custom options", CustomOptions],
	["/dropdown/:skin", "Drop-down menu", DropDown],
	["/positions/:skin", "Menu positions", MenuPositions],
	["/relative/:skin", "Relative scroll", Relative],
	["/areas/:skin", "Menu in modals", MenuInAreas],
	["/styling/:skin", "Styling", Styling],
];
