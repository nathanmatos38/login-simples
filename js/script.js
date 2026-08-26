const inputNome = document.getElementById('nome')
const inputIdade = document.getElementById('idade')
const inputSenha = document.getElementById('senha')
const resultado = document.getElementById('res')
const botao = document.getElementById('btn1')
const mostrarSenha = document.getElementById('mostrarSenha')

mostrarSenha.addEventListener("click", ()=> {
    if (inputSenha.type === "password") {
        inputSenha.type = "text"
        mostrarSenha.textContent = "Ocultar senha"
        // mostrar senha
    } else {
        inputSenha.type = "password"
        mostrarSenha.textContent = "Mostrar senha"
        // esconder senha
    }
})

botao.addEventListener("click", ()=> {

const nome = inputNome.value.trim()
const idade = Number(inputIdade.value)
const senha = inputSenha.value

resultado.classList.remove("erro", "sucesso") //Limpar a classe antes de Validar. Evita o conflito de estilos. 

if (nome === "" || inputIdade.value === "" || inputSenha.value === "") { //campos vazios

    resultado.textContent = "Preencha todos os campos!!"
    resultado.classList.add("erro")

} else if (nome!== inputNome.value) {

    resultado.textContent = "O nome não pode conter espaços no início ou no final."
    resultado.classList.add("erro")

} else if (/\d/.test(nome)) {

    resultado.textContent = "O nome não pode conter números."
    resultado.classList.add("erro")

} else if (idade > 100) {

    resultado.textContent = "Login inválido: A idade máxima aceita é de 100 anos."
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
   