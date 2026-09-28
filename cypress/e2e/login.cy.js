
describe('Login Simples/Grupo 1 - Logins válidos', () => {
  it('Deve logar com sucesso', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')
  })

   it('Nome em letras maiúsculas', () => {
    cy.start()

    cy.get('#nome').type('NATHAN')
    cy.get('#idade').type('21')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')
   })

  it('Nome em letras minúsculas', () => {
    cy.start()

    cy.get('#nome').type('nathan')
    cy.get('#idade').type('20')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')
  })

  it('Nome com capitalização mista.', () => {
    cy.start()

    cy.get('#nome').type('naTHan')
    cy.get('#idade').type('20')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')
  })

  it('Nome e Sobrenome', () => {
    cy.start()

    cy.get('#nome').type('Nathan Matos')
    cy.get('#idade').type('20')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')
  })

  it('Campo idade com valor mínimo válido', () => {
    cy.start()

    cy.get('#nome').type('Nathan Matos')
    cy.get('#idade').type('18')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')
  })

  it('Campo idade com valor máximo válido', () => {
    cy.start()

    cy.get('#nome').type('Nathan Matos')
    cy.get('#idade').type('100')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')
  })
})


describe('Login Simples/Grupo 2 - Logins inválidos', () => {
  it('Deve negar acesso com senha incorreta', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('2401')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: Senha incorreta.')
  })

  it('Campo Idade acima do limite', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('250')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: A idade máxima aceita é de 100 anos.')
  })

   it('Campo idade abaixo do limite', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('15')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: Menor de idade.')
   })

   it('Tentativa de login sem o preenchimento dos dados', () => {
    cy.start()

    cy.get('#nome').should('have.value', '')
    cy.get('#idade').should('have.value', '')
    cy.get('#senha').should('have.value', '')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Preencha todos os campos!!')
   })

   it('Deve rejeitar números no campo Nome', () => {
    cy.start()

    cy.get('#nome').type('Nathan01')
    cy.get('#idade').type('19')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'O nome não pode conter números.')
   })

   it('Espaço no início do nome', () => {
    cy.start()

    cy.get('#nome').type(' Nathan')
    cy.get('#idade').type('20')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'O nome não pode conter espaços no início ou no final.')
   })

   it('Espaço no final do nome', () => {
    cy.start()

    cy.get('#nome').type('Nathan ')
    cy.get('#idade').type('20')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'O nome não pode conter espaços no início ou no final.')
   })

   it('Campo senha contendo letras', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('20')
    cy.get('#senha').type('abcd')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: Senha incorreta.')
   })

   it('Campo senha contendo caractere especiais', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('20')
    cy.get('#senha').type('*&%$')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: Senha incorreta.')
   })

   it('Campo senha com espaço', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('20')
    cy.get('#senha').type(' 1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: Senha incorreta.')
   })

   it('Campo com senha abaixo do limite', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('20')
    cy.get('#senha').type('123')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: Senha incorreta.')
   })

   it('Campo idade com valor abaixo do limite', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('17')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: Menor de idade.')
   })

   it('Campo idade com valor acima do limite', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('101')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Login inválido: A idade máxima aceita é de 100 anos.')
   })
})


describe('Grupo 3 - Funciionalidades do Botão Entrar', () => {
  it('Botão Entrar com dados válidos', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')
  })

  it('Botão Entrar com nome vazio', () => {
    cy.start()

    cy.get('#nome').should('have.value', '')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Preencha todos os campos!!')
  })

  it('Botão Entrar com idade vazia', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').should('have.value', '')
    cy.get('#senha').type('1234')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Preencha todos os campos!!')
  })

  it('Botão Entrar com senha vazia', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('20')
    cy.get('#senha').should('have.value', '')

    cy.get('#btn1').click()

    cy.get('.erro')
      .should('be.visible')
      .and('have.text', 'Preencha todos os campos!!')
  })

  it('Acionamento do Botão Entrar repetidamente', () => {
    cy.start()

    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('20')
    cy.get('#senha').type('1234')

    Cypress._.times(7, () => {
    cy.get('#btn1').click()
  })

    cy.get('.sucesso')
      .should('be.visible')
      .and('have.text', 'Acesso Liberado!')

    cy.get('.erro').should('not.exist')
  })
})


describe('Grupo 4 - Funcionalidade do Botão Mostrar/Ocultar senha', () => {
  it('Mostrar senha', () => {
    cy.start()

    cy.get('#senha').should('have.attr', 'type', 'password')
    cy.get('#mostrarSenha').click()
    cy.get('#senha').should('have.attr', 'type', 'text')
    cy.get('#mostrarSenha').click()
    cy.get('#senha').should('have.attr', 'type', 'password')
  })

  it('Alternância repetidamente do Botão Mostra/Ocultar', () => {
    cy.start()
    cy.get('#senha').type('1234')

    Cypress._.times(7, () => {
    cy.get('#mostrarSenha').click()
  })
  })
})


describe('Grupo 5 - Responsividade', () => {
  it('Viewport 1440 x 842', () => {
    cy.start()
    cy.viewport(1440, 842)

    cy.get('body').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')
    cy.get('#mostrarSenha').click().click()
    cy.get('#btn1').click()
    cy.get('.sucesso')
     .should('be.visible')
     .and('have.text', 'Acesso Liberado!')
  })

  it('Viewport 1024 x 842', () => {
    cy.start()
    cy.viewport(1024, 842)

    cy.get('body').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')
    cy.get('#mostrarSenha').click().click()
    cy.get('#btn1').click()
    cy.get('.sucesso')
     .should('be.visible')
     .and('have.text', 'Acesso Liberado!')
  })

  it('Viewport 768 x 842', () => {
    cy.start()
    cy.viewport(768, 842)

    cy.get('body').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')
    cy.get('#mostrarSenha').click().click()
    cy.get('#btn1').click()
    cy.get('.sucesso')
     .should('be.visible')
     .and('have.text', 'Acesso Liberado!')
  })

  it('Viewport 425 x 842', () => {
    cy.start()
    cy.viewport(425, 842)

    cy.get('body').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')
    cy.get('#mostrarSenha').click().click()
    cy.get('#btn1').click()
    cy.get('.sucesso')
     .should('be.visible')
     .and('have.text', 'Acesso Liberado!')
  })

  it('Viewport 375 x 842', () => {
    cy.start()
    cy.viewport(375, 842)

    cy.get('body').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')
    cy.get('#mostrarSenha').click().click()
    cy.get('#btn1').click()
    cy.get('.sucesso')
     .should('be.visible')
     .and('have.text', 'Acesso Liberado!')
  })

  it('Viewport 320 x 842', () => {
    cy.start()
    cy.viewport(320, 842)

    cy.get('body').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('#nome').type('Nathan')
    cy.get('#idade').type('22')
    cy.get('#senha').type('1234')
    cy.get('#mostrarSenha').click().click()
    cy.get('#btn1').click()
    cy.get('.sucesso')
     .should('be.visible')
     .and('have.text', 'Acesso Liberado!')
  })
})

