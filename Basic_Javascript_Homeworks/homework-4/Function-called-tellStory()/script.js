function prikazna([name, mood, activity]) {
    let story = `${name} se custvuvase ${mood} denes. `;
    story += `Se javi ${name} na autowelt i sakashe da ${activity}. `;
    return story;
}

let storyArray = ["Blagojce", "vozbuden", "kupuva kola"];
let resultStory = prikazna(storyArray);

alert(resultStory);