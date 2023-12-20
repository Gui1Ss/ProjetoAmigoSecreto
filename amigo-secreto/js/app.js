let nomesAdicionados = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo'); 

    if(nome.value == ''){
        alert('O campo está vazio. informe o nome do amigo');
        return; // return serve para parara a função
        }

     if(nomesAdicionados.includes(nome.value) ){
       alert('Digite um nome diferente, pois ja tem esse nome!');
       nome.value = '';
        return;
       
     }    

    let lista = document.getElementById('lista-amigos');
    nomesAdicionados.push(nome.value);

    if(lista.textContent == ''){
        lista.textContent = nome.value;
    } else{
        lista.textContent = lista.textContent + ',' + nome.value;
    }
    nome.value = ''
}

function sortear() {
    if(nomesAdicionados.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(nomesAdicionados);
    let sorteio = document.getElementById('lista-sorteio')

    for(let i = 0; i < nomesAdicionados.length; i++){
        if(i == nomesAdicionados.length -1){
            sorteio.innerHTML = sorteio.innerHTML +  nomesAdicionados[i] + '-->' + nomesAdicionados[0] + '<br>';  
        }else{
            sorteio.innerHTML = sorteio.innerHTML +  nomesAdicionados[i] + '-->' + nomesAdicionados[i + 1] + '<br>';   
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    nomesAdicionados = []; 
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}



  