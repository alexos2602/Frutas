let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus() {
    let desplazamientoActual = window.pageYOffset;

    if (desplazamientoActual <= 600) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s'
        menu.style.top = '50px';
        abrir.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s'
        menu.style.top = '100px';
        abrir.style.color = '#000';
    }
}

function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('click', function (e) {
    /* console.log(e.target); */
    if (cerrado == false) {
        let span = this.document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
})

abrir.addEventListener('click', function () {
    apertura();
})