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
function Creature(name, age, species){
    this.name = name;
    this.age = age;
    this.species = species;
}
Creature.prototype['say hello'] = function(){
    return console.log(`Hello, my name is ${this.name}`);
}

function Human(job, name, age, species){
    Creature.call(this, name, age, species);
    this.job = job;
}
Object.setPrototypeOf(Human.prototype,Creature.prototype);

function Dog(color, name, age, species){
    Creature.call(this, name, age, species);
    this.color = color;
}
Object.setPrototypeOf(Dog.prototype, Creature.prototype);


function Vampire(title, job, name, age, species){
    Human.call(this, job, name, age, species);
    this.title = title;
}
Object.setPrototypeOf(Vampire.prototype, Human.prototype);

let id = document.getElementById('head');
let human = new Human("FrontEND", 'Tolik', '25', 'human');
let dog = new Dog('white', 'Gabbi', '8', 'dog');
let vampire = new Vampire('count','darkside','Hasik', '21314','vampire');
let array = document.getElementsByClassName('protoBtn');
let noproto = new Object();
function changeStatus(e){
   Array.from(array).map(item => item.classList.remove('active'));
    e.classList.add('active');
    switch (e.textContent){
        case 'no prototype':
            id.src = './assets/images/magician.png';
            Object.setPrototypeOf(magician, noproto);
            properties.innerHTML = `<button onclick="magician['do magic']()">do magic</button>`
            break;
        case 'human prototype' :
            id.src = './assets/images/human.png';
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
    }
}
