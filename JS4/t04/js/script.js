const magician = {
    _hat: './assets/images/hat.png',
    _getPortrait(){
        if (this._portrait) return this._portrait;
        else return './assets/images/magician.png'; },
    'do magic'(){
        console.log(`ABRACADABRA
        The prototype of ${this.name} is `);
        console.log(Object.getPrototypeOf(this));
    }
};
class Creature{
    constructor(name, age, species, _portrait) {
        this.name = name;
        this.age = age;
        this.species = species;
        this._portrait
    }
    ['say hello'](){
        return console.log(`Hello, my name is ${this.name}`);
    }
}
class Human extends Creature{
    constructor(name, age, species, _portrait ,job) {
        super(name,age,species, _portrait);
        this.job = job;
    }
}
class Dog extends Creature{
    constructor(name, age, species, _portrait, color) {
        super(name, age, species, _portrait);
        this.color = color;
    }
}
class Vampire extends Human{
    constructor(name, age, species, _portrait, job, title) {
        super(name, age, species, _portrait ,job);
        this.title = title;
    }
}
class Werewolf extends Human{
    constructor(name, age, species, _portrait ,job, _isWolf) {
        super(name, age, species, _portrait ,job);
        this._isWolf = false;
    }
}
let id = document.getElementById('head');
let human = new Human('Sveta', 25, 'human', './assets/images/magician.png', 'FrontEnd');
let dog = new Dog("Gabbi", 8, 'dog', './assets/images/magician.png', 'white');
let vampire = new Vampire('Hasik', '214', 'vampire','./assets/images/magician.png', 'assassin','count');
let wolf = new Werewolf('Bufa', 11, 'wolf','./assets/images/magician.png', 'bum');
let array = document.getElementsByClassName('protoBtn');
let noproto = new Object();
function changeStatus(e){
    for (let item of array){
        item.classList.remove('active');
    }
    e.classList.add('active');
    switch (e.textContent){
        case 'no prototype':
            id.src = './assets/images/magician.png';
            Object.setPrototypeOf(magician, noproto);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>`
            break;
        case 'human prototype' :
            id.src = human._portrait;
            Object.setPrototypeOf(magician, human);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>
                                    <button onclick="human['say hello']()">say hello</button>
                                    <div><span>Name:</span> <span class="propValue">${human.name}</span></div>
                                    <div><span>Age:</span> <span class="propValue">${human.age}</span></div>
                                    <div><span>Species:</span> <span class="propValue">${human.species}</span></div>
                                    <div><span>Job:</span> <span class="propValue">${human.job}</span></div>`
            break;
        case 'vampire prototype' :
            id.src = './assets/images/vampire.png';
            Object.setPrototypeOf(magician, vampire);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>
                                    <button onclick="vampire['say hello']()">say hello</button>
                                    <div><span>Name:</span> <span class="propValue">${vampire.name}</span></div>
                                    <div><span>Age:</span> <span class="propValue">${vampire.age}</span></div>
                                    <div><span>Species:</span> <span class="propValue">${vampire.species}</span></div>
                                    <div><span>Job:</span> <span class="propValue">${vampire.job}</span></div>
                                    <div><span>Job:</span> <span class="propValue">${vampire.title}</span></div>`
            break;
        case 'dog prototype' :
            id.src = './assets/images/dog.png';
            Object.setPrototypeOf(magician, dog);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>
                                    <button onclick="dog['say hello']()">say hello</button>
                                    <div><span>Name:</span> <span class="propValue">${dog.name}</span></div>
                                    <div><span>Age:</span> <span class="propValue">${dog.age}</span></div>
                                    <div><span>Species:</span> <span class="propValue">${dog.species}</span></div>
                                    <div><span>Color:</span> <span class="propValue">${dog.color}</span></div>`
            break;
        case 'werewolf prototype':
            id.src = './assets/images/human.png';
            Object.setPrototypeOf(magician, wolf);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>
                                    <button onclick="wolf['say hello']()">say hello</button>
                                    <button>transform</button>
                                    <div><span>Name:</span> <span class="propValue">${wolf.name}</span></div>
                                    <div><span>Age:</span> <span class="propValue">${wolf.age}</span></div>
                                    <div><span>Species:</span> <span class="propValue">${wolf.species}</span></div>
                                    <div><span>Color:</span> <span class="propValue">${wolf.job}</span></div>
            `
            break;
    }
}