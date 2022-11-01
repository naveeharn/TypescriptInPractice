abstract class StreetFighter {
    constructor() {}

    move() {}
    fight() {
        console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
    }

    abstract get name(): string
    abstract getSpecialAttack(): string
}

class Ryu extends StreetFighter {
    get name(): string {
        return 'Ryu'
    }
    getSpecialAttack(): string {
        return 'Hadoken'
    }
}

class ChunLi extends StreetFighter {
    get name(): string {
        return 'Chun-Li'
    }
    getSpecialAttack(): string {
        return 'Lighting Kick'
    }
    
}

const ryu = new Ryu()
console.log(ryu.getSpecialAttack());
ryu.fight();

const chunLi = new ChunLi()
chunLi.fight()