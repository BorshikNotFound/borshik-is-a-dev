let frame = 1
const maxframes = 2

function switchframe() {
	frame ++
	
	if (frame > maxframes) {
		frame = 1
	}
	
	document.querySelector(".effects").src = `images/effect${frame}.png`
}

setInterval(switchframe, 200)
