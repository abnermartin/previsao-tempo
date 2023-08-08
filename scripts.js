const key = "aebc4460908953409b08a4f51934dfd6"

function colocarDadosNaTela (dados) {
    console.log (dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " +dados.name
    document.querySelector (".temp").innerHTML = Math.floor(dados.main.temp) + "°C" /*Math.floor serve para arrepondar um número */
    document.querySelector (".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector (".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector (".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) /* toda vez que formos acessar um servidor, temos que usar funções ASSINCRONAS, assim colocamos o "async" na frente da função */ { 

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>resposta.json()) /*await serve para que o código espere o servidor ser executado para continuar sendo lido */
    /*as crases permitem que colocamos nosso texto e também uma variável */

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade (cidade)
}