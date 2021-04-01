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
cont = 1;
var element_pai = document.getElementById("labirinto");
function criarLab(){
    for (i=0;i<map.length;i++){
        let aux = map[i]
        console.log(aux)
        for (c = 0 ; c <aux.length ; c++){
            if( aux[c] == "S"){
                //CRIAR DIV START
                var newdiv = document.createElement("div");
                var conteudo = document.createTextNode(cont)
                newdiv.style.backgroundColor = "green"
                newdiv.style.width = largura + "px";;
                newdiv.style.height = altura + "px";;
                newdiv.style.marginTop = topdiv + "px";
                newdiv.style.marginLeft = left +"px";
                //newdiv.appendChild(conteudo);
                element_pai.appendChild(newdiv)
                cont++
            }else if( aux[c] == "W"){
                //CRIAR DIV AZUL
                var newdiv = document.createElement("div");
                var conteudo = document.createTextNode(cont)
                newdiv.style.backgroundColor = "blue"
                newdiv.style.width = largura + "px";;
                newdiv.style.height = altura + "px";;
                newdiv.style.marginTop = topdiv + "px";
                newdiv.style.marginLeft = left +"px";
                //newdiv.appendChild(conteudo);
                element_pai.appendChild(newdiv)
                cont++
            }else if( aux[c] == " "){
                //CRIAR DIV BRANCA
                var newdiv = document.createElement("div");
                var conteudo = document.createTextNode(cont)
                newdiv.style.backgroundColor = "white"
                newdiv.style.width = largura + "px";;
                newdiv.style.height = altura + "px";;
                newdiv.style.marginTop = topdiv + "px";
                newdiv.style.marginLeft = left +"px";
                //newdiv.appendChild(conteudo);
                element_pai.appendChild(newdiv)
                cont++
            }else if (aux[c] == "F"){
                //CRIAR DIV END
                var newdiv = document.createElement("div");
                var conteudo = document.createTextNode(cont)
                newdiv.style.backgroundColor = "red"
                newdiv.style.width = largura + "px";;
                newdiv.style.height = altura + "px";;
                newdiv.style.marginTop = topdiv + "px";
                newdiv.style.marginLeft = left +"px";
                //newdiv.appendChild(conteudo);
                element_pai.appendChild(newdiv)
                cont++
            }
        }        
    }
    return 0
}

criarLab()
