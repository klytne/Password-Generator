function genePass(len) {
    let password = ""

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^&*+#'

        for(let i = 0; i < len; i++) {
            let ranNum = Math.floor(Math.random() * chars.length)
            password += chars[ranNum]
        }

    return password
}

document.addEventListener('click', function() {
    document.querySelector("#btn").addEventListener('click', function() {
        let length = document.querySelector("#input").value

        if(length > 0 && length <= 10) {
            document.querySelector("#error").textContent = ""
            document.querySelector(".pass1").innerHTML = genePass(length)
            document.querySelector(".pass2").innerHTML = genePass(length)
            document.querySelector(".pass3").innerHTML = genePass(length)
            document.querySelector(".pass4").innerHTML = genePass(length)
        } else {
            let errorEl = document.querySelector("#error")

            errorEl.textContent = "Enter a value between 0 and 10"
            errorEl.style.color = "black"
        }
        


        length = 0
    })

})