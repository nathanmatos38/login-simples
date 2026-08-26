# 🧪 Casos de Teste — Login Simples

Este documento apresenta os casos de teste utilizados para validar as principais funcionalidades da aplicação **Login Simples**.

A suíte é composta por **36 casos de teste**, organizados em sete grupos.

---

# Grupo 1 — Happy Path

## G1-CT-001 — Validação com sucesso

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 22 |
| Senha | 1234 |

**Resultado Esperado:** Acesso liberado.

**Resultado Atual:** Acesso Liberado.

**Status:** ✅ PASS

---

# Grupo 2 — Variações de Entrada

## G2-CT-001 — Nome em letras maiúsculas

| Campo | Valor |
|---|---|
| Nome | `NATHAN` |
| Idade | 21 |
| Senha | 1234 |

**Resultado Esperado:** Acesso liberado.

**Resultado Atual:** Acesso Liberado.

**Status:** ✅ PASS

---

## G2-CT-002 — Nome em letras minúsculas

| Campo | Valor |
|---|---|
| Nome | `nathan` |
| Idade | 20 |
| Senha | 1234 |

**Resultado Esperado:** Acesso liberado.

**Resultado Atual:** Acesso Liberado.

**Status:** ✅ PASS

---

## G2-CT-003 — Nome com capitalização mista

| Campo | Valor |
|---|---|
| Nome | `naTHan` |
| Idade | 20 |
| Senha | 1234 |

**Resultado Esperado:** Acesso liberado.

**Resultado Atual:** Acesso Liberado.

**Status:** ✅ PASS

---

## G2-CT-004 — Espaço no início do Nome

| Campo | Valor |
|---|---|
| Nome | `" Nathan"` |
| Idade | 20 |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso Liberado.

**Status:** ❌ FAIL — espaço no início

---

## G2-CT-005 — Espaço no final do Nome

| Campo | Valor |
|---|---|
| Nome | `"Nathan "` |
| Idade | 20 |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso Liberado.

**Status:** ❌ FAIL — espaço no final

---

## G2-CT-006 — Nome e sobrenome

| Campo | Valor |
|---|---|
| Nome | `Nathan Matos` |
| Idade | 20 |
| Senha | 1234 |

**Resultado Esperado:** Acesso liberado.

**Resultado Atual:** Acesso Liberado.

**Status:** ✅ PASS

---

# Grupo 3 — Entradas Inválidas / Sem Correspondência

## G3-CT-001 — Senha incorreta

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 20 |
| Senha | 2401 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem de senha incorreta.

**Status:** ✅ PASS

---

## G3-CT-002 — Idade acima do limite

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 250 |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso Liberado.

**Status:** ❌ FAIL

---

## G3-CT-003 — Menor de idade

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 15 |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem de menor de idade.

**Status:** ✅ PASS

---

## G3-CT-004 — Campos vazios

| Campo | Valor |
|---|---|
| Nome | `""` |
| Idade | `""` |
| Senha | `""` |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem "Preencha todos os campos".

**Status:** ✅ PASS

---

## G3-CT-005 — Números no campo Nome

| Campo | Valor |
|---|---|
| Nome | `Nathan01` |
| Idade | 19 |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso Liberado.

**Status:** ❌ FAIL

---

## G3-CT-006 — Senha inválida

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 20 |
| Senha | abcd |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem de senha incorreta.

**Status:** ✅ PASS

---

## G3-CT-007 — Senha com caracteres especiais

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 20 |
| Senha | `*&%$` |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem de senha incorreta.

**Status:** ✅ PASS

---

## G3-CT-008 — Senha com espaço no início

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 20 |
| Senha | `" 1234"` |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem de senha incorreta.

**Status:** ✅ PASS

---

## G3-CT-009 — Senha incompleta

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 20 |
| Senha | 123 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem de senha incorreta.

**Status:** ✅ PASS

---

# Grupo 4 — Valores Limites

## G4-CT-001 — Idade mínima inválida

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 17 |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem de menor de idade.

**Status:** ✅ PASS

---

## G4-CT-002 — Idade mínima válida

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 18 |
| Senha | 1234 |

**Resultado Esperado:** Acesso liberado.

**Resultado Atual:** Acesso Liberado.

**Status:** ✅ PASS

---

## G4-CT-003 — Idade máxima válida

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 100 |
| Senha | 1234 |

**Resultado Esperado:** Acesso liberado.

**Resultado Atual:** Acesso Liberado.

**Status:** ✅ PASS

---

## G4-CT-004 — Idade acima do limite

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 101 |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso Liberado.

**Status:** ❌ FAIL

---

# Grupo 5 — Responsividade

## G5-CT-001 — Viewport 1440 × 842

- **Vídeo:** Dentro do esperado.
- **Campos:** Corretos e ativos.
- **Textos:** Corretos e legíveis.
- **Barra de rolagem:** Inexistente.
- **Funcionalidades:** Ativas.

**Resultado Esperado:** A aplicação deve permanecer funcional, com layout adequado, textos legíveis, campos acessíveis e sem rolagem horizontal/vertical inesperada.

**Resultado Atual:** Comportamento observado no viewport.

**Status:** ✅ PASS

---

## G5-CT-002 — Viewport 1024 × 842

- **Vídeo:** Dentro do esperado.
- **Campos:** Corretos e ativos.
- **Textos:** Corretos e legíveis.
- **Barra de rolagem:** Inexistente.
- **Funcionalidades:** Ativas.

**Resultado Esperado:** A aplicação deve permanecer funcional, com layout adequado, textos legíveis, campos acessíveis e sem rolagem horizontal/vertical inesperada.

