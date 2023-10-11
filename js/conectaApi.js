async function listaProjetos(){
    const conexao = await fetch("https://imgport.netlify.app/info/db.json");
    const conexaoConvertida = await conexao.json();
    console.log(conexao)
    return conexaoConvertida;
}

export const conectaApi = {
    listaProjetos
}