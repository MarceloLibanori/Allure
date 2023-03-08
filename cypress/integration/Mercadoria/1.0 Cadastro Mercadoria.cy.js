describe('Cadastro Mercadoria', () => {
    it('Cadastrar Mercadoria zanthus', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
      // cy.get - buscar elemento
      // .type - insere texto
      cy.login('login')
      cy.visit('http://127.0.0.1/manager/cad_mercadoria.php5?id_menu=21101')
      cy.get('#btn_Incluir').click()
      cy.get('.input-group > #COD_MERCADORIA').type('00000000000000006')
     // cy.get(':nth-child(2) > .form-group > .input-group > #VALOR_BTN > #B_VALOR_BTN > .fa').click()
      cy.get('#DESCRICAO').type('cypress')
      cy.get('#COD_DEPARTAMENTO').type('407')
      cy.get('#DIV_ABA_H_5').click()
      cy.get('#UNIDADE_VENDA').type('UN')
      cy.get('#UNIDADE_TRIB').type('UN')
      cy.get('#UNIDADE_TRIB').type('UN')
      cy.get('#DIV_ABA_H_10').click()
      cy.get('#COD_SITUACAO_TRIBUTARIA').select('000 - Nacional-Tributação integral')
      cy.get('#COD_TRIBUTACAO_MERCADORIA').type('4')
      cy.get('#COD_NCM').type('9401.20.00')
      cy.get('#DIV_ABA_H_19').click()
      cy.get('.confirm').click()
      cy.get('#DIV_ABA_H_19').click()
      cy.get(':nth-child(2) > .form-group > #PRECO_UNITARIO').clear()
      .type('50,00')
       cy.get('#mercadoria_tipo_venda > :nth-child(2) > :nth-child(1) > .form-group > .select > #COD_TIPO_VENDA').select('1 - VENDA NORMAL')
      cy.get('#CLASSE_1_BOTAO').click()
      cy.get('#btn_Salvar').click()
      cy.get('#alert_message_internal').should('have.text', 'Operação(Inc) Executada com Sucesso.')
      cy.get('.confirm').click()
    })
 
   it('consultar Mercadoria existente', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
   //   // cy.get - buscar elemento
   //   // .type - insere texto
    cy.login('login')
    cy.visit('http://127.0.0.1/manager/cad_mercadoria.php5?id_menu=21101')
   // cy.get(':nth-child(2) > .form-group > .input-group > #VALOR_BTN > #B_VALOR_BTN').click()
    cy.get('#FLT_COD_MERCADORIA').type('00000000000000006')
     cy.get('#FLT_DESCRICAO').type('cypress')
    cy.get('#EXEC_FILTRO').click()
    cy.get('#SEL_mercadoria_TBODY tr').should('have.length', 1)
     cy.get('.class_link_simples').should('exist')
      
      
      
  })
}) 
  