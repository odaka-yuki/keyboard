"use strict";


export class KeyBoard {

	constructor() {
		this.data = {
			type: "root",
			name: "",
			list: [
				{
					type: "row",
					name: "row1",
					list: [
						{
							type: "key",
							size: "normal",
							name: "esc",
							main: "esc",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F1",
							main: "F1",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F2",
							main: "F2",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F3",
							main: "F3",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F4",
							main: "F4",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F5",
							main: "F5",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F6",
							main: "F6",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F7",
							main: "F7",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F8",
							main: "F8",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F9",
							main: "F9",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F10",
							main: "F10",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F11",
							main: "F11",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "F12",
							main: "F12",
							sub: null,
						},
						{
							type: "key",
							size: "eject",
							name: "eject",
							main: "eject",
							sub: null,
						},
					],
				},
				{
					type: "row",
					name: "row2",
					list: [
						{
							type: "key",
							size: "eject", // 2.6mm
							name: "1",
							main: "1",
							sub: "!",
						},
						{
							type: "key",
							size: "normal", // 1.6mm
							name: "2",
							main: "2",
							sub: "\"",
						},
						{
							type: "key",
							size: "normal",
							name: "3",
							main: "3",
							sub: "#",
						},
						{
							type: "key",
							size: "normal",
							name: "4",
							main: "4",
							sub: "$",
						},
						{
							type: "key",
							size: "normal",
							name: "5",
							main: "5",
							sub: "%",
						},
						{
							type: "key",
							size: "normal",
							name: "6",
							main: "6",
							sub: "&",
						},
						{
							type: "key",
							size: "normal",
							name: "7",
							main: "7",
							sub: "'",
						},
						{
							type: "key",
							size: "normal",
							name: "8",
							main: "8",
							sub: "(",
						},
						{
							type: "key",
							size: "normal",
							name: "9",
							main: "9",
							sub: ")",
						},
						{
							type: "key",
							size: "normal",
							name: "0",
							main: "0",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "-",
							main: "-",
							sub: "=",
						},
						{
							type: "key",
							size: "normal",
							name: "^",
							main: "^",
							sub: "~",
						},
						{
							type: "key",
							size: "normal",
							name: "¥",
							main: "¥",
							sub: "|",
						},
						{
							type: "key",
							size: "normal",
							name: "delete",
							main: "delete",
							sub: null,
						},
					],
				},
				{
					type: "row",
					name: "row3",
					list: [
						{
							type: "key",
							size: "normal",
							name: "tab",
							main: "tab",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "q",
							main: "Q",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "w",
							main: "W",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "e",
							main: "E",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "r",
							main: "R",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "t",
							main: "T",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "y",
							main: "Y",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "u",
							main: "U",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "i",
							main: "I",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "o",
							main: "O",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "p",
							main: "P",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "@",
							main: "@",
							sub: "`",
						},
						{
							type: "key",
							size: "normal",
							name: "[",
							main: "[",
							sub: "{",
						},
						{
							type: "key",
							size: "enter",
							name: "enter",
							main: "enter",
							sub: null,
						},
					],
				},
				{
					type: "row",
					name: "row4",
					list: [
						{
							type: "key",
							size: "modifier", // 2.1mm
							name: "control",
							main: "control",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "a",
							main: "A",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "s",
							main: "S",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "d",
							main: "D",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "f",
							main: "F",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "g",
							main: "G",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "h",
							main: "H",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "j",
							main: "J",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "k",
							main: "K",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "l",
							main: "L",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: ";",
							main: ";",
							sub: "+",
						},
						{
							type: "key",
							size: "normal",
							name: ":",
							main: ":",
							sub: "*",
						},
						{
							type: "key",
							size: "normal",
							name: "]",
							main: "]",
							sub: "}",
						},
					],
				},
				{
					type: "row",
					name: "row5",
					list: [
						{
							type: "key",
							size: "shift", // 3.1mm
							name: "shift",
							main: "shift",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "z",
							main: "Z",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "x",
							main: "X",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "c",
							main: "C",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "v",
							main: "V",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "b",
							main: "B",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "n",
							main: "N",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "m",
							main: "M",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: ",",
							main: ",",
							sub: "<",
						},
						{
							type: "key",
							size: "normal",
							name: ".",
							main: ".",
							sub: ">",
						},
						{
							type: "key",
							size: "normal",
							name: "/",
							main: "/",
							sub: "?",
						},
						{
							type: "key",
							size: "normal",
							name: "_",
							main: "_",
							sub: null,
						},
						{
							type: "key",
							size: "shift",
							name: "shift",
							main: "shift",
							sub: null,
						},
					],
				},
				{
					type: "row",
					name: "row6",
					list: [
						{
							type: "key",
							size: "normal",
							name: "caps",
							main: "caps",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "option",
							main: "option",
							sub: null,
						},
						{
							type: "key",
							size: "modifier",
							name: "command",
							main: "",
							sub: null,
						},
						{
							type: "key",
							size: "modifier",
							name: "english",
							main: "英数",
							sub: null,
						},
						{
							type: "key",
							size: "space", // 6.4mm
							name: "space",
							main: "",
							sub: null,
						},
						{
							type: "key",
							size: "modifier",
							name: "kana",
							main: "かな",
							sub: null,
						},
						{
							type: "key",
							size: "modifier",
							name: "command",
							main: "command",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "fn",
							main: "fn",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "left",
							main: "◀︎",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: null,
							main: null,
							sub: null,
							list: [
								{
									type: "key",
									size: "half",
									name: "up",
									main: "▲",
									sub: null,
								},
								{
									type: "key",
									size: "half",
									name: "down",
									main: "▼",
									sub: null,
								},
							],
						},
						{
							type: "key",
							size: "normal",
							name: "right",
							main: "▶︎",
							sub: null,
						},
					],
				},
			],
		};
	}

	getAllData() {
		return this.data;
	}

	getKeyData(keyName) {

		let target = null;

		this.data.list.forEach(row => {
			row.list.forEach(key => {
				if (key.name === keyName) {
					target = key;
				}
			});
		});

		return target;
	}
}


export class KeySize {
	constructor() {
		this.data = {
			normal: 1.6,
			half: 1.6,
			modifier: 2.1,
			eject: 2.6,
			shift: 3.1,
			space: 6.4,
		};
	}
}