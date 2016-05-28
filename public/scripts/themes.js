const themes = {
	pinky: {
		scramble: {
			background: "#3a3335",
			text: "#fff",
			font: "'San Francisco', SanFrancisco, sans-serif"
		},
		body: {
			background: "#dc0a34",
			text: "#fff"
		}
	},
	baller: {
		scramble: {
			background: "#1ea896",
			text: "#fff",
			font: "'Helvetica Neue Light', 'Helvetica Neue-Light', HelveticaNeue Light, sans-serif"
		},
		body: {
			background: "#7e8d85",
			text: "#ece2d0"
		}
	},
	purple: {
		scramble: {
			background: "transparent",
			text: "#fff",
			font: "'San Francisco', SanFrancisco, sans-serif"
		},
		body: {
			background: "#643eb9",
			text: "#fff"
		}
	}
};

const applyTheme = function(name) {
	name = themes.hasOwnProperty(name) ? name : "pinky";
	const theme = themes[name];
	const scramble = document.getElementById("scramble");
	const body = document.body;
	scramble.style.backgroundColor = theme.scramble.background || "#fff";
	scramble.style.color = theme.scramble.text || "#000";
	scramble.style.fontFamily = theme.scramble.font || "serif";
	body.style.backgroundColor = theme.body.background || "#fff";
	body.style.color = theme.body.text || "#000";
	body.style.fontFamily = theme.body.font || "Digital";
};