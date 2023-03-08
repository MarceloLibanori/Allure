describe('Alterar Parametro Garantia', () => {
    it('Alterar Parametro Garanria', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
     //cy.get - buscar elemento
     //.type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_garantia_extendida.php5?id_menu=20302')
     cy.get('#FLT_DESCRICAO').type('Cypress')
     cy.get('#EXEC_FILTRO').click()
     cy.get('#garantia_extendida_alterar').click()
     cy.get(':nth-child(1) > .form-group > #DESCRICAO').clear()
     .type('Cypress 1')
     cy.get('#DIV_ABA_H_1').click()
     
     cy.get('#valor_combo_alterar_1').click()

    // cy.get('#VALOR_GARANTIA').type('1')
     cy.get('#CLASSE_1_BOTAO').click()
     cy.get('#btn_Salvar').click()
     cy.get('#alert_message_internal').should('have.text', 'Operação(Alt) Executada com Sucesso.')

    
//
    })
    
     it('consultar Parametro Garanria', () => {
     cy.visit('http://127.0.0.1/manager/login.php5')
     // cy.get - buscar elemento
     // .type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_garantia_extendida.php5?id_menu=20302')
     cy.get('#FLT_DESCRICAO').type('CYPRESS 1')
     cy.get('#EXEC_FILTRO').click()
     cy.get('#garantia_extendida_alterar').click()
     cy.get(':nth-child(1) > .form-group > #DESCRICAO').should('have.value', 'CYPRESS 1')
     cy.get('#DIV_ABA_H_1').click()   
     cy.get('#valor_combo_alterar_1').click() 
     cy.get('#SEL_garantia_extendida_opcao_TBODY tr').should('have.length', 1)
     cy.get('.class_link_simples').should('exist')


})
})

    
      

       
  
      
  
      
  