const inputNome = document.getElementById('nome')
let inputIdade = document.getElementById('idade')
let inputSenha = document.getElementById('senha')
let resultado = document.getElementById('res')
const botao = document.getElementById('btn1')

botao.addEventListener("click", ()=> {
let idade = Number(inputIdade.value)
let senha = inputSenha.value
resultado.classList.remove("erro", "sucesso") //Limpar a classe antes de Validar. Evita o conflito de estilos. 

if (inputNome.value === "" || inputIdade.value === "" || inputSenha.value === "") { //campos vazios
    resultado.textContent = "Preencha todos os campos!!"
    resultado.classList.add("erro")
} else if (idade < 18) {
    resultado.textContent = "Login inválido: Menor de idade."
    resultado.classList.add("erro")
} else if (senha !== "1234") {
    resultado.textContent = "Login inválido: Senha incorreta."
    resultado.classList.add("erro")
} else {
    resultado.textContent = "Acesso Liberado!"
    resultado.classList.add("sucesso")
}
})
   