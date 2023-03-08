describe('Cadastro cliente PJ', () => {
    it('Cadastrar cliente PJ', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
      // cy.get - buscar elemento
      // .type - insere texto
      cy.login('1','2291755')
      cy.visit('http://127.0.0.1/manager/cad_cliente.php5?id_menu=202')
      cy.get('#btn_Incluir').click()
      cy.get('#FLG_EMPRESA').select('Pessoa jurídica')
      cy.get(':nth-child(1) > .form-group > .input-group > #VALOR_BTN > #B_VALOR_BTN').click()
      cy.get('#DES_CLIENTE').type('Marcelo Cypress PJ')
      cy.get('#NUM_CGC').type('23751378000122')
      cy.get('#DIV_ABA_H_1').click()
      cy.get('#ID_MUNICIPIO').type('3896')
      cy.get('#DES_ENDERECO').type('rua do imperador')
      cy.get('#NUMERO').type('151')
      cy.get('#DES_BAIRRO').type('vila guilherme')
      cy.get('#NUM_CEP').type('02074001')
      cy.get('#btn_Salvar').click()
      cy.get('#alert_message_internal').should('have.text', 'Operação(Inc) Executada com Sucesso.')
  
     // cy.get('.sa-success').should("exist")
      cy.get('.confirm').click()
     // cy.get('#lgpd-enviar').click()
    })
  
    it('consultar cliente existente', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
      // cy.get - buscar elemento
      // .type - insere texto
      cy.login('1','2291755')
      cy.visit('http://127.0.0.1/manager/cad_cliente.php5?id_menu=202')
      cy.buscarpj('CNPJ')
  
      cy.get('#SEL_cliente_TBODY tr').should('have.length', 1)
      cy.get('.class_link_simples').should('exist')
      
      
      
  })
  })  
  
       