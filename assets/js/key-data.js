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
							name: "Escape",
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
							name: "Digit1",
							main: "1",
							sub: "!",
						},
						{
							type: "key",
							size: "normal", // 1.6mm
							name: "Digit2",
							main: "2",
							sub: "\"",
						},
						{
							type: "key",
							size: "normal",
							name: "Digit3",
							main: "3",
							sub: "#",
						},
						{
							type: "key",
							size: "normal",
							name: "Digit4",
							main: "4",
							sub: "$",
						},
						{
							type: "key",
							size: "normal",
							name: "Digit5",
							main: "5",
							sub: "%",
						},
						{
							type: "key",
							size: "normal",
							name: "Digit6",
							main: "6",
							sub: "&",
						},
						{
							type: "key",
							size: "normal",
							name: "Digit7",
							main: "7",
							sub: "'",
						},
						{
							type: "key",
							size: "normal",
							name: "Digit8",
							main: "8",
							sub: "(",
						},
						{
							type: "key",
							size: "normal",
							name: "Digit9",
							main: "9",
							sub: ")",
						},
						{
							type: "key",
							size: "normal",
							name: "Digit0",
							main: "0",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "Minus",
							main: "-",
							sub: "=",
						},
						{
							type: "key",
							size: "normal",
							name: "Equal",
							main: "^",
							sub: "~",
						},
						{
							type: "key",
							size: "normal",
							name: "IntlYen",
							main: "¥",
							sub: "|",
						},
						{
							type: "key",
							size: "normal",
							name: "Backspace",
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
							name: "Tab",
							main: "tab",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyQ",
							main: "Q",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyW",
							main: "W",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyE",
							main: "E",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyR",
							main: "R",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyT",
							main: "T",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyY",
							main: "Y",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyU",
							main: "U",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyI",
							main: "I",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyO",
							main: "O",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyP",
							main: "P",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "BracketLeft",
							main: "@",
							sub: "`",
						},
						{
							type: "key",
							size: "normal",
							name: "BracketRight",
							main: "[",
							sub: "{",
						},
						{
							type: "key",
							size: "enter",
							name: "Enter",
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
							name: "ControlLeft",
							main: "control",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyA",
							main: "A",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyS",
							main: "S",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyD",
							main: "D",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyF",
							main: "F",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyG",
							main: "G",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyH",
							main: "H",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyJ",
							main: "J",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyK",
							main: "K",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyL",
							main: "L",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "Semicolon",
							main: ";",
							sub: "+",
						},
						{
							type: "key",
							size: "normal",
							name: "Quote",
							main: ":",
							sub: "*",
						},
						{
							type: "key",
							size: "normal",
							name: "Backslash",
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
							name: "ShiftLeft",
							main: "shift",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyZ",
							main: "Z",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyX",
							main: "X",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyC",
							main: "C",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyV",
							main: "V",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyB",
							main: "B",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyN",
							main: "N",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "KeyM",
							main: "M",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "Comma",
							main: ",",
							sub: "<",
						},
						{
							type: "key",
							size: "normal",
							name: "Period",
							main: ".",
							sub: ">",
						},
						{
							type: "key",
							size: "normal",
							name: "Slash",
							main: "/",
							sub: "?",
						},
						{
							type: "key",
							size: "normal",
							name: "IntlRo",
							main: "_",
							sub: null,
						},
						{
							type: "key",
							size: "shift",
							name: "ShiftRight",
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
							name: "CapsLock",
							main: "caps",
							sub: null,
						},
						{
							type: "key",
							size: "normal",
							name: "AltLeft",
							main: "option",
							sub: null,
						},
						{
							type: "key",
							size: "modifier",
							name: "MetaLeft",
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
							name: "Space",
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
							name: "MetaRight",
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
							name: "ArrowLeft",
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
									name: "ArrowUp",
									main: "▲",
									sub: null,
								},
								{
									type: "key",
									size: "half",
									name: "ArrowDown",
									main: "▼",
									sub: null,
								},
							],
						},
						{
							type: "key",
							size: "normal",
							name: "ArrowRight",
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