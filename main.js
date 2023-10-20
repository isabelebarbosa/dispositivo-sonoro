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