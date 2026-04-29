import { Player } from './Player.js';




function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function match():void
{
    let startingPlayer:number=getRandomInt(1,2);
    const player1 = new Player();
    const player2 = new Player();
    
    let contor: number = 1;

    player1.new_stats();
    player2.new_stats();

    console.log(`Character 1: attack = ${player1.getAttack_power()}, defense = ${player1.getDefense_power()}`);
    console.log(`Character 2: attack = ${player2.getAttack_power()}, defense = ${player2.getDefense_power()}`);
    console.log('');

    while(true)
    {
        console.log(`Round ${contor}:`);

        if(startingPlayer==1 && contor%2==1)
        {
            round(player1,player2,1);
        }
        else
            if(startingPlayer==1 && contor%2==0)
            {
                round(player2,player1,2);
            }

        if(startingPlayer==2 && contor%2==1)
        {
            round(player2,player1,2);
        }
        else
            if(startingPlayer==2 && contor%2==0)
            {
                round(player1,player2,1);
            }

        if(player1.getHealth()>0 && player2.getHealth()>0)
            contor++;
        else
            break;
    }
    if(player1.getHealth()==0)
        console.log('Character 2 won!')
    if(player2.getHealth()==0)
        console.log('Character 1 won!')

}

function round(attackPlayer: Player,defensePlayer: Player,countOfPlayer: number): void
{
    attackPlayer.setAbility(getRandomInt(1,3));
    defensePlayer.setAbility(getRandomInt(1,3));

    let abilityActivationAttackPlayer: number = getRandomInt(1,4);
    let abilityActivationDefensePlayer: number = getRandomInt(1,4);

    let attack=attackPlayer.getAttack_power();
    let defense=defensePlayer.getDefense_power();

    let reducedDamage: boolean=false;
    let healWind: boolean=false;

    let p1:number;
    let p2:number;

    let abilityUsed: boolean=false;

    if(countOfPlayer==1)
    {
        p1=1;
        p2=2;
    }
    else
    {
        p1=2;
        p2=1;
    }

    console.log(`Character ${p1} attacks`);


    if(abilityActivationAttackPlayer==1 && attackPlayer.getAbility()==2)
    {
        attack = attack + Math.round(attack/2);
        console.log(`Character ${p1} activates Power Strike`);
        abilityUsed=true;
    }

    if (abilityActivationDefensePlayer==1)
    {
        if(defensePlayer.getAbility()==1)
        {
            reducedDamage=true;
        }

        if(defensePlayer.getAbility()==3)
        {
            healWind=true;
        }
    }

    let damage=attack-defense;

    if(reducedDamage==true)
    {
        damage=Math.round(damage/2);
        abilityUsed=true;

        console.log(`Character ${p2} activates Damage Reduction`);
    }

    if(healWind==true && defensePlayer.getHealth()-damage<=30)
    {
        damage=damage-5;
        abilityUsed=true;

        console.log(`Character ${p2} activates Second Wind`);
    }


    if(abilityUsed==false)
    {
        console.log('No ability activated');
    }

    let newHealth=defensePlayer.getHealth();
    newHealth=newHealth-damage;
    if(newHealth<=0)
        newHealth=0;
    defensePlayer.setHealth(newHealth);

    console.log(`Character ${p2} has ${defensePlayer.getHealth()} health`);
    console.log('');

}

match();
