
async function getDataHero(nameOrId){
    let heroValue = await fetch(`https://superheroapi.com/api.php/2593928190897301/${nameOrId}`);
    console.log(heroValue);
    const heroObject = await heroValue.json();
    console.log(heroObject);
    searchResultBlock(heroObject.results||heroObject);
}


async function powerStats(){
    let requests = await Array.from(pullHero).map(heroStats => fetch(`https://superheroapi.com/api.php/2593928190897301/${heroStats}/powerstats`).then(item => item.json()));
    let data = await Promise.all(requests);


    let nameOfStrength = ['Super-Hero-Stats','Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];
    let array = data.map(item => [item.name , item.intelligence === 'null' ? 10 : +item.intelligence, item.strength === 'null' ? 10 : +item.strength, item.speed === 'null' ? 10 : +item.speed, item.durability === 'null' ? 10 : +item.durability , item.power === 'null' ? 10 : +item.power, item.combat === 'null' ? 10 : +item.combat ]);
    array.unshift(nameOfStrength);
    console.log(array);
    resultBlock.innerHTML = '';
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawChart);
    drawChart(array);
}


function addForCompare(){
    const result = document.querySelectorAll('.hero');
    [...result].map(item => {
        item.addEventListener('click', function (){
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
    div.innerHTML = `<img class="heroImage" src="${elem.image.url}" onerror="this.src = 'https://proprikol.ru/wp-content/uploads/2020/07/kartinki-znak-voprosa-13-650x480.jpg'"><span>${elem.name}</span><span>${elem.biography['full-name']}</span>`;
    return div;
}


function searchResultBlock(items){
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
const resultBlock = document.getElementById('searchResult');

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
    powerStats();
})


function drawChart(items) {
    var data = google.visualization.arrayToDataTable(items);

    var options = {
        backgroundColor : '#404040',
        chartArea : {
            backgroundColor: 'darkgray'
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}


