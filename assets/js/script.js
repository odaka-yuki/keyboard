"use strict";

import { KeyBoard } from "./key-data.js";


(() => {

	const keyBoard = new KeyBoard();
	const keyBoardElement = document.getElementById("js_key_board");

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

			if (data.list) {
				const children = data.list.map(generateKeyBoard);
				Array.from(children).forEach(child => key.appendChild(child));
			} else {
				key.textContent = data.main;
			}

			return key;
		}
	};

	const addEventKeyBoard = () => {};

	const init = () => {
		generateKeyBoard(keyBoard.data);
		addEventKeyBoard();
	};

	init();
})();