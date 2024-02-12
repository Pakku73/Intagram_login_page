const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const btn = document.getElementById("showPassword")

passwordInput.addEventListener("input", (event) =>{
    if (event.target.value) {
        btn.classList.remove("hidden")
    } else{
        btn.classList.add("hidden")
    }
});

btn.addEventListener("click", (event) =>{
    document.querySelector('#showPassword').textContent = "Afficher"
    if (passwordInput.getAttribute("type") === "password"){
        passwordInput.setAttribute("type", "text")
        document.querySelector('#showPassword').textContent = "Masquer"
    } else{
        passwordInput.setAttribute("type", "password")
    }
});
