function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe () {
            return `${this.name} is a ${this.race} from ${this.origin}.`;
        },
        evaluateFight (character) {


            return `Your opponent takes ${this.attack > character.defense ? this.attack > character.defense : 0} and you receive ${this.defense > character.attack ? this.defense - character.attack : 0}`;
        }
    };
}

const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6,'wizard staff'),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1,'ring'),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'string and Barrow blade'),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'anduril'),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow')
];

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

 const charWithWeapon = createCharacter()
