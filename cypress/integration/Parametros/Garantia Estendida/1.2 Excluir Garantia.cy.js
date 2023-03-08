describe('Excluir Parametro Garantia', () => {
    it('Excluir Parametro Garanria', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
     //cy.get - buscar elemento
     //.type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_garantia_extendida.php5?id_menu=20302')
     cy.get('#FLT_DESCRICAO').type('Cypress 1')
     cy.get('#EXEC_FILTRO').click()
     cy.get('#garantia_extendida_excluir').click()
     cy.get('#btn_Salvar').click()
     cy.get('#alert_message_internal').should('have.text', 'Operação(Exc) Executada com Sucesso.')





     
    
//
    })
    
     it('consultar Parametro Garanria', () => {
     cy.visit('http://127.0.0.1/manager/login.php5')
     // cy.get - buscar elemento
     // .type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_garantia_extendida.php5?id_menu=20302')
     cy.get('#FLT_DESCRICAO').type('Cypress 1')
     cy.get('#EXEC_FILTRO').click()
      
     cy.get('#SEL_garantia_extendida_TBODY tr').should('have.length', 1)
      cy.get('.dataTables_empty').should("exist")


})
})

    