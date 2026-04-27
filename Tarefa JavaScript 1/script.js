function ola() {
    alert("Olá mundo");
}

function mostrarNome() {
    let nome = "Antônio";
    alert(nome);
}

function somar() {
    let Antonio = 17;
    let Rayssa = 17;
    alert(Antonio + Rayssa);
}

function amor() {
    let texto = document.getElementById("amor");
    texto.textContent = "HAHAHAHSHDHSAHDHAShfdlggfmbfdpbmfdgfpdklbmfeuamomuitoelandsfgkdnbfodngfdbfd";
}

function mudarcor() {
    document.getElementById("caixa").style.background = "blue";
}

function texto1() {
    document.getElementById("texto1").textContent = "EU SER O SONIC MUAAAAAAAAAAAAAAHAHAHHAHAHAHHA";
}

function texto2() {
    document.getElementById("texto2").textContent = "";
}

function sumiu(){
    document.getElementById("texto3").textContent = "";
}

function mostrarinput() {
    let ip1 = document.getElementById("ip1");
    let input1 = document.getElementById("input1");
    let escrito = ip1.textContent;
    input1.value = escrito;
}

function somarinputs() {
    let i1 = Number(document.getElementById("i1").value);
    let i2 = Number(document.getElementById("i2").value);
    let local = document.getElementById("resultado").textContent = i1 + i2;
}

function alterarpagina() {
    document.body.style.background = "red";
}

function alterartamanho() {
    document.getElementById("texto4").style.fontSize = "300px";
}

function textoalterar() {
    document.getElementById("texto05").style.color = "Blue";
}

function mudarelemento() {
    document.getElementById("e1").textContent = "tengolengo"
    document.getElementById("e2").textContent = "bahia"
}

function mudartres () {
    document.getElementById("m1").textContent = "Uber-landia"
    document.getElementById("m2").textContent = "Não paulo"
    document.getElementById("m3").textContent = "Gelo horizonte"
}

function alterarTudo() {
    document.getElementById("di1").textContent = "O texto foi devidamente alterado";
    document.getElementById("di1").style.color = "red";
    document.getElementById("di1").style.fontSize = "50px";
}

function pegarovalor() {
    let di2 = document.getElementById("di2");
    document.getElementById("mostrar1").textContent = di2.value;
    document.getElementById("mostrar2").textContent = di2.value;
}

function alteraarcor() {
    document.getElementById("di3").style.color = "red";
}

function altaraartamanho () {
    document.getElementById("di3").style.fontSize = "50px";
}

function mudaartexto() {
    document.getElementById("di3").textContent = "O texto com certeza  absoluta foi alterado";
}

function alterarduasaomesmotempo() {
    document.getElementById("i4").style.padding = "50px";
    document.getElementById("i4").style.background = "blue";
    document.getElementById("i4").style.margin = "50px";
    document.getElementById("ii4").style.padding = "50px";
    document.getElementById("ii4").style.background = "red";
    document.getElementById("ii4").style.margin = "50px";
}

function copiaroinput() {
    let di5 = document.getElementById("di5");
    document.getElementById("di5-result").textContent = di5.value;
    document.getElementById("di5-result").style.color = "red";
}

function resultadoevalores() {
    let somaa = Number(document.getElementById("somaa").value);
    let somab = Number(document.getElementById("somab").value);
    document.getElementById("moostraresultado").textContent = somaa + somab;
}

function somaeresultado() {
    document.getElementById("moostraresultado").textContent = "";
}

function acabarcomtudo(){
    document.body.style.background = "black";
    document.body.style.color = "red";
    document.body.style.fontSize = "350px";

}