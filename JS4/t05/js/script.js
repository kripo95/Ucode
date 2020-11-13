let salats = new Map([
    ['Greek Salad' , "5.99"],
    ['Caesar Salad', "7.99"]]
);
let main = new Map([
    ['Margherita Pizza', "12.50"],
    ['Tomato Soup', "6.99"],
    ['Burger', "10.00"]
]);
let deserts = new Map([
    ['Cheesecake', "4.99"],
    ['Chocolate Ice-Cream', "2.50"],
    ['Fruit Salad', "3.99"]
]);
let drinks = new Map([
    ['Lemonade', "3.20"],
    ['Green Tea', "1.50"],
    ['Coffee', "1.99"]
]);
let menu = new Map([
    ['Salads', salats],
    ['Main Dishes', main],
    ['Desserts', deserts],
    ['Drinks', drinks]
    ]);
let mainContain = document.getElementById('mainContain');
function renderMenu(){
    let arr1 = [];
    let value = menu.values();
    for(let item of value){
        arr1.push(Array.from(item).map(current =>`<li><span>${current[0]}</span><span>$ ${current[1]}</span></li>`).join(' '));
    }
    let menuTitle = menu.keys();
    Array.from(menuTitle).forEach((item, index) => {
        let ul = document.createElement('ul');
        ul.innerHTML = `<li>${item}</li> ${arr1[index]}`
        mainContain.append(ul);
    })
}
renderMenu();


