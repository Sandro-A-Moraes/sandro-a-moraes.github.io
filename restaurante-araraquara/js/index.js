let elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach((duvida) => {
    console.log(duvida);
    duvida.addEventListener("click", () => {
        duvida.classList.toggle('ativa');
    });
});

let elementosArrows = document.querySelectorAll('.arrowDuvidas');

elementosArrows.forEach((arrowsDuvidas) => {
    console.log(arrowsDuvidas);
    arrowsDuvidas.addEventListener("click", () =>{
        arrowsDuvidas.classList.toggle('turn')
    })
})