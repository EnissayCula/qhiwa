document.addEventListener("DOMContentLoaded", function(){
    const btnSignup = document.querySelector("#Btn-Sign-up")

    const Divlogin = document.querySelector("#log-in")
    const DivSignup = document.querySelector("#Sign-up")

    btnSignup.addEventListener("click", function() {
        
        Divlogin.style.display="none"
        DivSignup.style.display="block"
        

    })
})

document.addEventListener("DOMContentLoaded", function(){
    const btnLogIn = document.querySelector("#Btn-Log-In")
    
    const Divlogin = document.querySelector("#log-in")
    const DivSignup = document.querySelector("#Sign-up")

    btnLogIn.addEventListener("click", function() {
       
        DivSignup.style.display="none"
        Divlogin.style.display="block"

        

    })
})
 
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// flex-wrap: nowrap;