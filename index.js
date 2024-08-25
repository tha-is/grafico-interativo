const morangoButton = document.querySelector('.morango');
const bananaButton = document.querySelector('.banana');
const grafMorango = document.querySelector('#grafico-morango');

function testOne(){
    
    grafMorango.resizeTo(20,100);
}

morangoButton.onclick = testOne;