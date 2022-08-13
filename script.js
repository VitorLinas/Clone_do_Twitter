const cabecalho = document.querySelector('header');
const tweetar = document.querySelector('button');
const textarea = document.querySelector('textarea');
const feed = document.querySelector('.conteudoPrincipal_listaTweets');


function pegarTweet(event) {
    const tweetTextarea = textarea.value;
   if(tweetTextarea == ''){
    console.log('Sem conteudo');
   } else{
    event.preventDefault();
    criarTweet(tweetTextarea);
   }
}

document.onkeydown = teclaEnter;
    function teclaEnter(e){
        if(e.keyCode == 13){
            pegarTweet(event);
        }
    }
   

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto){

    console.log(tweetTexto);

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    // let interation = document.getElementsByClassName("botoesDeinteracao")

    const tweet = {
        nome: "Twitter",
        foto: "imagens/perfilTwitter.png",
        usuario: "@Twitter",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`,

        comentario:"imagens/comentar.SVG",
        retweet:"imagens/retweetar.SVG" ,
        like:"imagens/like.SVG",
        compartilhar:"imagens/compartilhar.SVG"
    } 

    console.log(tweet.interacao);
    listarTweet(tweet);
}

function listarTweet(tweet){

    const {nome, foto, usuario, texto, tempo, comentario, retweet, like, compartilhar} = tweet;

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

    let p = document.createElement("p");
    p.innerText = texto;

    let section = document.createElement("section");
    section.classList.add("botoesDeinteracao");

    let coment = document.createElement("img");
    coment.src = comentario;
    coment.classList.add("bdi");

    let retwe = document.createElement("img");
    retwe.src = retweet;
    retwe.classList.add("bdi");

    let lik = document.createElement("img");
    lik.src = like;
    lik.classList.add("bdi");

    let comp = document.createElement("img");
    comp.src = compartilhar;
    comp.classList.add("bdi");

  
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
    textarea.value = "";

    li.appendChild(section);
    div.appendChild(section)
    section.appendChild(coment);
    section.appendChild(retwe);
    section.appendChild(lik);
    section.appendChild(comp);
    console.log(li);
}  
    



function circleWhite(){ 
    
    console.log("CIRCLEWHITE");

    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';

    let palavras = document.querySelectorAll("a, .buscaTwitter input, .conteudoPrincipal_formulario textarea");
    for (let index = 0; index < palavras.length; index++) {
      palavras[index].style.color = "black"; 
    }

    let tweetP = document.querySelectorAll(".tweet_conteudo p");
    for (let index = 0; index < tweetP.length; index++) {
      tweetP[index].style.color = "#333333"; 
    }

    let palavrasPequenas = document.querySelectorAll(".containerDeAssuntos p, .termosTwitter");
    for (let index = 0; index < palavrasPequenas.length; index++) {
        palavrasPequenas[index].style.color = "rgb(87, 86, 86)"; 
    }

    let palavrasPequenash3 = document.querySelectorAll(".containerDeAssuntos h3");
        for (let index = 0; index < palavrasPequenash3.length; index++) {
            palavrasPequenash3[index].style.color = "black"; 
    }

    let fundoBusca =  document.querySelectorAll(".buscaTwitter");
        for (let index = 0; index < fundoBusca.length; index++) {
        fundoBusca[index].style.backgroundColor = "rgb(228, 236, 236)"; 
    }

    let fundoassuntos =  document.querySelectorAll(".containerDeAssuntos");
    for (let index = 0; index < fundoassuntos.length; index++) {
    fundoassuntos[index].style.backgroundColor = "rgb(242, 246, 246)"; 
    }
}



function circleBlue(){
    console.log("CIRCLEBLUE");
    document.body.style.backgroundColor = 'rgb(21, 32, 43)';
    document.body.style.color = 'white';

    let palavras = document.querySelectorAll("a,html p, .tweet_conteudo p, .buscaTwitter input, .conteudoPrincipal_formulario textarea");
    for (let index = 0; index < palavras.length; index++) {
      palavras[index].style.color = "white"; 
    }

    let palavrasPequenas = document.querySelectorAll(".containerDeAssuntos p, .containerDeAssuntos h3, .termosTwitter");
    for (let index = 0; index < palavrasPequenas.length; index++) {
        palavrasPequenas[index].style.color = "rgb(112,124,137)"; 
    }


    let fundo =  document.querySelectorAll(".buscaTwitter, .containerDeAssuntos");
        for (let index = 0; index < fundo.length; index++) {
        fundo[index].style.backgroundColor = "rgb(30,39,50)"; 
    }
}  




function circleBlack(){
    console.log("CIRCLEBLACK");
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';

    let palavras = document.querySelectorAll("a, section p, .tweet_conteudo p, .buscaTwitter input, .conteudoPrincipal_formulario textarea");
        for (let index = 0; index < palavras.length; index++) {
          palavras[index].style.color = "white"; 
    }

    let palavrasPequenas = document.querySelectorAll(".containerDeAssuntos p, .containerDeAssuntos h3, .termosTwitter ");
    for (let index = 0; index < palavrasPequenas.length; index++) {
        palavrasPequenas[index].style.color = "rgb(84,88,96)"; 
    }

    let fundo =  document.querySelectorAll(".buscaTwitter, .containerDeAssuntos");
        for (let index = 0; index < fundo.length; index++) {
        fundo[index].style.backgroundColor = "rgb(22,24,28)"; 
    }
}

