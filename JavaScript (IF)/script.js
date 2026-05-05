let nao1 = 10;
if (nao1 == 10) {
    alert("valor igual a 10.");
}

let nome = "Antonio Silva Neto";
if (nome == "Antonio Silva Neto") {
alert("Nome correto");
}

function verificarok() {
    let text = document.getElementById("f1").value;
    if (text == "ok") {
        alert("Você digitou ok");
    }
}

function verificar5 () {
    let Nmr = document.getElementById("f2").value;
    if (Nmr == 5) {
        alert("Você digitou 5");
    }
}

function CorretoAdmin () {
    let valor1 = document.getElementById("f3").value;
    if (valor1 == "admin") {
        document.getElementById("CorretoP").textContent = "Correto";
    }
}

function AlterarTextoP () {
    let valor2 = document.getElementById("f4").value;
    if (valor2 == "teste") {
        document.getElementById("TextoP").textContent = "O text foi alterado";
    }
}

function AlterarCorDiv () {
    let valor3 = document.getElementById("f5").value;
    if (valor3 == "azul") {
        document.getElementById("div1").style.backgroundColor = "#1900ff";
    }
}

function MaiorQue10 () {
    let valor4 = document.getElementById("m1").value;
    if (valor4 >= "10") {
        alert("número digitado é maior que 10.")
    }
}

function MenorQue50 (){
    let valor5 = document.getElementById("m2").value;
    if (valor5 <= "50") {
        alert("O número digitado é menor que 50.")
    }
}

function AlterarTexto () {
    let valor6 = document.getElementById("m3").value;
    if (valor6 == "senha") {
        document.getElementById("campoM3").textContent = "O texto foi alterado."
    }
}

function AlterarFundo() {
    let valor7 = document.getElementById("m4").value;
    if (valor7 == "escuro") {
        document.body.style.backgroundColor = "#000000";
    }
}

function AltereOTextoECor () {
    let valor8 = document.getElementById("m5").value;
    if (valor8 == "sonic") {
        document.getElementById("campoM5").style.color = "red"
        document.getElementById("campoM5").textContent = "O texto foi alterado"
    }
}

function AlterarDoisElementos (){
    let valor9 = document.getElementById("m6").value;
    if (valor9 == "ok") {
        document.getElementById("campoM6").textContent = "Primeiro elemento alterado."
        document.getElementById("campoM6").style.color = "red"
        document.getElementById("campoM6m").textContent = "Segundo elemento alterado"
        document.getElementById("campoM6m").style.color = "red"
    }
}

function AlterarTamanho () {
    let valor10 = document.getElementById("m7").value;
    if (valor10 >= 20){
        document.getElementById("p1").style.fontSize = "30px"
    }
}

function SistemaSimples () {
    let valor11 = document.getElementById("Usuario1").value;
    if (valor11 == "admin"){
        alert("Bem-vindo")
    }
}

function AlterarTudo () {
    let valor12 = document.getElementById("d2").value;
    if (valor12 == "valorant") {
        document.getElementById("p2").style.color = "red"
        document.getElementById("p2").style.fontSize = "30px"
        document.getElementById("p2").textContent = "VALORANT"
    }
}

function alterarD3 () {
    let valor14 = document.getElementById("d3").value;
    if (valor14 == "CSGOPRIME") {
        document.getElementById("divd3").style.fontSize = "30px"
        document.getElementById("divd3").style.background = "yellow"
        document.getElementById("divd3").textContent = "CS GO FOI O PRIME DOS FPS!!!"
    }
}

function DificilFundoPagina () {
    let valor15 = document.getElementById("d4").value;
    if (valor15 >= 100){
        document.body.style.background = "red"
    }
}

function copiarecolar () {
    let valor16 = document.getElementById("d5").value;
    if (valor16 === "copiar") {
        document.getElementById("paragrafo5").innerText = valor16
    }
}

function mudarduasdivs () {
    let valor17 = document.getElementById("d6").value;
    if (valor17 == "calor") {
        document.getElementById("divd6a").style.backgroundColor = "#fc8bf0";
        document.getElementById("divd6b").style.backgroundColor = "#4751d6";
        document.getElementById("divd6a").textContent = "alteradao";
        document.getElementById("divd6b").textContent = "alteradinho";
    }
}

function ultimatarefa (){
    let valor18 = document.getElementById("d7").value;
    if (valor18 === "ok"){
        document.getElementById("t7").style.color = "green";
        document.getElementById("p7").textContent = "certinn";
        document.getElementById("d7").style.fontSize = "45px";
        document.body.style.background = "red"
    }
}