

    function isVisible(elem) {

    let coords = elem.getBoundingClientRect();


    let extendedTop = -1200;
    let extendedBottom = 1200;

    // top visible || bottom visible
    let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
    let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

    return topVisible || bottomVisible;
}


    function showVisible() {
    for (let img of document.querySelectorAll('img')) {
    let realSrc = img.dataset.src;
    if (!realSrc) continue;

    if (isVisible(img)) {
    // отключение кеширования
    // эта строка должна быть удалена в "боевом" коде

    img.src = realSrc;

    img.dataset.src = '';
}
}
}
    window.addEventListener('scroll', showVisible);
    showVisible();

    let number = setTimeout(function elementVisible (){
        let img = document.querySelectorAll('img');
        let placeholder = document.querySelectorAll('.imagePlaceholder');
        let visibleImgLength = Array.from(img).filter(item => item.dataset.src !== '').length;
        placeholder[0].innerHTML = `<span>${img.length - visibleImgLength} images loaded from ${img.length}</span>`;
        placeholder[0].style.backgroundColor = visibleImgLength === 0 ? 'green' : 'red';
        number = setTimeout(elementVisible, 500);
    }, 1000)
