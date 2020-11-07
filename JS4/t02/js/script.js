class Human {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.calories = 0;
        this.imSleep = false;
        this.imEats = false;
    }
    sleepFor() {
            if(!this.imSleep){
                let delay = +prompt('How much time sleep?')
                setTimeout(sleep.bind(this), delay);
                this.imSleep = true;
                console.log(`${this.firstName} sleep`);
            }
    }
    feed(){
        if (!this.imEats){
           if (this.calories > 500){console.log('I\'m not hungry')}
            console.log(`${this.firstName} Nom Nom Nom`);
            setTimeout(eats.bind(this), 1000);
        }
    }

}
function eats(){
        this.imEats = false;
        this.calories += 200;
        if(this.calories < 500) console.log('I\'m still hungry');
}
function sleep(){
    this.imSleep = false;
    console.log(`${this.firstName} wakeUP`)
}

let a = new Human('Tolik', 'Kravchenko', 'man', 23);
let b = new Human('Sveta', 'Yurchenko', 'woman', 24);

