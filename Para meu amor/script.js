let botaoSim = document.getElementById('sim');
    let botaoNao = document.getElementById('nao');

    function crescerSim() {
        // Estilos atuais
        let estiloSim = window.getComputedStyle(botaoSim);
        let estiloNao = window.getComputedStyle(botaoNao);

        // Tamanhos dos botões
        let larguraSim = parseInt(estiloSim.width);
        let alturaSim = parseInt(estiloSim.height);
        let fontSizeSim = parseInt(estiloSim.fontSize);

        let larguraNao = parseInt(estiloNao.width);
        let alturaNao = parseInt(estiloNao.height);
        let fontSizeNao = parseInt(estiloNao.fontSize);

        botaoSim.style.width = (larguraSim + 20) + 'px';
        botaoSim.style.height = (alturaSim + 20) + 'px';
        botaoSim.style.fontSize = (fontSizeSim + 2) + 'px';

        // Diminui botão NÃO, com limites mínimos
        if (larguraNao > 50 && alturaNao > 30 && fontSizeNao > 10) {
            botaoNao.style.width = (larguraNao - 10) + 'px';
            botaoNao.style.height = (alturaNao - 10) + 'px';
            botaoNao.style.fontSize = (fontSizeNao - 1) + 'px';
        }
    }
