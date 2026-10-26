const sequence = `operator04@node013:~/archive$ connect.sh`
let position = 0

async function startintrosequence() {
	function wait(s) {
		return new Promise(resolve => setTimeout(resolve, s*1000))
	}
	
	for (let x = "operator04@node013:~/archive$".length; x<=sequence.length; x++) {
		document.querySelector(".intro-contents").textContent = sequence.slice(0, x)
		await wait(0.1)
	}
	
	await wait(1)
	document.querySelector(".intro-contents").innerHTML += "<br>ACCESS GRANTED."
	await wait(0.5)
	document.querySelector(".intro-contents").textContent = ""
	document.querySelector(".intro").style.background = "#ffffff"
	await wait(2)
	document.querySelector(".intro").animate([{ backgroundColor: "#ffffff" },{ backgroundColor: "transparent" }],{ duration: 3000, fill: "forwards" })
}
startintrosequence()
