

function godiniNaCovekVoGodiniNaKuce(coveckiGodini){
    let godiniNaKuce = coveckiGodini * 7;
    return godiniNaKuce;
}

let godiniNaCovekk = 30;
let godiniNaKucee = godiniNaCovekVoGodiniNaKuce(godiniNaCovekk);
console.log(`${godiniNaCovekk}-Години на човек се ${godiniNaKucee}-години на куче.`);


function godiniNaKuceVoGodiniNaCovek(kuceskiGodini){
    let godiniNaCovek = kuceskiGodini / 7;
    return godiniNaCovek;
}

let vozrastNaKuce = 21;
let vozrastNaCovek = godiniNaKuceVoGodiniNaCovek(vozrastNaKuce);
console.log(`${vozrastNaKuce}-Година на куче се ${vozrastNaCovek}-години на човек.`);
