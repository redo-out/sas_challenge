function saluerClient(nom, titre = "Client"){
    return (`Bonjour ${titre} ${nom}`);
}

let b = saluerClient("redouane")
console.log(b);