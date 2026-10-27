const back = document.querySelector(".back")
const next = document.querySelector(".next")

const frameidle = document.querySelector(".bob-idle")
const frameturn = document.querySelector(".bob-turn")
const contents = document.querySelector(".contents")

let page = 1
let previouspage = 1
let total = 3

async function input(type) {
	function wait(s) {
		return new Promise(resolve => setTimeout(resolve, s*1000))
	}
	
	if (type == "back") {
		page--
	}
	if (type == "next") {
		page++
	}
	page = Math.max(1, Math.min(total, page));
	
	await wait(0.1)
	
	if (previouspage != page) {frameidle.style.zIndex = 0
	contents.removeAttribute("src")}

	await wait(0.1)
	
	if (previouspage != page) {frameidle.style.zIndex = 2}
	contents.src = `images/pages/${page}.png`
	
	previouspage = page
}

back.addEventListener("click", function() {input("back")})
next.addEventListener("click", function() {input("next")})
