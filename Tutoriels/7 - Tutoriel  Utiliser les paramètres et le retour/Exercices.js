function calculerSurface(largeur,longueur){
    return largeur*longueur;
}


function estGrand(s){
    let resultat=false;
    if(s>=100){
      resultat=true;
    }

    return resultat;
        
}



let s2=calculerSurface(5,60);

console.log(estGrand(calculerSurface(3,10)));

if(estGrand(s2)){
    console.log("surface grande");
}
else{
      console.log("surface petite");
}