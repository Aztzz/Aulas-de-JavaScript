let produtos = [];
let precos = [];
let quantidadeProdutos = 0;

const inputProduto = document.getElementById("produto");
const inputPreco = document.getElementById("preco");
const mensagem = document.getElementById("mensagem");
const listadeProdutos = document.getElementById("ListaCadastrados");
const quantidadeEl = document.getElementById("quantidade");
const valorTotalEl = document.getElementById("valortotal");

function cadastrarProduto(){
    let nomeProduto = inputProduto.value.trim();
    let precoProduto = Number(inputPreco.value);

    if(nomeProduto === "" || inputPreco.value === ""){
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red"
        return;
    }
    if(precoProduto <=0){
        mensagem.textContent = "O preço deve ser maior que zero!";
        mensagem.style.color = "red"
        return
    }

    produtos.push(nomeProduto);
    precos.push(precoProduto);
    mensagem.textContent = "Produto cadastrado com sucesso!"
    mensagem.style.color = "green"

    inputProduto.value = "";
    inputPreco.value = "";



    atualizarLista();
}

function atualizarLista(){
    
    ListaCadastrados.textContent = "";
    for(let i = 0; i < produtos.length; i++){
        let ItemLista = document.createElement("li");
        ItemLista.textContent = `${produtos[i]} R$ ${precos[i].toFixed(2)}`;
        listadeProdutos.appendChild(ItemLista);
    }

    quantidadeProdutos = produtos.length;
    quantidadeEl.textContent = quantidadeProdutos;

    calcularValorTotal();
}

function removerUltimoProduto(){
    if(produtos.length === 0){
        mensagem.textContent = "Nenhum produto para remover!"
        mensagem.style.color = "red"
        return
    }
    produtos.pop();
    precos.pop();
    mensagem.textContent = "Ultimo produto removido com sucesso"

    atualizarLista()
}

function calcularValorTotal() {
    let total = 0;
    for (let i = 0; i < precos.length; i++) {
        total += precos[i];
    }
    valorTotalEl.textContent = `Valor total dos produtos: R$ ${total.toFixed(2)}`;
}

function caro(){
    let maiscaro = 0;

    for(let i = 0; i < precos.length; i++){

        if(maiscaro < precos[i]){
            maiscaro = precos[i];
        }
    }
    alert(maiscaro)
}
