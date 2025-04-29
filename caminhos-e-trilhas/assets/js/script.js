let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let btnFechar = document.getElementById('btn-fechar')


btnMenu.addEventListener( 'click' ,()=>{
    menu.classList.add('abrir-menu')
    
})

btnFechar.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})





let sectionTeste = document.querySelector("section.mais__visitados");
        sectionTeste.querySelectorAll(".container .item").forEach(item => {
            let label = item.querySelector("label");
            let input = item.querySelector("input");

            label.addEventListener("mouseover", () => {
                input.checked = true;
            })
        })