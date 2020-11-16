

    function isVisible(elem) {

    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight / 3;

    let extendedTop = -windowHeight;
    let extendedBottom = 2 * windowHeight;

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
    realSrc += '?nocache=' + Math.random();

    img.src = realSrc;

    img.dataset.src = '';
}
}
}

    window.addEventListener('scroll', showVisible);
    showVisible();