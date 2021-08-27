// -------- Google Analytics -------- 

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

// -------- Page handler -------- 

// toda vez que um novo conteudo é carregado
// essa função é disparada
// minha intenção é evitar carregamentos desnecessarios

window.addEventListener('DOMContentLoaded', (event) => {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    switch (page) {
        case '':
        case 'index.html':
            ga('send', 'pageview', 'index');
            break;
        case 'analise.html':
            ga('send', 'pageview', 'analise');
            analise_help();
            break;
        case 'sobre.html':
            ga('send', 'pageview', 'sobre');
            sobre_help();
            break;
        default:
            break;

    }
});


// -------- HELPER Functions -------- 

let analise_help = (function () {

    // Selectors da page

    let loren = document.querySelector("body > main > section > div.cards-montadoras > div:nth-child(1)")
    let ipsun = document.querySelector("body > main > section > div.cards-montadoras > div:nth-child(2)")
    let dolor = document.querySelector("body > main > section > div.cards-montadoras > div:nth-child(3)")

    // Eventos da page
    loren.addEventListener('click', () => {
        ga('send', 'event', 'analise', 'ver_mais', 'loren');
    })

    ipsun.addEventListener('click', () => {
        ga('send', 'event', 'analise', 'ver_mais', 'ipsun');
    })

    dolor.addEventListener('click', () => {
        ga('send', 'event', 'analise', 'ver_mais', 'dolor');
    })

})

let sobre_help = (function () {

    // Selectors do Formulario
    let nome = document.querySelector("#nome")
    let email = document.querySelector("#email")
    let telefone = document.querySelector("#telefone")
    let aceito = document.querySelector("#aceito")

    // Selector do botão > popup
    let enviado = document.querySelector("body > main > section > form > ul > li:nth-child(5) > button")

    // Eventos do Formulario
    nome.addEventListener('change', () => {
        delay(function () {
            ga('send', 'event', 'contato', 'nome', 'preencheu');
        }, 2000);
    })

    email.addEventListener('change', () => {
        delay(function () {
            ga('send', 'event', 'contato', 'email', 'preencheu');
        }, 2000);
    })

    telefone.addEventListener('change', () => {
        delay(function () {
            ga('send', 'event', 'contato', 'telefone', 'preencheu');
        }, 2000);
    })

    aceito.addEventListener('change', () => {
        delay(function () {
            ga('send', 'event', 'contato', 'aceito', 'preencheu');
        }, 1000);
    })

    // Eu preferi por adicionar um evento no botao
    // ao inves de adicionar um evento com MutationObserver
    // selecionando o "Body" com a classe de "lightbox-open"
    // pois o popup abre apenas se o formulario for validado
    enviado.addEventListener('click', () => {
        ga('send', 'event', 'contato', 'enviado', 'enviado');
    })
})

// Função de Timeout

// Essa função da um tempo de delay para quando
// o usuario parar de digitar antes de atirar o evento

let delay = (function () {
    let timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();


// -------- MENU -------- 

// Setup dos query selectors do Menu
let contato = document.querySelector("body > nav > ul > li:nth-child(4) > a")
let download = document.querySelector("body > nav > ul > li:nth-child(5) > a")

// Eventos do Menu
contato.addEventListener('click', () => {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
})

download.addEventListener('click', () => {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
})

