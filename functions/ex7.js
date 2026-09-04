function obtenirHeureActuelle(){
    const date = new Date();
    // return date;
    const H = date.getHours();
    const M = date.getMinutes();
    const S = date.getSeconds();
    return `${H}:${M}:${S}`
}
console.log(obtenirHeureActuelle());