//declaracao.criacao da funcao 
function tocaSomPom(idElementoAudio){
    document.querySelector("som_tecla_pom").play();
}
//criando areferências constante listaDeTeclas e buscando a classe coletiva.tecla
const listaDeTeclas=document.querySelectorAll("tecla");
//criaçao da repetição "while" troca pelo "for" com variavel,condição e incremento
for(let contador=0;contador<listaDeTeclas.length;contador=contador+1){
    const tecla=listaDeTeclas [contador];  //guarda o contador da lista
    const efeito=teclas.classlist[1];      //chama o 2 item classe individual ao som
    const idAudio=#som_s{efeito};          //utiliza a junção template string s{}
    teclas.onclick=function(){             //função anônima auxiliar oara chamar tocaSom
        tocaSom(idAudio)                   //chamada da função tocaSom com parâmetro idAudio
    }
    teclas.onkeydown=function(evento){
        if(evento.code!='tab'){
            teclas.classlist.add(ativa);
        }
    }
    teclas.onkeyup=function(){
        teclas.classlist.remove('ativa');
    }
}