let user = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value
};
// Don't edit above this line

user = new Proxy(user, {
    set(target, p, value) {
        switch (p){
            case 'name':
                if (/^[a-zA-Z]/gm.test(value)){
                    target[p] = value.split(' ').filter(str => str !== '').map(str => str.slice(0,1).toUpperCase() + str.slice(1)).join(' ');
                    return true;
                }else return false;
            case 'age':
                if(!(/^0|(\D)/gmi.test(value))){
                    target[p] = value.slice(0,3);
                    return true;
                }else return false;
            case 'email':
                if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)){
                    target[p] = value;
                    return true;
                }else return false;
        }
    }
});
function number (item){
   return  item.split(' ').filter(string => string !== '').map(string => string.slice(0,1).toUpperCase() + string.slice(1)).join(' ');
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