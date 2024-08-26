let hg = 10;
let ht = 10;

function myFunctionMorango() {
    document.getElementById("grafico1");
        grafico1.innerText = hg;
    if (hg <= 80){
        hg += 10;
        grafico1.style.height = hg+"%";
        document.getElementById("resultado").innerText = "Você escolheu morango";
} else 
    if (hg = 90){
        document.getElementById("resultado").innerText =  "Morango atingiu o volume máximo do gráfico";
        hg = 10;
}
}

function myFunctionBanana() {
    document.getElementById("grafico2");
    grafico2.innerText = ht;
    if (ht <= 80) {
        ht += 10;
        grafico2.style.height = ht+"%";
        document.getElementById("resultado").innerText = "Você escolheu banana";
} else
    if (ht = 90) {
        document.getElementById("resultado").innerText =  "Banana atingiu o volume máximo do gráfico";
        ht = 10;
    }
    }