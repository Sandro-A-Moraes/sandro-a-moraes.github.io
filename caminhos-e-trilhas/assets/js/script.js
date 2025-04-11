// ANIMAÇÕES DO MENU (NÃO MEXER)

document.querySelector(".menu_hamburguer").addEventListener("click", () => document.querySelector(".container").classList.toggle("show_menu"));
document.querySelector(".menu_hamburguer").addEventListener("click", () => document.querySelector(".fundo_vidro").classList.toggle("efeito_vidro"));

// Animações dos itens de menu (tentei uma classe única, mas funcionava apenas para o primeiro item)

document.querySelector("#menu_link_1").addEventListener("click", () => document.querySelector(".container").classList.toggle("show_menu"));
document.querySelector("#menu_link_1").addEventListener("click", () => document.querySelector(".fundo_vidro").classList.toggle("efeito_vidro"));

document.querySelector("#menu_link_2").addEventListener("click", () => document.querySelector(".container").classList.toggle("show_menu"));
document.querySelector("#menu_link_2").addEventListener("click", () => document.querySelector(".fundo_vidro").classList.toggle("efeito_vidro"));

document.querySelector("#menu_link_3").addEventListener("click", () => document.querySelector(".container").classList.toggle("show_menu"));
document.querySelector("#menu_link_3").addEventListener("click", () => document.querySelector(".fundo_vidro").classList.toggle("efeito_vidro"));





let sectionTeste = document.querySelector("section.mais__visitados");
        sectionTeste.querySelectorAll(".container .item").forEach(item => {
            let label = item.querySelector("label");
            let input = item.querySelector("input");

            label.addEventListener("mouseover", () => {
                input.checked = true;
            })
        })