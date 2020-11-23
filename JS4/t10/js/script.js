
async function getDataHero(nameOrId){
    let heroValue = await fetch(`https://superheroapi.com/api.php/2593928190897301/${nameOrId}`, {
    });
    const heroObject = await heroValue.json();
    console.log(heroObject);
    searchResultBlock(heroObject.results||heroObject);
}

function addForCompare(){
    const result = document.querySelectorAll('.hero');
    console.log(result);
    [...result].map(item => {
        item.addEventListener('click', function (){
            console.log(item.dataset);
            if (pullHero.size <= 20){
                pullHero.add(item.dataset.id);
                compareHero.value = `compare ${pullHero.size}`;
            } else {
                alert('Max heroes add 20!');
            }
        })
    })
}
function renderResultBlock(elem){
    const div = document.createElement('div');
    div.classList.add('hero');
    div.dataset.id = `${elem.id}`;
    div.innerHTML = `<span>${elem.name}</span><span>${elem.biography['full-name']}</span>`;
    return div;
}
function searchResultBlock(items){
     const resultBlock = document.getElementById('searchResult');
    resultBlock.innerHTML = ` `;
    console.log(items.size);
    if (!items.length){
        resultBlock.append(renderResultBlock(items));
    } else {
        [...items].map(item => {
            resultBlock.append(renderResultBlock(item));
        })
    }
 }







const [srcHero, randomHero, compareHero] = [...document.querySelectorAll('.btn')];
const pullHero = new Set();
const search = document.getElementById('searchPlaceholder');

srcHero.addEventListener('click', function () {

    getDataHero('search/' + search.value)
        .then(()=>{
        addForCompare();
    })
        .catch(() => alert('Character with given name not found'));
})


randomHero.addEventListener('click', function () {
    const randomNumberId = Math.floor(Math.random() * 731);
    getDataHero(randomNumberId)
        .then(()=>{
            addForCompare();
        })
})


compareHero.addEventListener('click', function () {
    alert('compare');
})



