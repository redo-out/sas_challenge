function verifierMotDePasse(motDePasse){
    let len = motDePasse.length;
    let mdp = motDePasse;
    // console.log(len)
    return len > 8 && mdp.includes("@") ? true : false
    // if (len > 8 && mdp.includes("@")){
    //     return true;
    // }
    // else
    //     return false;
}
 console.log(verifierMotDePasse("h@gdjk"));
