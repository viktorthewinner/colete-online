export class Player {
    health;
    attack_power;
    defense_power;
    ability;
    // constructor(health: number, attack_power: number, defense_power: number)
    // {
    //     this.health=health;
    //     this.attack_power=attack_power;
    //     this.defense_power=defense_power;
    // }
    constructor() {
        this.health = 100;
        this.attack_power = 0;
        this.defense_power = 0;
        this.ability = 0;
    }
    getHealth() {
        return this.health;
    }
    getAttack_power() {
        return this.attack_power;
    }
    getDefense_power() {
        return this.defense_power;
    }
    getAbility() {
        return this.ability;
    }
    setHealth(health) {
        this.health = health;
    }
    setAttack_power(attack_power) {
        this.attack_power = attack_power;
    }
    setDefense_power(defense_power) {
        this.defense_power = defense_power;
    }
    setAbility(ability) {
        this.ability = ability;
    }
    new_stats() {
        this.setHealth(100);
        this.setAttack_power(getRandomInt(15, 20));
        this.setDefense_power(getRandomInt(10, 15));
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
