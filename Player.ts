export class Player
{
    private health: number;
    private attack_power: number;
    private defense_power: number;
    private ability: number;

    // constructor(health: number, attack_power: number, defense_power: number)
    // {
    //     this.health=health;
    //     this.attack_power=attack_power;
    //     this.defense_power=defense_power;
    // }

    constructor()
    {
        this.health=100;
        this.attack_power=0;
        this.defense_power=0;
        this.ability=0;
    }

    public getHealth():number
    {
        return this.health;
    }

    public getAttack_power():number
    {
        return this.attack_power;
    }

    public getDefense_power():number
    {
        return this.defense_power;
    }

    public getAbility():number
    {
        return this.ability;
    }

    public setHealth(health: number): void
    {
        this.health=health;
    }

    public setAttack_power(attack_power: number): void
    {
        this.attack_power=attack_power;
    }

    public setDefense_power(defense_power: number): void
    {
        this.defense_power=defense_power;
    }

    public setAbility(ability: number): void
    {
        this.ability=ability;
    }

    public new_stats(): void
    {
        this.setHealth(100);
        this.setAttack_power(getRandomInt(15,20));
        this.setDefense_power(getRandomInt(10,15));
    }
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}