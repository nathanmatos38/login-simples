# 🧪 Projeto Login Simples — QA

## 🎯 Objetivo

Validar a versão publicada da aplicação **Login Simples** antes da implementação das correções.

O objetivo é identificar e analisar falhas, erros, inconsistências e comportamentos inesperados, verificando o comportamento das principais funcionalidades da aplicação, tais como:

* Campo Nome;
* Campo Idade;
* Campo Senha;
* Botão "Mostrar/Ocultar senha";
* Botão "Entrar".

---

## 🔎 Escopo

Foi criado um conjunto de casos de teste e percorrido um caminho organizado para possibilitar a análise objetiva das principais funcionalidades da aplicação.

A execução da suíte foi dividida em sete grupos de testes, abrangendo diferentes tipos de cenários:

### Grupo 1 — Happy Path

O Happy Path (caminho feliz) foi utilizado como ponto inicial da execução para validar o comportamento esperado das principais funcionalidades antes da exploração de cenários alternativos e negativos.

Nessa etapa, foram validados cenários de sucesso para os campos corretamente preenchidos.

### Grupo 2 — Variações de Entrada

Foram exploradas diferentes variações nas entradas das funcionalidades, incluindo limites, variações de capitalização e espaços em branco, com o objetivo de identificar possíveis falhas nos resultados apresentados.

### Grupo 3 — Entradas Inválidas / Sem Correspondência

Foram exploradas diferentes entradas nos campos, incluindo números, espaços e caracteres especiais, com o objetivo de verificar o comportamento da aplicação diante de entradas que não atendem às regras definidas.

### Grupo 4 — Valores Limites

Foram testados casos de borda, explorando os limites definidos para a aplicação, como idade mínima válida/inválida e idade máxima válida/inválida.

### Grupo 5 — Responsividade

Foram exploradas diferentes larguras de tela para verificar a responsividade da aplicação, observando as alterações de layout e a utilização das funcionalidades em cada viewport testada.

### Grupo 6 — Botão "Entrar"

Nessa etapa foi testado exclusivamente o botão "Entrar".

Foram utilizados dados de entrada válidos e inválidos, além de ser verificado o acionamento repetido da funcionalidade.

### Grupo 7 — Botão "Mostrar/Ocultar senha"

No último grupo, foi testada a funcionalidade de mostrar/ocultar senha.

Foi verificada a resposta do botão em alternâncias repetidas e cliques rápidos, além de sua função principal de exibir e ocultar a senha informada.

---

## 🖥️ Ambiente de Testes

### Aplicação

A aplicação utilizada nos testes foi a versão publicada através do GitHub Pages.

**Aplicação:** Login Simples — GitHub Pages

### Navegador

**Google Chrome — Versão 151.0.7922.138 (Compilação oficial) (64 bits)**

### Ferramenta

Para testar o comportamento da aplicação em diferentes tamanhos de viewport, foi utilizada a ferramenta **DevTools**, especificamente o **Device Mode**, que permite simular diferentes larguras de tela.

### Viewports testadas

| Tipo    | Largura × Altura |
| ------- | ---------------: |
| Desktop |       1440 × 842 |
| Desktop |       1024 × 842 |
| Tablet  |        768 × 842 |
| Mobile  |        425 × 842 |
| Mobile  |        375 × 842 |
| Mobile  |        320 × 842 |

### Versão avaliada

A versão analisada corresponde à aplicação publicada antes da implementação das correções.

---

# 📋 Regras Funcionais

### RF-001 — Login válido

O usuário pode efetuar o login quando todos os campos estiverem preenchidos corretamente e atenderem às regras de validação.

### RF-002 — Campos obrigatórios

Quando um ou mais campos obrigatórios não forem preenchidos, o sistema deve impedir o login e exibir uma mensagem informando que todos os campos são obrigatórios.

### RF-003 — Nome obrigatório

