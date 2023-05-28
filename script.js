let chess = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
];

function drawChessBoard() {
    let bloks = "";
    let m = 0;
    for(i=0; i < chess.length; i++) {
        let arr = chess[i];
        for(let k=0; k<chess.length; k++){
            if(m%2 == 0){
                bloks+=`<div class="chess_blok colorwhite" data-x=${k} data-y=${i}></div>`;
            }else{
                bloks+=`<div class="chess_blok gray" data-x=${k} data-y=${i}></div>`;
            }
            m++;
        }
        m++;
    }
    document.querySelector("#chessboard").innerHTML = bloks;
    document.querySelectorAll(".chess_blok").forEach(function(elem){
        elem.onclick = getHorseSteps;
    })
}
drawChessBoard();

function getHorseSteps() {
    document.querySelectorAll(".chess_blok").forEach(function(element){
        element.classList.remove("green");
        element.classList.remove("activhorse");
    })
    let x = this.dataset.x;
    let y = this.dataset.y;
    console.log(x  + " " + y);
    this.classList.add("green");
    if(+x + 2 < 8 && +y + 1 < 8 ){
        document.querySelector(`.chess_blok[data-x="${+x + 2}"][data-y="${+y +1}"]`).classList.add("activhorse");  
    }
    if(+x + 2 < 8 && +y - 1 >=0 ){
        document.querySelector(`.chess_blok[data-x="${+x + 2}"][data-y="${+y -1}"]`).classList.add("activhorse");  
    }
    if(+x - 2 >=0 && +y + 1 < 8 ){
        document.querySelector(`.chess_blok[data-x="${+x - 2}"][data-y="${+y +1}"]`).classList.add("activhorse");  
    }
    if(+x - 2 >=0 && +y - 1 >=0 ){
        document.querySelector(`.chess_blok[data-x="${+x - 2}"][data-y="${+y -1}"]`).classList.add("activhorse");  
    }
    if(+x + 1 < 8 && +y -  2 >=0 ){
        document.querySelector(`.chess_blok[data-x="${+x +1}"][data-y="${+y -2}"]`).classList.add("activhorse");  
    }
    if(+x - 1 >=0 && +y - 2 >=0 ){
        document.querySelector(`.chess_blok[data-x="${+x -1}"][data-y="${+y -2}"]`).classList.add("activhorse");  
    }
    if(+x + 1 < 8 && +y + 2 <8){
        document.querySelector(`.chess_blok[data-x="${+x +1}"][data-y="${+y +2}"]`).classList.add("activhorse");  
    }
    if(+x - 1 >=0 && +y + 2 <8 ){
        document.querySelector(`.chess_blok[data-x="${+x -1}"][data-y="${+y +2}"]`).classList.add("activhorse");  
    }
}

setInterval(() => change(), 8000);

function change() {
    document.querySelector(".inerBanner").classList.add("newcolor")
    setTimeout(() => document.querySelector(".inerBanner").classList.remove("newcolor"), 5000);
}

