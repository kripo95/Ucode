let salats = new Map([
    ['Greek Salad' , 5.99],
    ['Caesar Salad', 7.99]]
);
let main = new Map([
    ['Margherita Pizza', 12.50],
    ['Tomato Soup', 6.99],
    ['Burger', 10.00]
]);
let deserts = new Map([
    ['Margherita Pizza', 12.50],
    ['Tomato Soup', 6.99],
    ['Burger', 10.00]
]);
let drinks = new Map([
    ['Lemonade', 3.20],
    ['Green Tea', 1.50],
    ['Coffee', 1.99]
]);
let menu = new Map([
    ['Salads', salats],
    ['Main Dishes', main],
    ['Desserts', deserts],
    ['Drinks', drinks]
    ]);
let mainContain = document.getElementById('mainContain');
function renderMenu(obj){

}

let result = menu.keys();
for (let item of result){
    console.log(item);
}
let value = menu.values();
let done;
for(let item of value){
    let a = Array.from(item);
    console.log(a[0][1])
    done = Array.from(item).reduce(function(sum, current){
      return  sum + `<li><span>${current[0]}</span><span>$ ${current[1]}</span></li>`, `<li><span>${current[0]}</span><span>$ ${current[1]}</span></li>`;
    })

    console.log(done);
}
