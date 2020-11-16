let user = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value
};
// Don't edit above this line

// user = new Proxy(user, {
//     set(target, p, value) {
//         switch (p){
//             case 'name':
//                 break;
//             case 'age':
//                 if(typeof +value == 'number' && !value.startsWith('0')){
//                     target[p] = value;
//                     return true;
//                 }
//         }
//     }
// });
function number (item){
    if(/^0|(\D)/gmi.test(item)){
        return item;
    }else {
        return false;
    }
}
function string(item){
    if(){

    }else {

    }
}


// Don't edit above this line
function edit(btn) {
    btn.innerHTML = 'save';
    btn.setAttribute('onclick', 'save(this)');
    const input =document.getElementById(btn.previousElementSibling.id);
    input.removeAttribute('disabled');
}

function save(btn) {
    btn.innerHTML = 'edit';
    btn.setAttribute('onclick', 'edit(this)');
    const input =document.getElementById(btn.previousElementSibling.id);
    input.setAttribute('disabled', 'true');
    user[input.id] = document.getElementById(input.id).value;
    document.getElementById(input.id).value = user[input.id];
}