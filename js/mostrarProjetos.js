import {conectaApi} from "./conectaApi.js";

const lista = document.querySelector("[data-lista]")

function cronstroiCard(id, imagem, linkgit, titulo, descricao, url){
    const projeto = document.createElement("li");
    projeto.className = "projeto"
    projeto.innerHTML = `
    <h3 class="projeto__titulo">${titulo}</h3>
      <div class="projeto__conteudo">
        <img class="projeto__imagem" src="${imagem}" alt="">
        <a class=" icon-arrow projeto__link" href="${url}" target="_blank"></a>
      </div>
      <p class="projeto__descrição">${descricao}</p>
      <a href="${linkgit}" class="projeto__botao"> <span class="icon-github2"></span>Repositorio Github</a>
    `
    return projeto;
}

async function listaProjetos(){
    const listaApi = await conectaApi.listaProjetos();
    listaApi.forEach(element => lista.appendChild(cronstroiCard(element.id, element.imagem, element.linkgit, element.titulo, element.descricao, element.url)));
    // for (var passo = 0; passo < 6; passo++){
    //   const element = listaApi[passo]
    //   lista.appendChild(cronstroiCard(element.id, element.imagem, element.linkgit, element.titulo, element.descricao, element.url))
    // }
}

listaProjetos();