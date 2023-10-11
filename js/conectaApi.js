async function listaProjetos(){
    const conexao = await fetch("https://api-portifolio-one.vercel.app/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaProjetos
}