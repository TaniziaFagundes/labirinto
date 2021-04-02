const map = [
    "WWWWWWWWWWWWWWWWWWWWW", //21
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const altura = 30;
const largura = 30;
let topdiv = 0;
let left = 0;
let cont = 0
let posicao_Linha = 9;
let posicao_Coluna = 0;
let aux_coluna = 0;
let aux_linha = 0;


var element_pai = document.getElementById("labirinto");

function criarYoda(){
    var inicio = document.getElementById("inicio");
    var newdiv = document.createElement("div");
    newdiv.id = "yoda"
    newdiv.style.backgroundImage = "url('assets/img/images.jpeg')";
    newdiv.style.backgroundRepeat = "no-repeat"
    newdiv.style.backgroundSize= "200%";
    newdiv.style.width = largura + "px";;
    newdiv.style.height = altura + "px";
    newdiv.style.backgroundPosition = "center";
    newdiv.style.marginTop = topdiv + "px";
    newdiv.style.marginLeft = left +"px";
    newdiv.position = "relative"
    inicio.appendChild(newdiv);
}

function criarLab(){
    for (i=0;i<map.length;i++){
        let aux = map[i]
        for (c = 0 ; c <aux.length ; c++){
            if( aux[c] == "S"){
                //CRIAR DIV START
                var newdiv = document.createElement("div");
                newdiv.id = "inicio"
                newdiv.style.backgroundColor = "white"
                newdiv.style.width = largura + "px";;
                newdiv.style.height = altura + "px";

                element_pai.appendChild(newdiv)
                cont++
            }else if( aux[c] == "W"){
                //CRIAR DIV AZUL
                var newdiv = document.createElement("div");
                newdiv.style.backgroundColor = "blue"
                newdiv.style.width = largura + "px";;
                newdiv.style.height = altura + "px";;
                element_pai.appendChild(newdiv)
                cont++
            }else if( aux[c] == " "){
                //CRIAR DIV BRANCA
                var newdiv = document.createElement("div");
                newdiv.style.backgroundColor = "white"
                newdiv.style.width = largura + "px";
                newdiv.style.height = altura + "px";
                element_pai.appendChild(newdiv)
                cont++
            }else if (aux[c] == "F"){
                //CRIAR DIV END
                var newdiv = document.createElement("div");
                newdiv.id = "sapo";
                newdiv.style.backgroundImage = "url('assets/img/sapo.jpeg')";
                newdiv.style.backgroundRepeat = "no-repeat"
                newdiv.style.backgroundSize= "200%";
                newdiv.style.backgroundPosition = "center";
                newdiv.style.width = largura + "px";
                newdiv.style.height = altura + "px";
                element_pai.appendChild(newdiv)
                cont++
            }
        }        
    }
    return 0
}

criarLab()
criarYoda()


function movimentoPermitido(linha,coluna){
    let permisao;
       if( map[linha][coluna] !="W" && map[linha][coluna] !=null){
           permisao =  true;
       }else{
           permisao =  false;  
       }
     return permisao;
}

function FimJogo(){
    if(map[posicao_Linha][posicao_Coluna] == "F"){
        let element_pai = document.getElementById("labirinto");
        let fimjogo = document.createElement("div");
        let conteudo  = document.createTextNode("Parabéns, Yoda Agradece Pelo Lanche !!!");
        let button = document.createElement("button");
        button.onclick = function(){window.location.reload()}
        button.innerHTML="Jogar Novamente"
        fimjogo.className = "fimjogo"
        fimjogo.appendChild(conteudo);
        fimjogo.appendChild(button);
        element_pai.appendChild(fimjogo)

    }
}





document.addEventListener("keydown", (event)=>{
    let keyName = event.key;
    let yoda = document.getElementById("yoda");

        if(keyName == "ArrowLeft"){

            posicao_Coluna -= 1;
            if(movimentoPermitido(posicao_Linha,posicao_Coluna) == true){
                yoda.style.marginLeft = (left-=30) + "px";
            }else{
                posicao_Coluna += 1;
            }
              
        }else if(keyName == "ArrowRight"){

            posicao_Coluna += 1;
            if(movimentoPermitido(posicao_Linha,posicao_Coluna) == true){
                yoda.style.position = "relative";
                yoda.style.marginLeft = (left+=30) + "px";
            }else{
                posicao_Coluna -= 1;
            }
              
        }
        if(keyName == "ArrowDown"){

            posicao_Linha += 1;
            if(movimentoPermitido(posicao_Linha,posicao_Coluna) == true){
                yoda.style.marginTop = (topdiv+=30) + "px";
            }else{
                posicao_Linha -= 1;
            }
        
            
        }else if(keyName == "ArrowUp"){
            
            posicao_Linha -= 1;
            if(movimentoPermitido(posicao_Linha,posicao_Coluna) == true){
                yoda.style.marginTop = (topdiv-=30) + "px";
            }else{
                posicao_Linha += 1;
            }
        }   
        FimJogo()
    
})


