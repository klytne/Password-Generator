document.addEventListener("DOMContentLoader", function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^&*+#'
    const length = document.querySelector("#input").value
    const btnEl = document.querySelector(".btn")
    let password = ""

    btnEl.addEventListener("click", function() {
        for(let i = 0; i < length; i++) {
            let ranNum = Math.floor(Math.random() * chars.length)
            password += chars[ranNum]
        }
    })

    let c = document.querySelector(".pass1")
    c.textContent = password
})