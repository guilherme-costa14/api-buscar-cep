let botao = document.getElementById("botao-buscar-cep")
botao.addEventListener("click", function(){
    let cep = document.getElementById("input-cep").value
    fnBuscarCep(cep)
})

function fnBuscarCep(cep){
    const url = `https://cep.awesomeapi.com.br/json/${cep}`;
    fetch(url)
    .then(resposta => {
        return resposta.json()
    })
    .then(dados => {
        fnExibirInformacoes(dados.address, dados.district, dados.city, dados.state)
    })
    .catch(error => {
        console.log("Erro ao buscar CEP", error)
    })
}

function fnExibirInformacoes(rua, bairro, cidade, estado){
    document.getElementById("rua").value = rua
    document.getElementById("bairro").value = bairro
    document.getElementById("cidade").value = cidade
    document.getElementById("estado").value = estado
}