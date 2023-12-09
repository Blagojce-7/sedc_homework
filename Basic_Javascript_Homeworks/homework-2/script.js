
function determineChineseZodiac(year) {
    let zodiacAnimals = [
        "Rat", "Ox", "Tiger", "Rabbit",
        "Dragon", "Snake", "Horse", "Goat",
        "Monkey", "Rooster", "Dog", "Pig"
    ];

    let startYear = 1924; 
    let zodiacIndex = (year - startYear) % 12;
    return zodiacAnimals[zodiacIndex];
}

let userInput = prompt("Напишете ја вашата година на раѓање: (Минимална година е 1924");
let birthYear = parseInt(userInput);

if (!isNaN(birthYear)) {
    let zodiacSign = determineChineseZodiac(birthYear);
    alert(`Ако вашата година на раѓање е ${birthYear}, тогаш вашиот знак според Кинескиот хороскоп е ${zodiacSign}.`);
} else {
    alert("Внесовте неточно, обидете се повторно!");
}