O campo Nome deve ser preenchido para que o login possa ser realizado.

### RF-004 — Nome sem espaços nas extremidades

O campo Nome não deve aceitar espaços no início ou no final da entrada.

### RF-005 — Nome sem números

O campo Nome não deve aceitar caracteres numéricos.

### RF-006 — Nome com letras maiúsculas e minúsculas

O campo Nome deve aceitar letras maiúsculas e minúsculas.

### RF-007 — Idade mínima

Quando a idade informada for menor que 18 anos, o sistema deve impedir o login e exibir uma mensagem informando que a idade não atende ao requisito mínimo.

### RF-008 — Idade máxima

Quando a idade informada for maior que 100 anos, o sistema deve impedir o login e exibir uma mensagem informando que a idade excede o limite permitido.

### RF-009 — Senha inválida

Quando a senha informada for diferente de `1234`, o sistema deve impedir o login e exibir uma mensagem de erro informando que a senha é inválida.

### RF-010 — Mostrar/Ocultar senha

Quando o usuário clicar no botão "Mostrar senha", a senha digitada deve ser exibida.

Quando clicar novamente no botão "Ocultar senha", a senha deve ser ocultada.

### RF-011 — Feedback da tentativa de login

Ao clicar no botão "Entrar", o sistema deve processar os dados informados e apresentar um feedback correspondente ao resultado da validação, indicando se o login foi válido ou inválido.

### RF-012 — Validação dos campos

Ao clicar no botão "Entrar", o sistema deve realizar as validações dos campos preenchidos antes de determinar o resultado da tentativa de login.

---

# 🧪 Estratégia de Testes

A estratégia foi definida com base nas funcionalidades apresentadas pela aplicação e nas regras funcionais identificadas durante a exploração.

Inicialmente, foram realizados **testes exploratórios** para compreender o comportamento da aplicação e identificar suas principais funcionalidades.

Após essa etapa, foram definidos possíveis cenários de teste com base nos comportamentos observados.

A execução teve início pelo **Happy Path**, utilizado para validar inicialmente se as principais funcionalidades apresentavam o comportamento esperado.

Após a validação dos cenários positivos, foram exploradas diferentes entradas, incluindo variações de dados, limites, espaços, números e caracteres especiais.

A exploração de diferentes entradas foi fundamental para a identificação de inconsistências na aplicação. As falhas encontradas contribuíram para a definição dos cenários de teste e para o registro dos respectivos bugs.

Em seguida, foram explorados cenários negativos, verificando o comportamento da aplicação quando os dados informados não atendiam às regras de validação estabelecidas.

Também foi avaliada a **responsividade** da aplicação em diferentes tamanhos de tela, verificando campos, textos, vídeo, botões e demais elementos da interface em cada viewport testada.

Ao final, foram organizados e documentados **36 casos de teste**, compondo a jornada completa de análise da aplicação.

Foi estabelecida uma **baseline** com os resultados da primeira execução da suíte, permitindo comparar diretamente o comportamento da versão inicial com a versão corrigida.

---

# ▶️ Execução dos Testes

A execução foi realizada com base nos **36 casos de teste** previamente definidos, contemplando os diferentes cenários funcionais e de responsividade estabelecidos para a aplicação.

Os 36 casos de teste foram separados em sete grupos, com diferentes definições e tipos de cenário.

Todos os grupos foram executados integralmente e na ordem definida, sem exceções.

## 📊 Resultado por grupo

| Grupo     | Cenário                                  |   PASS |  FAIL |  Total |
| --------- | ---------------------------------------- | -----: | ----: | -----: |
| G1        | Happy Path                               |      1 |     0 |      1 |
| G2        | Variações de Entrada                     |      4 |     2 |      6 |
| G3        | Entradas Inválidas / Sem Correspondência |      7 |     2 |      9 |
| G4        | Valores Limites                          |      3 |     1 |      4 |
| G5        | Responsividade                           |      6 |     0 |      6 |
| G6        | Botão "Entrar"                           |      6 |     0 |      6 |
| G7        | Botão "Mostrar/Ocultar senha"            |      4 |     0 |      4 |
| **Total** |                                          | **31** | **5** | **36** |