**Resultado Atual:** Comportamento observado no viewport.

**Status:** ✅ PASS

---

## G5-CT-003 — Viewport 768 × 842

- **Vídeo:** Dentro do esperado.
- **Campos:** Corretos e ativos.
- **Textos:** Corretos e legíveis.
- **Barra de rolagem:** Inexistente.
- **Funcionalidades:** Ativas.

**Resultado Esperado:** A aplicação deve permanecer funcional, com layout adequado, textos legíveis, campos acessíveis e sem rolagem horizontal/vertical inesperada.

**Resultado Atual:** Comportamento observado no viewport.

**Status:** ✅ PASS

---

## G5-CT-004 — Viewport 425 × 842

- **Vídeo:** Dentro do esperado.
- **Campos:** Corretos e ativos.
- **Textos:** Corretos e legíveis.  
  *Observação: o texto quebrou para a linha de baixo.*
- **Barra de rolagem:** Inexistente.
- **Funcionalidades:** Ativas.

**Resultado Esperado:** A aplicação deve permanecer funcional, com layout adequado, textos legíveis, campos acessíveis e sem rolagem horizontal/vertical inesperada.

**Resultado Atual:** Comportamento observado no viewport.

**Status:** ✅ PASS

---

## G5-CT-005 — Viewport 375 × 842

- **Vídeo:** Dentro do esperado.
- **Campos:** Corretos e ativos.
- **Textos:** Corretos e legíveis.  
  *Observação: o texto quebrou para a linha de baixo.*
- **Barra de rolagem:** Inexistente.
- **Funcionalidades:** Ativas.

**Resultado Esperado:** A aplicação deve permanecer funcional, com layout adequado, textos legíveis, campos acessíveis e sem rolagem horizontal/vertical inesperada.

**Resultado Atual:** Comportamento observado no viewport.

**Status:** ✅ PASS

---

## G5-CT-006 — Viewport 320 × 842

- **Vídeo:** Dentro do esperado.
- **Campos:** Corretos e ativos.  
  *Observação: o campo "Mostrar senha" quebrou para a linha de baixo.*
- **Textos:** Corretos e legíveis.  
  *Observação: o texto quebrou para a linha de baixo.*
- **Barra de rolagem:** Inexistente.
- **Funcionalidades:** Ativas.

**Resultado Esperado:** A aplicação deve permanecer funcional, com layout adequado, textos legíveis, campos acessíveis e sem rolagem horizontal/vertical inesperada.

**Resultado Atual:** Comportamento observado no viewport.

**Status:** ✅ PASS

---

# Grupo 6 — Botão "Entrar"

## G6-CT-001 — Botão "Entrar" com dados válidos

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 22 |
| Senha | 1234 |

**Resultado Esperado:** Acesso liberado.

**Resultado Atual:** Acesso Liberado.

**Status:** ✅ PASS

---

## G6-CT-002 — Botão "Entrar" com Nome vazio

| Campo | Valor |
|---|---|
| Nome | `""` |
| Idade | 22 |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem "Preencha todos os campos".

**Status:** ✅ PASS

---

## G6-CT-003 — Botão "Entrar" com Idade vazia

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | `""` |
| Senha | 1234 |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem "Preencha todos os campos".

**Status:** ✅ PASS

---

## G6-CT-004 — Botão "Entrar" com Senha vazia

| Campo | Valor |
|---|---|
| Nome | Nathan |
| Idade | 20 |
| Senha | `""` |

**Resultado Esperado:** Acesso inválido.

**Resultado Atual:** Acesso inválido, mensagem "Preencha todos os campos".

**Status:** ✅ PASS

---

## G6-CT-005 — Acionamento repetido

**Ação:** Preencher os campos corretamente e clicar repetidamente no botão "Entrar".

**Resultado Esperado:** O sistema deve processar cada tentativa corretamente, sem travamentos ou comportamento inesperado.

**Status:** ✅ PASS

---

## G6-CT-006 — Feedback visual do botão

**Ação:** Acionar o botão "Entrar".

**Resultado Esperado:** A animação/feedback visual de clique deve ser apresentada corretamente.

**Status:** ✅ PASS

---

# Grupo 7 — Mostrar/Ocultar Senha

## G7-CT-001 — Mostrar senha

**Ação:** Preencher a senha e clicar no botão "Mostrar senha".

**Resultado Esperado:** A senha digitada deve ser exibida.

**Status:** ✅ PASS

---

## G7-CT-002 — Ocultar senha

**Ação:** Após mostrar a senha, clicar novamente no botão.

**Resultado Esperado:** A senha deve voltar a ficar oculta.

**Status:** ✅ PASS

---

## G7-CT-003 — Alternância repetida

**Ação:** Clicar várias vezes alternando entre mostrar e ocultar.

**Resultado Esperado:** O campo deve alternar corretamente entre os dois estados.

**Status:** ✅ PASS

---

## G7-CT-004 — Cliques rápidos

**Ação:** Acionar rapidamente o controle de mostrar/ocultar.

**Resultado Esperado:** O controle deve continuar funcionando corretamente, sem travamento ou comportamento inesperado.

**Status:** ✅ PASS

---

# 📊 Resultado da Baseline

| Resultado | Quantidade |
|---|---:|
| ✅ PASS | 31 |
| ❌ FAIL | 5 |
| ⚪ BLOCK | 0 |
| **Total** | **36** |

**Taxa de aprovação:** aproximadamente **86,11%**

**Taxa de falha:** aproximadamente **13,89%**