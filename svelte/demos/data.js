export function getProjects() {
	return [
		{ id: "a", text: "Project A" },
		{ id: "b", text: "Project B" },
		{ id: "c", text: "Project C" },
		{ id: "d", text: "Project D" },
	];
}

export function getTeam() {
	return [
		{ id: "user:1", type: "user", name: "Alex Wolensy" },
		{ id: "user:2", type: "user", name: "Daisy Right" },
		{
			id: "t2",
			text: "Second Team",
			data: [
				{ id: "user:3", type: "user", name: "Riana Zelani" },
				{ id: "user:4", type: "user", name: "Branda Ash" },
			],
		},
		{ id: "btn", type: "button", name: "Add New" },
	];
}

export function getOptions() {
	return [
		{
			id: "add-task",
			text: "Add",
			icon: "wxi wxi-plus",
			data: [
				{ id: "add-task:child", text: "Child task" },
				{ id: "add-task:above", text: "Task above" },
				{ id: "add-task:below", text: "Task below" },
			],
		},
		{ type: "separator" },
		{
			id: "edit-task",
			text: "Edit",
			icon: "wxi wxi-edit",
		},
		{ id: "cut-task", text: "Cut", icon: "wxi wxi-content-cut" },
		{ id: "copy-task", text: "Copy", icon: "wxi wxi-content-copy" },
		{ id: "paste-task", text: "Paste", icon: "wxi wxi-content-paste" },
	];
}

export function getMenuBarOptions() {
	return [
		{
			id: "file",
			text: "File",
			data: [
				{ id: "file-new", text: "New document", icon: "wxi wxi-file" },
				{
					id: "file-export",
					text: "Export",
					icon: "wxi wxi-download",
					data: [
						{ id: "export-pdf", text: "PDF" },
						{ id: "export-txt", text: "TXT" },
					],
				},
				{ id: "file-print", text: "Print", icon: "wxi-empty" },
			],
		},
		{
			id: "edit",
			text: "Edit",
			data: [
				{ id: "edit-cut", text: "Cut", icon: "wxi wxi-content-cut" },
				{ id: "edit-copy", text: "Copy", icon: "wxi wxi-content-copy" },
				{
					id: "edit-paste",
					text: "Paste",
					icon: "wxi wxi-content-paste",
				},
			],
		},
		{
			id: "help",
			text: "Help",
			data: [
				{ id: "help-more", text: "Help" },
				{ id: "help-hotkeys", text: "Hotkeys" },
			],
		},
		{ id: "some-option", text: "Option with no submenu" },
	];
}
