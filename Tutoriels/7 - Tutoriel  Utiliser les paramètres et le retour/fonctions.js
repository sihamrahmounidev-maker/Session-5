
function calculerPrix(prix,qte){
    let total=prix*qte;
return total;
}

function calculerPrix2(prix,qte){
    let total=prix*qte;
console.log("TOTAL=",total);
}


let mnt=calculerPrix(23,4);
console.log("Montant avant reduction="+mnt);
mnt=mnt-mnt*0.1;
console.log("Montant après reduction="+mnt);