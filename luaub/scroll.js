const where = new URLSearchParams(window.location.search).get("where")

if (where) {
	document.getElementById(where)?.scrollIntoView({
		behavior: "smooth"
	});
}