const MainAccount = document.querySelector("#Main-Account")

MainAccount.innerHTML = `
<div id="log-in">
    <h1>Log In </h1>
        <div class="fro-acconts">
            <input type="text" placeholder="USERNAME">

            <input type="password" placeholder="Password">

            <input type="button" value="Log In">
            
            <a href="">Forget password</a>

            <p>Don't have an account? <button id="Btn-Sign-up">Sign up</button></p>

        </div>
</div>

<div id="Sign-up" style="display: none;">
    <h1>Sign up</h1>
        <div class="fro-acconts">

        <input type="text" placeholder="USERNAME">

        <input type="text" placeholder="E-mail">

        <input type="password" placeholder="Password">

        <input type="password" id="ps-confi" placeholder="Password confirmation!">

        <input type="button" value="Sign up">

        <p>Do u have an account? <button id="Btn-Log-In">Log In</button></p>
        </div>

</div>
`
