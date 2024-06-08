/*document.addEventListener("DOMContentLoader", function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^&*+#'
    
    const length = document.querySelector("#input").value
    const btnEl = document.querySelector("#btn")

    let password = ""

    if(btnEl != null) {
        btnEl.addEventListener("click", function() {
            for(let i = 0; i < length; i++) {
                let ranNum = Math.floor(Math.random() * chars.length)
                password += chars[ranNum]
            }
        })
    } else {
        console.error("And then!")
    }

    let c = document.querySelector(".pass1")
    c.textContent = password
})*/

function genePass(len) {
    let password = ""

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^&*+#'

        for(let i = 0; i < len; i++) {
            let ranNum = Math.floor(Math.random() * chars.length)
            password += chars[ranNum]
        }
    
        //document.querySelector(".pass1").textContent = password

    return password
}

document.addEventListener('click', function() {
    document.querySelector("#btn").addEventListener('click', function() {
        //let length = 0
        //console.log(length)

        let length = document.querySelector("#input").value
        //console.log(length)

        let pass2 = genePass(length)

        document.querySelector("#pass2").textContext = pass2

        length = 0
        //console.log(length)
    })

})