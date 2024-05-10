
//definindo a classe genérica "herói" como hero

class Hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    //método para ataque dependendo da classe/tipo escolhida
    attack(){
        let attackDescription;
        switch (this.type) {
            case 'mage':
                attackDescription = 'magic';
                break;
            case 'warrior':
                attackDescription = 'his sword';
                break;
            case 'monk':
                attackDescription = 'martial art';
                break;
            case 'ninja':
                attackDescription = 'shuriken';
                break;
            case 'thief':
                attackDescription = 'poison';
                break;
            case 'ranger':
                attackDescription = 'bow';
                break;
            default:
                attackDescription = 'punch';
        }
    console.log (`The ${this.type} attack using ${attackDescription}.`);
    }
}

//exemplos

const heroMage = new Hero('Potter', 20, 'mage');
heroMage.attack();

const heroWarrior = new Hero('Kratos', 1055, 'warrior');
heroWarrior.attack();