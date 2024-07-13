const data = [{
    id: 987654321,
    user: "marcos",
    password: 12345
}]

function login (){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const text = document.getElementById('text');
    const textErro = document.getElementById('textErro');

    if(!user || !password){
        console.log("Falha no login")
        textErro.innerHTML = "Por favor, preencha todos os campos.";
        text.innerHTML = " "
    }else if (user == data[0].user && password == data[0].password){
        text.innerHTML = "Login feito com sucesso"
        textErro.innerHTML = " "
        console.log("Login feito com sucesso")
    }else{
        console.log("Usuário ou senha incorreta")
        textErro.innerHTML = "Usuário ou senha incorreta";
        text.innerHTML = " "
    }

    console.log(`Usuário: ${user} \n Senha: ${password}`)
}
