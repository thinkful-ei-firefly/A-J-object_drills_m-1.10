function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        weapon,
        describe: function () {
            return `${this.name} is a ${this.race} of the ${this.origin} who uses a ${this.weapon}`;

        },
        evaluateFight (character) {

            return `Your opponent takes ${ character.defense > this.attack ? 0 :  this.attack -  character.defense } damage and you receive ${this.defense > character.attack ? 0 : character.attack - this.defense} damage`;
        }
    };
}

const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6,'wizard staff'),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1,'ring'),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'string and Barrow blade'),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'anduril'),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

// console.log(characters[0].describe());

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 7,'Hadhafang'));

characters.find((char) => {
    if (char.nickname === 'aragorn') {
        return char.describe();
    }
});

const hobbits = characters.filter((char) => {
    if (char.race === 'Hobbit') {
        return char;
    }
});



const powerfullchar = characters.filter((char) => {
    if (char.attack > 5) {
        return char;
    }
});




console.log(characters[0].describe());
console.log(characters[1].evaluateFight(characters[0])); 