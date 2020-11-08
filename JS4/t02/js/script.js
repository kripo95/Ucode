class Human {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = 200;
        this.act = false;
        this.time;
    }
    sleepFor() {
            if(!this.act){
                let delay = +prompt('How much time sleep?') * 1000;
               this.time = setTimeout(sleep.bind(this), delay);
                this.act = true;
                imageContain.classList.add('iMsleep');
            }
            else {
                console.log('wait from end act')
            }
    }
    feed(){
        if (!this.act){
            imageContain.classList.add('imEat');
            this.act = true;
            this.time = setTimeout(eats.bind(this), 10000);
           if(this.calories > 500){
               imageContain.classList.add('imNotHungry');
               this.time = setTimeout(function (){imageContain.classList.remove('imNotHungry')}, 1000);
           }else if(this.calories < 500){
               imageContain.classList.add('imStillHungry');
               this.time = setTimeout(function (){imageContain.classList.remove('imStillHungry')}, 1000);
           }
        }else {
            console.log('wait from end act')
        }
    }
    losesCalorier() {
        this.time =  setTimeout(cal.bind(this), 5000);
    }
}
function cal(){
    if(this.calories <= 0){
        imageContain.classList.add('imHungry');
        this.time = setTimeout(function (){imageContain.classList.remove('imHungry')}, 1000);
    }else if (this.calories > 0){
        this.calories -= 200;
    }
    this.time = setTimeout(cal.bind(this), 60000);
    caloriesSpan.innerHTML = `Calories: ${this.calories}`;
}
function eats(){
        this.act = false;
        this.calories += 200;
        imageContain.classList.remove('imEat');
        caloriesSpan.innerHTML = `Calories: ${this.calories}`;
}
function sleep(){
    this.act = false;
    imageContain.classList.remove('iMsleep');
    imageContain.classList.add('imWakeUp');
    this.time = setTimeout(function (){imageContain.classList.remove('imWakeUp')}, 3000);
}

let tony = new Human('Tony', 'Stark', 'Man', 55);
class Superhero extends Human{
    constructor(age, gender, nameHero,) {
        super(age, gender);
        this.nameHero = nameHero;
        this.calories = 600;
        this.act = false;
    }
    fly(){
        setTimeout(flying.bind(this), 10000);
        console.log(`${this.nameHero} flying`)
    }
}
function flying(){
    this.act = false;
    this.calories -= 100;
    console.log(`${this.nameHero} stop flying`)
}
let ironMan = new Superhero('55', 'Man', 'Iron Man');
let createHuman = document.getElementById('createHuman');
let mainContain = document.getElementById('mainContain');
createHuman.addEventListener('click', function (){
    mainContain.innerHTML = '';
    mainContain.innerHTML = `
    <div class="imageContain" id="imageContain"><img src="assets/images/TonyStark.jpg" alt="human"></div>
    <span>First name: ${tony.firstName}</span>
    <span>Last name: ${tony.lastName}</span>
    <span>Gender: ${tony.gender}</span>
    <span>Age: ${tony.age}</span>
    <span id="caloriesSpan">Calories: ${tony.calories}</span>
    <button class="doSleep" id="sleep">sleep</button>
    <button class="doEat" id="eat">eat</button>
    <button class="doSuperhero" id="superHero">Turn to Superhero</button>
    `
    tony.losesCalorier();
    let sleep = document.getElementById('sleep');
    sleep.addEventListener('click', function (){
        tony.sleepFor();
    });
    let eat = document.getElementById('eat');
    eat.addEventListener('click', function (){
        tony.feed();
    })
    let superHero = document.getElementById('superHero');
    superHero.addEventListener('click', function (){
        mainContain.innerHTML = '';
        clearTimeout(tony.time);
    })
});
