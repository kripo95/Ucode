color = ['red', 'yellow', 'blue', 'green', 'orange', 'purple'];
const num1 = Math.floor(Math.random() * (5 + 1) );
const num2 = 5 - num1;
console.log(num1 + 'ad' + num2);

let mainContain = document.getElementById('mainContain');
document.addEventListener('DOMContentLoaded',function (){
    color.forEach(function (item,id){
        let div = document.createElement('div');
        div.classList.add('block');
        div.style.backgroundColor = item;
        for(let i = true; i !== false;){
            let number1 = Math.floor((Math.random() * mainContain.clientWidth));
            let number2 = Math.floor((Math.random() * mainContain.clientHeight));
            if(number1 >150 && number1 < mainContain.clientWidth - 150 && number2 > 150 && number2 < mainContain.clientHeight - 150){
                div.style.left = number1 + 'px';
                div.style.top = number2 + 'px';
                i = false;
            }
            if(id === num1 || id === num2){
                div.style.position = 'relative';
                div.style.border = '5px dashed grey';
                div.classList.add('noactive');
            }
        }
        mainContain.append(div);
    })
    let status = false;
    let blocks = document.getElementsByClassName('block');
    for(let item of blocks){
        if(!item.classList.contains('noactive')){
            item.onmousedown = function (event){
                if(status === false){
                    status = true;
                    let shiftX = event.clientX - item.getBoundingClientRect().left;
                    let shiftY = event.clientY - item.getBoundingClientRect().top;
                    function moveAt(pageX, pageY) {
                        item.style.left = pageX - shiftX + 'px';
                        item.style.top = pageY - shiftY + 'px';
                    }
                    function onMouseMove(event) {
                        moveAt(event.pageX, event.pageY);
                    }
                    document.addEventListener('mousemove', onMouseMove);
                    item.onmouseup = function() {
                        document.removeEventListener('mousemove', onMouseMove);
                        item.onmouseup = null;
                        status = false;
                    };
                }

            }
            item.ondragstart = function() {
                return false;
            };
        }
    }
})







