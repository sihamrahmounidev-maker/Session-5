function calculerSurface(longueur , largeur) {
    return longueur * largeur ;
}

function estGrand(surface){
    if(surface>= 100){
        return true;
    }

    return false;
}

let surfacePiece = calculerSurface(12, 10);
let grandePiece = estGrand(surfacePiece);

console.log("Surface calculée : " + surfacePiece + "m²");
console.log("Grande pièce : " + grandePiece);