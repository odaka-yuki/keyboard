"use strict";

import { KeyBoard } from "./key-data.js";


(() => {

	const DEBUG = false;

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

			e.preventDefault();

			const keyName = e.code;
			const key = keyBoardElement.querySelector("[data-key_name='" + keyName + "']");

			if (DEBUG) {
				console.log("keyName: ", keyName);
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
	};

	init();
})();