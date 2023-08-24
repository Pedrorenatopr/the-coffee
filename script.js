const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx=0;
    }
    imgs.style.transform = `translateX(${-idx * 2000}px)`;
}

setInterval(carrossel, 3000);

function mudouTamanho() {
    if (window.innerWidth >= 700) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none' 
    }
}

function clickMenu() {
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}