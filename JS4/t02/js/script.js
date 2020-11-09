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
            setTimeout(eats.bind(this), 10000);
           if(this.calories > 500){
               imageContain.classList.add('imNotHungry');
               setTimeout(function (){imageContain.classList.remove('imNotHungry')}, 1000);
           }else if(this.calories < 500){
               imageContain.classList.add('imStillHungry');
               setTimeout(function (){imageContain.classList.remove('imStillHungry')}, 1000);
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
        setTimeout(function (){imageContain.classList.remove('imHungry')}, 1000);
    }else if (this.calories > 0){
        this.calories -= 200;
    }
    setTimeout(cal.bind(this), 60000);
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
    setTimeout(function (){imageContain.classList.remove('imWakeUp')}, 3000);
}

let tony = new Human('Tony', 'Stark', 'Man', 55);
class Superhero extends Human{
    constructor(firstName, lastName, gender, age, superName) {
        super(firstName, lastName, gender, age);
        this.superName = superName;
    }
    sleepFor() {
        super.sleepFor();
    }
    feed() {
        super.feed();
    }
    losesCalorier() {
        super.losesCalorier();
    }

    fly() {
            imageContain.classList.add('cloudFly');
            setTimeout(function (){imageContain.classList.remove('cloudFly')}, 3000);
    }
    fightWithEvil(){
        if(this.calories > 100){
            imageContain.classList.add('fightEvil');
            setTimeout(function (){imageContain.classList.remove('fightEvil')}, 1000);
            this.calories -= 100;
        }
    }
}

let ironMan = null;
let createHuman = document.getElementById('createHuman');
let mainContain = document.getElementById('mainContain');
createHuman.addEventListener('click', function (){
    render(tony);
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
        if(tony.calories > 100){
            ironMan = new Superhero('Tony', 'Stark', 'Man', 55, 'Iron Man');
            mainContain.innerHTML = '';
            clearTimeout(tony.time);
            ironMan.losesCalorier();
            render(ironMan);
            let sleep = document.getElementById('sleep');
            sleep.addEventListener('click',function (){
                ironMan.sleepFor();
            })
            let eat = document.getElementById('eat');
            eat.addEventListener('click', function (){
                ironMan.feed();
            })
            let flyIron = document.getElementById('fly');
            flyIron.addEventListener('click',function (){
                ironMan.fly();
            })
            let fightIron = document.getElementById('fight');
            fightIron.addEventListener('click',function (){
                ironMan.fightWithEvil();

            })
        }

    })
});
function render(obj){
    mainContain.innerHTML = '';
    mainContain.innerHTML = `
    <div class="imageContain" id="imageContain"><img ${ironMan === null ? 'src="assets/images/TonyStark.jpg" alt="human"':'src="assets/images/ironMan.jpg" alt="ironMan"'}></div>
    ${ironMan !== null ? '<span>Name Hero:' + ' ' + ironMan.superName + '</span>' : ''}
    <span>First name: ${obj.firstName}</span>
    <span>Last name: ${obj.lastName}</span>
    <span>Gender: ${obj.gender}</span>
    <span>Age: ${obj.age}</span>
    <span id="caloriesSpan">Calories: ${obj.calories}</span>
    <button class="doSleep" id="sleep">sleep</button>
    <button class="doEat" id="eat">eat</button>
    ${ironMan === null ? '<button class="doSuperhero" id="superHero">Turn to Superhero</button>': ''}
    ${ironMan !== null ? '<button class="doSuperhero" id="fly">Fly</button>' : ''}
    ${ironMan !== null ? '<button class="doSuperhero" id="fight">Fight</button>': ''}
    `
}