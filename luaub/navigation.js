const buttons = [
    // [button: class, panel: class]
    [".nav-guides", ".nav-guides-panel"]
]
let current = buttons[0]

buttons.forEach(data => {
    const button = document.querySelector(data[0])
    const panel = document.querySelector(data[1])

    button.addEventListener("click", () => {
        if (current === data) {return}

        button.classList.add("nav-current-button")
        document.querySelector(current[0]).classList.remove("nav-current-button")

        panel.classList.add("grid-display")
        document.querySelector(current[1]).classList.remove("grid-display")
        document.querySelector(current[1]).classList.add("none-display")

        current = data
    })
})
