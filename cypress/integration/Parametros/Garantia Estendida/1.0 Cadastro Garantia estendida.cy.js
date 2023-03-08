describe('Cadastrar Parametro Garantia', () => {
    it('Cadastrar Parametro Garanria', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
     //cy.get - buscar elemento
     //.type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_garantia_extendida.php5?id_menu=20302')
     cy.get('#btn_Incluir').click()
     cy.get('#B_VALOR_BTN').click()
     cy.get(':nth-child(1) > .form-group > #DESCRICAO').type('Cypress')
     cy.get('#DIV_ABA_H_1').click()
     cy.get(':nth-child(2) > .form-group > #DESCRICAO').type('Cypress')
     cy.get('#VALOR_GARANTIA').type('2')
     cy.get('#CLASSE_1_BOTAO').click()
     cy.get('#btn_Salvar').click()
     cy.get('#alert_message_internal').should('have.text', 'Operação(Inc) Executada com Sucesso.')
     
     

//
    })
    
     it('consultar Parametro Garanria', () => {
     cy.visit('http://127.0.0.1/manager/login.php5')
     // cy.get - buscar elemento
     // .type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_garantia_extendida.php5?id_menu=20302')
     cy.get('#FLT_DESCRICAO').type('Cypress')
     cy.get('#EXEC_FILTRO').click()
      
     cy.get('#SEL_garantia_extendida_TBODY tr').should('have.length', 1)
     cy.get('.class_link_simples').should('exist')


})
})

    
      

       
  
      
  
      
  