## 📊 Resultado geral da suíte — Baseline

Foram executados 36 testes, com o seguinte resultado:

* ✅ **31 PASS**
* ❌ **5 FAIL**
* ⚪ **0 BLOCK**

A taxa de aprovação foi de aproximadamente **86,11%**, enquanto a taxa de falha foi de aproximadamente **13,89%**.

Os cinco casos de teste que retornaram FAIL estão relacionados aos comportamentos analisados na seção de **Bugs Encontrados**.

---

# 🐛 Bugs Encontrados

Durante a exploração e execução dos testes foram identificadas divergências na versão avaliada.

## BUG-001 — Espaços no início e no final do Nome

**Casos de teste relacionados:** G2-CT-004 e G2-CT-005

### Cenário 1

**Entrada — campo Nome:** `" Nathan"`

### Cenário 2

**Entrada — campo Nome:** `"Nathan "`

**Ação:** Clicar em "Entrar"

**Resultado Atual:** Acesso Liberado

**Resultado Esperado:** Acesso Inválido

**Status:** ABERTO

**Evidências:**

* [Evidência do espaço no início](evidencias/BUG-001-espaco-nome-inicio.png)
* [Evidência do espaço no final](evidencias/BUG-001-espaco-nome-final.png)

---

## BUG-002 — Números no campo Nome

**Caso de teste relacionado:** G3-CT-005

**Entrada — campo Nome:** `"Nathan01"`

**Ação:** Clicar em "Entrar"

**Resultado Atual:** Acesso Liberado

**Resultado Esperado:** Acesso Inválido

**Status:** ABERTO

**Evidência:**

[Evidência dos números no campo Nome](evidencias/BUG-002-numeros-nome.png)

---

## BUG-003 — Idade acima do limite

**Casos de teste relacionados:** G3-CT-002 e G4-CT-004

### Cenário 1

**Entrada — campo Idade:** `"101"`

### Cenário 2

**Entrada — campo Idade:** `"250"`

**Ação:** Clicar em "Entrar"

**Resultado Atual:** Acesso Liberado

**Resultado Esperado:** Acesso Inválido

**Status:** ABERTO

**Evidências:**

* [Evidência da idade maior 100](evidencias/BUG-003-idade-101.png)
* [Evidência da idade 250](evidencias/BUG-003-idade-250.png)

---

# 📸 Evidências

As evidências abaixo foram coletadas durante a execução dos testes na versão publicada da aplicação e têm como objetivo registrar visualmente os comportamentos identificados durante a baseline.

As imagens estão armazenadas na pasta `evidencias/` do projeto e estão relacionadas aos respectivos bugs identificados.

## BUG-001 — Espaços no início e no final do campo Nome

As evidências demonstram o comportamento identificado durante a inspeção exploratória inicial da aplicação.

O bug foi reproduzido em duas condições: espaço no início e espaço no final do campo Nome.

**Evidência do espaço no início:**

[Evidência do espaço no início](evidencias/BUG-001-espaco-nome-inicio.png)

**Evidência do espaço no final:**

[Evidência do espaço no final](evidencias/BUG-001-espaco-nome-final.png)

---

## BUG-002 — Caracteres numéricos no campo Nome

A evidência demonstra que, ao inserir caracteres numéricos no campo Nome, a aplicação permite o prosseguimento da operação.

Entretanto, os critérios de aceite estabelecem que o campo Nome não deve aceitar caracteres numéricos.

**Evidência do campo Nome com números:**

[Evidência dos números no campo Nome](evidencias/BUG-002-numeros-nome.png)

---

## BUG-003 — Idades acima do critério estabelecido

