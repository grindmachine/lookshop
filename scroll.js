var ticking = false;

const defaultScroll = function (e) {
    e.preventDefault();
    if (!ticking) {
        let el = this;
        window.requestAnimationFrame(function() {
            el.scrollLeft += e.deltaY;
            //console.log(el.scrollLeft, el.scrollWidth, el.parentNode.clientWidth, el.parentNode.offsetWidth);
            ticking = false;
        });

        ticking = true;
    }
}

window.addEventListener('load', function() {
    const elems = document.querySelectorAll('.default-scroll');
    for(let i = 0; i < elems.length; i++) {
        elems.item(i).addEventListener('wheel', defaultScroll.bind(elems.item(i)));
    }
    //if(elem) elem.addEventListener('wheel', defaultScroll.bind(elem)); 
});