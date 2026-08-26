# 🐛 Bug Report — Login Simples

Este documento apresenta os bugs identificados durante a execução da baseline da aplicação **Login Simples**.

Os defeitos foram registrados a partir da exploração inicial e dos casos de teste executados, sendo acompanhados por suas respectivas evidências.

---

## BUG-001 — Espaços no início e no final do campo Nome

### 📌 Título

Aplicação permite espaços no início ou no final do campo Nome.

### 🔹 Pré-condição

Página em seu estado original.

### 🔄 Passos para reproduzir

> O BUG-001 foi registrado em duas condições: espaço no início e espaço no final do campo Nome.

#### Cenário 1 — Espaço no início

1. Entrar na aplicação.
2. Preencher o campo Nome com `" Nathan"`.
3. Preencher os campos Idade e Senha corretamente.
4. Clicar em "Entrar".

#### Cenário 2 — Espaço no final

1. Entrar na aplicação.
2. Preencher o campo Nome com `"Nathan "`.
3. Preencher os campos Idade e Senha corretamente.
4. Clicar em "Entrar".

### ❌ Resultado atual

Ao clicar em "Entrar", a aplicação considera válido o valor informado e efetua o login mesmo contendo espaços no início ou no final.

### ✅ Resultado esperado

O sistema deve impedir o acesso quando houver espaços no início ou no final do campo Nome.

### 📸 Evidências

**Espaço no início:**

[Evidência — Espaço no início](evidencias/BUG-001-espaco-nome-inicio.png)

**Espaço no final:**

[Evidência — Espaço no final](evidencias/BUG-001-espaco-nome-final.png)

### ⚠️ Severidade

**Baixa**

O problema é facilmente revertido e não apresenta dificuldade significativa para a interação do usuário.

---

## BUG-002 — Números no campo Nome

### 📌 Título

Campo Nome permite caracteres numéricos.

### 🔹 Pré-condição

Página em seu estado original.

### 🔄 Passos para reproduzir

1. Entrar na aplicação.
2. Preencher o campo Nome com `"Nathan01"`.
3. Preencher os campos Idade e Senha corretamente.
4. Clicar em "Entrar".

### ❌ Resultado atual

Ao clicar em "Entrar", a aplicação libera o acesso, contrariando a regra de validação definida para o campo Nome.

### ✅ Resultado esperado

O sistema deve impedir o acesso caso o campo Nome seja preenchido com valores numéricos.

### 📸 Evidência

[Evidência — Números no campo Nome](evidencias/BUG-002-numeros-nome.png)

### ⚠️ Severidade

**Baixa**

O problema não impede o uso da aplicação, mas permite a entrada de dados que não atendem à regra de validação definida para o campo Nome.

---

## BUG-003 — Idade acima do critério estabelecido

### 📌 Título

Aplicação permite acesso com idade acima do limite estabelecido.

### 🔹 Pré-condição

Página em seu estado original.

### 🔄 Passos para reproduzir

> O BUG-003 foi registrado em duas condições, com o campo Idade contendo os valores `"101"` e `"250"`.

#### Cenário 1 — Idade 101

1. Entrar na aplicação.
2. Preencher os campos Nome e Senha corretamente.
3. Preencher o campo Idade com `101`.
4. Clicar em "Entrar".

#### Cenário 2 — Idade 250

1. Entrar na aplicação.
2. Preencher os campos Nome e Senha corretamente.
3. Preencher o campo Idade com `250`.
4. Clicar em "Entrar".

### ❌ Resultado atual

Ao clicar em "Entrar", a aplicação permite o acesso mesmo quando o campo Idade é preenchido com valores superiores ao limite estabelecido, como 101 e 250.

### ✅ Resultado esperado

O sistema deve impedir o acesso quando a idade informada for maior que 100 anos.

### 📸 Evidências

**Idade 101:**

[Evidência — Idade 101](evidencias/BUG-003-idade-101.png)

**Idade 250:**

[Evidência — Idade 250](evidencias/BUG-003-idade-250.png)

### ⚠️ Severidade

**Média**

O problema pode ser corrigido por meio de uma validação adicional. Entretanto, a aplicação permite o acesso com valores de idade incompatíveis com o limite estabelecido pela regra funcional.