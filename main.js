//declaracao.criacao da funcao tocaSomPom
function tocaSomPom(){
    document.querySelector("som_tecla_pom").play();
}
//chamada ou invocacao da funcao tocaSomPom ao clicar no botao
    document.querySelector("tecla_pom").onclick=tocaSomPom;

//declaracao.criacao da funcao tocaSomPom
function tocaSomPom(){
    document.querySelector("#som_tecla_clap").play();
}
//chamada ou invocacao da funcao tocaSomPom ao clicar no botao
document.querySelector("tecla_pom").onclick = tocaSomPom;

//criando areferências constante listaDeTeclas e buscando a tecla
const listaDeTeclas=document.querySelectorAll("tecla");
//chamando a constante lista De teclas e o indice "0" do SomPom
