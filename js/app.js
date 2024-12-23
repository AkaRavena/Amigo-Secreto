let listaAmigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo");
    let parenteListaAmigos = document.getElementById("lista-amigos");
    let virgula = listaAmigos.length < 1 ? "" : ",";

    if(nomeAmigo.value != "" && !listaAmigos.includes(nomeAmigo.value)){
        listaAmigos.push(nomeAmigo.value);
        let novoNomeLista = `<a id="${nomeAmigo.value}" title="Remover ${nomeAmigo.value} da lista" style="text-decoration: none; color: inherit; cursor: pointer" onclick="apagar('${nomeAmigo.value}')">${virgula} ${nomeAmigo.value}</a>`;
        parenteListaAmigos.innerHTML = parenteListaAmigos.innerHTML + novoNomeLista;
        nomeAmigo.value = "";
        atualizarBotao();
    } else {
        nomeAmigo.value = "";
    }
}

function gerarNumeroAleatorio(){
    let numeroAleatorio = parseInt(Math.random() * listaAmigos.length);
    return numeroAleatorio;
}

function sortear(){
    let parenteListaSorteio = document.getElementById("lista-sorteio");
    let listaNumerosAleatorios = [];

    document.getElementById("nome-amigo").disabled = true;

    if (parenteListaSorteio.innerHTML == ""){
        while (listaNumerosAleatorios.length < listaAmigos.length){
            let numeroAleatorio = gerarNumeroAleatorio();

            if (!listaNumerosAleatorios.includes(numeroAleatorio)){
                listaNumerosAleatorios.push(numeroAleatorio);
            }
        }

        for (let i = 0; i < listaNumerosAleatorios.length; i++){
            let novaLinha;

            if(i < listaNumerosAleatorios.length - 1){
                novaLinha = listaAmigos[listaNumerosAleatorios[i]]+ " " + "--->" + " " + listaAmigos[listaNumerosAleatorios[i + 1]] + "<br>";
                parenteListaSorteio.innerHTML = parenteListaSorteio.innerHTML + novaLinha;
            } else {
                novaLinha = listaAmigos[listaNumerosAleatorios[i]] + " " + "--->" + " " + listaAmigos[listaNumerosAleatorios[0]] + "<br>";
                parenteListaSorteio.innerHTML = parenteListaSorteio.innerHTML + novaLinha;
            }
        }
    }    
}

function reiniciar(){
    listaAmigos = [];
    document.getElementById("nome-amigo").disabled = false;
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    atualizarBotao();
}

function apagar(nome){
    document.getElementById(nome).remove();
    listaAmigos.splice(listaAmigos.indexOf(nome),1);
    atualizarBotao();
}

function atualizarBotao(){
    if (listaAmigos.length >= 2){
        document.getElementsByClassName("form__buttons")[0].children[1].classList.remove("secondary");
        document.getElementsByClassName("form__buttons")[0].children[1].classList.add("primary");
        document.getElementsByClassName("form__buttons")[0].children[1].disabled = false;
    } else {
        document.getElementsByClassName("form__buttons")[0].children[1].classList.remove("primary");
        document.getElementsByClassName("form__buttons")[0].children[1].classList.add("secondary");
        document.getElementsByClassName("form__buttons")[0].children[1].disabled = true;
    }
}