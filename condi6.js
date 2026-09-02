console.log("1 → Afficher le profil");
console.log("2 → Afficher les paramètres");
console.log("3 → Afficher les notifications");
console.log("4 → Se déconnecter");

var prompt = require('prompt-sync')();

var n = +prompt('chose a side not a site ');

switch(n){
    case 1:{
        console.log('affichage de profil');
        break;
    }
    case 2:{
        console.log('affichage des parametres');
        break;
    }
    case 3:{
        console.log('affichage des notifications');
        break;
    }
    case 4:{
        console.log('déconnections');
        break;
    }
    default:
        console.log('choix invalid');
}

