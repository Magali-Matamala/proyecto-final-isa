
function acceso (){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

    if(username == "Magalí" && password == 1234 || username == "Pedro" && password == 4321 || username == "María" && password == 4567){
        alert("Acceso Concedido")
    }else {
        alert("Acceso Denegado")
    }
}


let username = document.getElementById("username");
let password = document.getElementById("password");
let button = document.getElementById("button");

button.addEventListener("click" , (e) => {

    e.preventDefault()
    const data ={
        username: username.value,
        password: password.value
    }    
console.log(data);

alert("INGRESO GUARDADO EN CONSOLA");

})



