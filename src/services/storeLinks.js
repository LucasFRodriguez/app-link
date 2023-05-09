
// Buscar item SALVO
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];
    
    return linksSaves;
}

// Salvar um link no local storage.

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);



    const hasLink = linksStored.some( link => link.id === newLink.id )

    if(hasLink){
        console.log('ESSE LINK JA EXISTE NA SUA LISTA')
     return;
    }


    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('LINK SALVO COM SUCESSO!');

}




// Deletar algum link ja salvo.


