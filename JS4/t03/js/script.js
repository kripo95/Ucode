color = ['red', 'yellow', 'blue', 'green', 'orange', 'purple'];
let mainContain = document.getElementById('mainContain');
document.addEventListener('DOMContentLoaded',function (){
for (let block of color){
    let div = document.createElement('div');
    div.classList.add('block');
    div.style.backgroundColor = block;
    div.style.left = Math.floor((Math.random() * window.innerWidth) - 50)  + 'px';
    div.style.top = Math.floor((Math.random() * window.innerHeight) - 50)  + 'px';
    mainContain.append(div);

}
})


