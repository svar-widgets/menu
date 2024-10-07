const exclude = v => item => item.type !== v;

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
			id: "convert-task",
			text: "Convert",
			data: [
				{
					id: "convert-task:task",
					text: "To Task",
					check: exclude("task"),
				},
				{
					id: "convert-task:milestone",
					text: "To Milestone",
					check: exclude("milestone"),
				},
				{
					id: "convert-task:project",
					text: "To Project",
					check: exclude("project"),
				},
			],
		},
		{
			id: "edit-task",
			text: "Edit",
			icon: "wxi wxi-edit",
		},
		{ id: "cut-task", text: "Cut", icon: "wxi wxi-content-cut" },
		{ id: "copy-task", text: "Copy", icon: "wxi wxi-content-copy" },
		{ id: "paste-task", text: "Paste", icon: "wxi wxi-content-paste" },
		{
			id: "move-task",
			text: "Move",
			icon: "wxi wxi-empty",
			data: [
				{ id: "move-task:up", text: "Up" },
				{ id: "move-task:down", text: "Down" },
			],
		},
		{ type: "separator" },
		{ id: "indent-task", text: "Indent", icon: "wxi wxi-indent" },
		{ id: "outdent-task", text: "Outdent", icon: "wxi wxi-unindent" },
		{ type: "separator" },
		{ id: "split-task", text: "Split task", icon: "wxi wxi-empty" },
		{
			id: "delete-task",
			icon: "wxi wxi-delete",
			text: "Delete",
		},
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
				{ id: "file-print", text: "Print" },
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
			id: "view",
			text: "View",
			data: [
				{ id: "view-fullscreen", text: "Fullscreen" },
				{ id: "view-option", text: "..." },
			],
		},
		{
			id: "insert",
			text: "Insert",
			data: [
				{ id: "insert-image", text: "Image" },
				{ id: "insert-option", text: "..." },
			],
		},
		{
			id: "format",
			text: "Format",
			data: [
				{ id: "format-bold", text: "Bold" },
				{ id: "format-italic", text: "Italic" },
				{ id: "format-underline", text: "Underline" },
				{ id: "format-strike", text: "Strikethrough" },
				{ id: "format-option", text: "..." },
			],
		},
		{
			id: "tools",
			text: "Tools",
			data: [
				{ id: "tools-wordcount", text: "Word count" },
				{ id: "tools-option", text: "..." },
			],
		},
		{
			id: "help",
			text: "Help",
			data: [
				{ id: "help-more", text: "Help" },
				{ id: "help-hotkeys", text: "Hotkeys" },
				{ id: "help-option", text: "..." },
			],
		},
		{ id: "some-option", text: "Option with no submenu" },
	];
}
