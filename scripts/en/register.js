const regi = document.querySelector("#register")

regi.innerHTML = `
<label for="UserName">UserName</label>
<input type="text" id="UserName" placeholder="UserName" value="">

<label for="Email">E-mail:</label>
<input type="text" id="Email" placeholder="E-mail" value="">

<label for="ps">Password</label>
<input type="password" id="ps" placeholder="Password">

<label for="Ps-Confi">Password confirmation:</label>
<input type="password" id="ps-confi" placeholder="Password confirmation!" value="">

<label for="DateBirth">Date of Birth :</label>
<input type="date" id="DateBirth" value="">

<input type="button" value="sumbit">
`