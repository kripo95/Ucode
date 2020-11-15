let user = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value
};

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