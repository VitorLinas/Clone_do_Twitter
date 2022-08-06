const cabecalho = document.querySelector('header');
const tweetar = document.querySelector('button');
const textarea = document.querySelector('textarea');
const feed = document.querySelector('.conteudoPrincipal_listaTweets')

function pegarTweet(event) {
    event.preventDefault(); //previne que o evento padrão do formulario (tentar enviar para algum lugar) ocorra.
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea);
}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto){
    console.log(tweetTexto);

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    const tweet = {
        nome: "Twitter",
        foto: "imagens/perfilTwitter.png",
        usuario: "@twitter",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`,
        // interacao: "oi"
    } 

    listarTweet(tweet);
}

function listarTweet(tweet){

    const {nome, foto, usuario, texto, tempo, } = tweet;

    let li   = document.createElement("li");
    li.classList.add("conteudoPrincipal_tweet");

    let img  = document.createElement("img");
    img.src = foto;
    img.classList.add("tweet_fotoPerfil");

    let div  = document.createElement("div");
    div.classList.add("tweet_conteudo");

    let h2   = document.createElement("h2");
    h2.innerText = nome;

    let span = document.createElement("span");
    span.innerText = `${usuario} . ${tempo}`

    let p    = document.createElement("p");
    p.innerText = texto;

    // let interacao = document.createElement("div");
    // div.classList.add("botoesDeinteraçao");

    



    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
    textarea.value = "";

    div.appendChild(interacao);
}