document.addEventListener("DOMContentLoaded", () => {
    const imagens_section = document.querySelector("section.imagens");
    let all_contents_img = imagens_section.querySelectorAll(".carrossel .content_item");
    let changeImgButtons = imagens_section.querySelectorAll(".img_dots span");

    changeImgButtons.forEach(button => {
        button.addEventListener("click", () => {
            let to_translate_value = parseInt(imagens_section.dataset.to_translate);

            // nao pode voltar a imagem se estiver na primeira
            // nao pode passar a imagem se estiver na ultima
            if (button.classList.contains("deactivated")) return false;

            if (button.classList.contains("next")) {
                var newTranslateXValue = parseInt(imagens_section.dataset.translated_value)-to_translate_value;
            } else {
                var newTranslateXValue = parseInt(imagens_section.dataset.translated_value)+to_translate_value;
            };

            imagens_section.dataset.translated_value = newTranslateXValue;

            if (newTranslateXValue < 0) {
                imagens_section.querySelector(".img_dots span.prev").classList.remove("deactivated");
            } else {
                imagens_section.querySelector(".img_dots span.prev").classList.add("deactivated");
            }

            if (newTranslateXValue < (all_contents_img.length-2)*-to_translate_value) {
                imagens_section.querySelector(".img_dots span.next").classList.add("deactivated");
            } else {
                imagens_section.querySelector(".img_dots span.next").classList.remove("deactivated");
            }

            all_contents_img.forEach(content => {
                content.style.transform = `translateX(${newTranslateXValue}vw)`;
            });
        });
    });
});