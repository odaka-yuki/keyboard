"use strict";

import { KeyBoard } from "./key-data.js";


(() => {

	const DEBUG = false;

	const keyBoard = new KeyBoard();
	const keyBoardElement = document.getElementById("js_key_board");
	const displayElement  = document.getElementById("js_display");


	const addEventDisplay = () => {
		displayElement.addEventListener("input", (e) => {
			console.log(e);

			const brackets = [
				{
					open: "(",
					close: ")",
				},
				{
					open: "{",
					close: "}",
				},
				{
					open: "[",
					close: "]",
				},
				{
					open: "\"",
					close: null,
				},
				{
					open: "'",
					close: null,
				},
				{
					open: "`",
					close: null,
				},
				{
					open: "<",
					close: ">",
				},
			];

			const matchBrackets = Object.entries(brackets).filter(([key, value]) => e.data === value.open);
			const position = e.target.selectionStart;
			const beforeValue = displayElement.value;

			if (matchBrackets.length) {
				const bracket = matchBrackets[0][1];
				const addLetter = bracket.close ? bracket.close : bracket.open;
				
				console.log(bracket, addLetter);

				displayElement.value = beforeValue.slice(0, e.target.selectionStart) + addLetter + beforeValue.slice(e.target.selectionStart);
				e.target.selectionStart = position;
				e.target.setSelectionRange(e.target.selectionStart, e.target.selectionStart);
			}

			// TODO: textareaのinputイベントだとenterとbackspaceなどの区別ができない
			// if (e.data === null) {
			// 	displayElement.value = beforeValue.slice(0, position) + "\t\n" + beforeValue.slice(position);
			// 	e.target.selectionStart = position + 1;
			// 	e.target.setSelectionRange(e.target.selectionStart, e.target.selectionStart);
			// }
		});
	};


	const generateKeyBoard = (data) => {
		const type = data.type;

		if (type === "root") {
			const rows = data.list.map(generateKeyBoard);
			Array.from(rows).forEach(row => keyBoardElement.appendChild(row));
		}

		if (type === "row") {
			const row = document.createElement("div");
			row.className = "bl_keyBoard_row";

			const keys = data.list.map(generateKeyBoard);
			Array.from(keys).forEach(key => row.appendChild(key));

			return row;
		}

		if (type === "key") {

			const key = document.createElement("div");
			key.className = "bl_keyBoard_key";
			key.classList.add("bl_keyBoard_key__" + data.size);

			if (data.name) {
				key.dataset["key_name"] = data.name;
			}

			if (data.list) {
				const children = data.list.map(generateKeyBoard);
				Array.from(children).forEach(child => key.appendChild(child));
				key.classList.add("bl_keyBoard_key__container");
			} else {
				key.textContent = data.main;
			}

			return key;
		}
	};

	const addEventKeyBoard = () => {

		const modifyKey = (e) => {

			// e.preventDefault();

			const key = keyBoardElement.querySelector("[data-key_name='" + e.code + "']");

			if (DEBUG) {
				console.log("e.code: ", e.code);
			}

			switch (e.type) {
				case "keydown":
					key.classList.add("is_active");
					break;

				case "keyup":
					key.classList.remove("is_active");
					break;
			}
		};

		window.addEventListener("keydown", modifyKey);
		
		window.addEventListener("keyup", modifyKey);

	};

	const init = () => {
		generateKeyBoard(keyBoard.data);
		addEventKeyBoard();
		addEventDisplay();
	};

	init();
})();