As evidências demonstram o comportamento da aplicação ao informar valores de idade acima do limite estabelecido.

O bug foi reproduzido em duas condições: idade `101` e idade `250`.

**Evidência do campo Idade contendo o valor `101`:**

[Evidência da idade maior 100](evidencias/BUG-003-idade-101.png)

**Evidência do campo Idade contendo o valor `250`:**

[Evidência da idade 250](evidencias/BUG-003-idade-250.png)

---

# 🔧 Correções e Retestes

Após a identificação dos três bugs presentes na baseline, foram realizadas as respectivas correções na aplicação.

Cada alteração foi seguida por retestes específicos para validar o comportamento esperado e verificar se a correção solucionou a falha identificada.

## BUG-001 — Correção dos espaços no início ou no final do Nome

**Causa:** A aplicação verificava apenas se o campo estava vazio (`""`), mas não validava se o valor possuía espaços no início ou no final.

### Correção aplicada

Antes:

```javascript
const idade = Number(inputIdade.value)
const senha = inputSenha.value
```

Depois:

```javascript
const nome = inputNome.value.trim()
const idade = Number(inputIdade.value)
const senha = inputSenha.value
```

Também foi criada uma condição específica para identificar espaços no início ou no final da entrada:

```javascript
else if (nome !== inputNome.value) {
    resultado.textContent = "O nome não pode conter espaços no início ou no final."
    resultado.classList.add("erro")
}
```

**Reteste:** Após a correção, foram executados testes que não apenas cobriram a falha identificada, mas também exploraram outros cenários relacionados ao campo Nome.

**Resultado:** **PASS** — O campo Nome passou a rejeitar entradas com espaço no início ou no final.

**Status do BUG:** **CORRIGIDO** ✅

---

## BUG-002 — Campo Nome não deve aceitar números

**Causa:** Quando era informado um nome contendo números, a aplicação aceitava a entrada sem realizar uma validação específica sobre os caracteres utilizados, permitindo o acesso com nomes compostos por letras e números.

### Correção aplicada

Foi adicionada uma validação para identificar caracteres numéricos:

```javascript
else if (/\d/.test(nome)) {
    resultado.textContent = "O nome não pode conter números."
    resultado.classList.add("erro")
}
```

**Reteste:** Após a correção, foram executados testes que não apenas cobriram a falha identificada, mas também exploraram outros cenários relacionados ao campo Nome.

**Resultado:** **PASS** — O campo Nome passou a rejeitar entradas com números, preservando a regra funcional.

**Status do BUG:** **CORRIGIDO** ✅

---

## BUG-003 — Idade acima do permitido

**Causa:** Quando o usuário informava uma idade acima de 100 anos, como 101 ou 250, a aplicação aceitava a entrada e liberava o acesso, mesmo ultrapassando a idade máxima definida pela regra funcional.

### Correção aplicada

Foi adicionada uma validação para impedir valores superiores a 100 anos:

```javascript
else if (idade > 100) {
    resultado.textContent = "Login inválido: A idade máxima aceita é de 100 anos."
    resultado.classList.add("erro")
}
```

**Reteste:** Após a correção, foram executados testes que não apenas cobriram a falha identificada, mas também exploraram outros cenários relacionados à idade. Casos de borda foram abordados durante a correção e o reteste.

**Resultado:** **PASS** — O campo Idade passou a rejeitar valores superiores a 100 anos, mantendo a regra de idade máxima definida.

**Status do BUG:** **CORRIGIDO** ✅

---

# 🔁 Regressão

Após a implementação das três correções e a realização dos respectivos retestes, foi executada novamente a suíte completa de **36 casos de teste** utilizada na baseline.

O objetivo da regressão foi verificar se as correções solucionaram os defeitos identificados sem causar impactos negativos nas demais funcionalidades da aplicação.

### Resultado da regressão

