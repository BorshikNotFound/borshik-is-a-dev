let load = !sessionStorage.getItem("visited");
const photosensitive = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// make load be false if this is an old browser session

if (load) {
	let bg = document.querySelector(".loading")
	let context = document.querySelector(".loading-context")
	
	let fulltext = `Fedora Linux 44 (tty1)
	
	Borshik login: borshik
	Password: ...
	borshik@isrunningfedora:~$ echo $XDG_SESSION_TYPE
	wayland
	borshik@isrunningfedora:~$ xdg-open ~/index.html `.replace(/^[ \t]+/gm, "")
	let position = 144
	
	context.textContent = fulltext.slice(0, position + 1)
	
	async function onfinish() {
		function wait(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		
		if (!photosensitive) {
			bg.style.background = "#ffffff"
			context.style.color = "#000000"
			await wait(20)
			context.style.color = "#ffffff"
			bg.style.background = "#000000"
			await wait(50)
		}
		bg.style.background = "#ffffff"
		context.style.opacity = 0
		await wait(250)
		bg.animate([{background: "#ffffff"}, {background: "#000000"}], {duration: 3000, easing: "ease-in", fill: "forwards"})
		await wait(1000)
		bg.animate([{opacity: 1}, {opacity: 0}], {duration: 2000, easing: "ease", fill: "forwards"})
		bg.style.pointerEvents = "none"
		context.style.pointerEvents = "none"
	}	
	function write() {
		if (position < fulltext.length - 1) {
			position++
			context.textContent += fulltext[position]
			setTimeout(write, 50 + Math.random() * 150)
		}
		else {
			onfinish()
		}
	}
	write()
}