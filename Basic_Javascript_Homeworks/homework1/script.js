let pricePhone = 119.95;
let phonesKolicina = 30;
let ddv = 5;

let cenaSoDdv = pricePhone + ((pricePhone * ddv) / 100);
let allPhonesWithDdv = cenaSoDdv * phonesKolicina;

console.log(cenaSoDdv);
console.log(allPhonesWithDdv);
