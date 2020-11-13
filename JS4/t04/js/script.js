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
        this._portrait = _portrait;
    }
    ['say hello'](){
        return console.log(`Hello, my name is ${this.name}`);
    }
}
class Human extends Creature{
    constructor(name, age, species ,job, _portrait) {
        super(name,age,species,_portrait);
        this.job = job;
    }
}
class Dog extends Creature{
    constructor(name, age, species, color, _portrait) {
        super(name, age, species, _portrait);
        this.color = color;
    }
}
class Vampire extends Human{
    constructor(name, age, species, job, title, _portrait) {
        super(name, age, species ,job,_portrait);
        this.title = title;
    }
}
wolfHowl = {
    howl() {
      return console.log('ARH-WOOOOOOOOOOOOOOOOOOOO');
    }
}
class Werewolf extends Human{
    constructor(name, age, species ,job, _portrait) {
        super(name, age, species ,job,_portrait);
        this._isWolf = false;
    }
    transform() {
        if(!this._isWolf){
            Object.assign(Werewolf.prototype, wolfHowl);
            this._isWolf = true;
            howl.style.display = 'block';
            this.species = 'werewolf';
            this.job = 'bum';
            id.src = './assets/images/werewolf.png';
            speciesValue.innerHTML = `${this.species}`;
            job.innerHTML = `${this.job}`;
        }else {
            id.src = wolf._portrait;
            howl.style.display = 'none';
            delete Werewolf.prototype.howl;
            this._isWolf = false;
            this.species = 'human';
            this.job = 'teacher';
            speciesValue.innerHTML = `${this.species}`;
            job.innerHTML = `${this.job}`;
        }
    }
}

let id = document.getElementById('head');
let human = new Human('Sveta', 25, 'human',  'FrontEnd', './assets/images/human.png');
let dog = new Dog("Gabbi", 8, 'dog',  'white', './assets/images/dog.png');
let vampire = new Vampire('Hasik', '214', 'vampire', 'assassin','count', './assets/images/vampire.png');
let wolf = new Werewolf('Bufa', 11, 'human', 'teacher', './assets/images/human.png');

let array = document.getElementsByClassName('protoBtn');
let noproto = new Object();
function changeStatus(e){
    Array.from(array).map(item => item.classList.remove('active'));
    e.classList.add('active');
    switch (e.textContent){
        case 'no prototype':
            id.src = magician._getPortrait();
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
            id.src = vampire._portrait;
            Object.setPrototypeOf(magician, vampire);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>
                                    <button onclick="vampire['say hello']()">say hello</button>
                                    <div><span>Name:</span> <span class="propValue">${vampire.name}</span></div>
                                    <div><span>Age:</span> <span class="propValue">${vampire.age}</span></div>
                                    <div><span>Species:</span> <span class="propValue">${vampire.species}</span></div>
                                    <div><span>Job:</span> <span class="propValue">${vampire.job}</span></div>
                                    <div><span>Title:</span> <span class="propValue">${vampire.title}</span></div>`
            break;
        case 'dog prototype' :
            id.src = dog._portrait;
            Object.setPrototypeOf(magician, dog);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>
                                    <button onclick="dog['say hello']()">say hello</button>
                                    <div><span>Name:</span> <span class="propValue">${dog.name}</span></div>
                                    <div><span>Age:</span> <span class="propValue">${dog.age}</span></div>
                                    <div><span>Species:</span> <span class="propValue">${dog.species}</span></div>
                                    <div><span>Color:</span> <span class="propValue">${dog.color}</span></div>`
            break;
        case 'werewolf prototype':
            id.src = wolf._portrait;
            Object.setPrototypeOf(magician, wolf);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>
                                    <button onclick="wolf['say hello']()">say hello</button>
                                    <button onclick="wolf.transform()">transform</button>
                                    <button id="howl" onclick="wolf.howl()" style="display: none">HOWl</button>
                                    <div><span>Name:</span> <span class="propValue">${wolf.name}</span></div>
                                    <div><span>Age:</span> <span class="propValue">${wolf.age}</span></div>
                                    <div><span id="species">Species:</span> <span id="speciesValue" class="propValue">${wolf.species}</span></div>
                                    <div><span >Job:</span> <span id="job" class="propValue">${wolf.job}</span></div>
            `
            break;
    }
}