| Resultado | Quantidade |
| --------- | ---------: |
| ✅ PASS    |     **36** |
| ❌ FAIL    |      **0** |
| ⚪ BLOCK   |      **0** |
| **Total** |     **36** |

**Resultado da regressão: 36/36 casos aprovados — 100%.**

Além da execução local da versão corrigida, a aplicação foi publicada novamente e os comportamentos relacionados às correções foram validados no ambiente publicado.

As funcionalidades existentes também foram preservadas após as alterações.

---

# 🏁 Resultado Final

Após a implementação das correções, foram realizados os respectivos retestes dos bugs identificados e uma nova execução completa da suíte de testes utilizada na baseline.

A mesma suíte contendo **36 casos de teste** foi executada novamente, permitindo comparar diretamente os resultados da versão inicial com a versão corrigida.

## 📊 Resultado comparativo

| Resultado | Baseline | Versão final |
| --------- | -------: | -----------: |
| ✅ PASS    |       31 |       **36** |
| ❌ FAIL    |        5 |        **0** |
| ⚪ BLOCK   |        0 |        **0** |
| **Total** |   **36** |       **36** |

Na baseline, foram obtidos **31 PASS, 5 FAIL e 0 BLOCK**.

Após a implementação das correções, os mesmos 36 casos de teste foram executados novamente, resultando em **36 PASS, 0 FAIL e 0 BLOCK**.

Todos os casos anteriormente classificados como FAIL foram retestados e apresentaram o comportamento esperado na versão corrigida.

## 🐛 Status dos bugs

| Bug     | Descrição                                                  | Status      |
| ------- | ---------------------------------------------------------- | ----------- |
| BUG-001 | Campo Nome aceitando espaços no início ou no final         | ✅ CORRIGIDO |
| BUG-002 | Campo Nome aceitando entrada de números                    | ✅ CORRIGIDO |
| BUG-003 | Campo Idade liberando acesso com idade superior a 100 anos | ✅ CORRIGIDO |

## ✅ Resultado da validação final

* ✅ 36 testes executados
* ✅ 36 PASS
* ✅ 0 FAIL
* ✅ 0 BLOCK
* ✅ Todos os cinco casos de teste que apresentavam FAIL na baseline foram aprovados na versão final.
* ✅ BUG-001 corrigido e retestado.
* ✅ BUG-002 corrigido e retestado.
* ✅ BUG-003 corrigido e retestado.
* ✅ Versão publicada validada após as alterações.
* ✅ Funcionalidades existentes preservadas após as correções.

## 📈 Evolução da qualidade

A execução da suíte demonstra a evolução da aplicação entre a baseline e a versão final:

### Baseline

**31 PASS | 5 FAIL | 0 BLOCK**

⬇️

**Correções + Retestes + Regressão**

⬇️

### Versão final

**36 PASS | 0 FAIL | 0 BLOCK**

**Resultado final da suíte: 100% dos casos de teste aprovados.**

---

# 📝 Conclusão

A análise de qualidade foi realizada inicialmente sobre a versão publicada da aplicação, estabelecendo uma baseline antes da implementação das correções.

Na baseline, foram executados **36 casos de teste**, sendo obtidos **31 PASS, 5 FAIL e 0 BLOCK**. Os resultados permitiram identificar três bugs na versão inicialmente avaliada. Após a implementação das correções, foram realizados os respectivos retestes.

Ao final do ciclo de correção, a mesma suíte de 36 casos de teste utilizada na baseline foi executada novamente, resultando em **36 PASS, 0 FAIL e 0 BLOCK**.

A versão corrigida também foi validada no ambiente publicado, confirmando o funcionamento das alterações implementadas e a preservação das demais funcionalidades da aplicação.

Dessa forma, todos os defeitos identificados durante o ciclo de validação foram corrigidos e os comportamentos esperados foram validados.

**Resultado final da validação: ✅ APROVADO — 36/36 casos de teste PASS (100%).**
