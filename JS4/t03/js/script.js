color = ['red', 'yellow', 'blue', 'green', 'orange', 'purple'];
let mainContain = document.getElementById('mainContain');
document.addEventListener('DOMContentLoaded',function (){
for (let block of color){
    let div = document.createElement('div');
    div.classList.add('block');
    div.style.backgroundColor = block;
    for(let i = true; i !== false;){
        let number1 = Math.floor((Math.random() * mainContain.clientWidth));
        let number2 = Math.floor((Math.random() * mainContain.clientHeight));
        if(number1 >150 && number1 < mainContain.clientWidth - 150 && number2 > 150 && number2 < mainContain.clientHeight - 150){
            div.style.left = number1 + 'px';
            div.style.top = number2 + 'px';
            console.log(number1 + '   ' + number2);
            i = false;
        }
    }
    mainContain.append(div);
}

})
let blocks = document.querySelector('block');
console.log(blocks);
for (let item of blocks){
    console.log(item);
    alert('hi');
}
mainContain.addEventListener('mousedown', function (event){
    let target = event.target;
    if(target.classList.value === 'block'){
        let shiftX = event.clientX - target.getBoundingClientRect().left;
        let shiftY = event.clientY - target.getBoundingClientRect().top;
        console.log(shiftX);
        console.log(shiftY);
        moveAt(event.pageX, event.pageY)
        function moveAt(pageX, pageY) {
            target.style.left = pageX - shiftX + 'px';
            target.style.top = pageY - shiftY + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        target.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            target.onmouseup = null;
        };
        target.ondragstart = function() {
            return false;
        };
    }

})


