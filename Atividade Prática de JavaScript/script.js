function VerificarIdade() {
    const idadeInput = document.getElementById("verificarIdade").value;
    const idade = Number(idadeInput);
    const res = document.getElementById("resultadoIdade");

    if (idadeInput === "" || idade < 0) {
        res.textContent = "Digite uma idade válida";
        return;
    }

    if (idade < 12) {
        res.textContent = "Criança";
    } else if (idade <= 17) {
        res.textContent = "Adolescente";
    } else if (idade <= 59) {
        res.textContent = "Adulto";
    } else {
        res.textContent = "Idoso";
    }
}

function verificarlogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const rest1 = document.getElementById("resultadoLogin");

    if (usuario === "" || senha === "") {
        rest1.textContent = "Preencha todos os campos";
        return;
    }

    if (usuario === "admin" && senha === "1234") {
        rest1.textContent = "Login realizado com sucesso";
    } else if (usuario === "professor" && senha === "senac") {
        rest1.textContent = "Bem-vindo, professor";
    } else {
        rest1.textContent = "Usuário ou senha incorretos";
    }
}

function calculardesconto() {
    let valor = document.getElementById("valor").value;
    let vip = document.getElementById("VIPZAO").value;
    let cupom = document.getElementById("cupom").value;
    let resultadoDesconto = document.getElementById("ResultadoDesconto");

    if(valor === "" || valor <0){
        resultadoDesconto.textContent = "Erro";
        return
    }
    let desconto = 0;

    if(valor>500 && vip === "sim"){
        desconto = valor*0.20;
    }
    else if (valor >=300 ||  cupom === "sim"){
        desconto = valor*0.10;
    }
    let final = valor - desconto;
    resultadoDesconto.textContent = "Total: R" + final;
} 

function VerficarAvaliação() {
    const notaInput = document.getElementById("nota").value;
    const freqInput = document.getElementById("frequencia").value;
    const nota = Number(notaInput);
    const freq = Number(freqInput);
    const rest3 = document.getElementById("ResultadeDeAvaliação");

    if (notaInput === "" || freqInput === "") {
        rest3.textContent = "Preencha todos os campos";
        return;
    }

    if (nota < 0 || nota > 100 || freq < 0 || freq > 100) {
        rest3.textContent = "Valores devem estar entre 0 e 100";
        return;
    }

    if (nota >= 60 && freq >= 75) {
        rest3.textContent = "Aprovado";
    } else if (nota >= 40 && nota < 60 && freq >= 75) {
        rest3.textContent = "Recuperação";
    } else {
        rest3.textContent = "Reprovado";
    }
}
