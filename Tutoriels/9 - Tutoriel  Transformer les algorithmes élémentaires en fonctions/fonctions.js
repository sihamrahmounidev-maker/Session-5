function calculerMoyenne(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme = somme + notes[i];
    }
    return somme / notes.length;
}

let groupeA = [12, 14, 16];
let groupeB = [10, 18, 11, 13];

calculerMoyenne(groupeA);
calculerMoyenne(groupeB);

console.log("le moyene de A " + calculerMoyenne(groupeA));
console.log("le moyene de B " + calculerMoyenne(groupeB));