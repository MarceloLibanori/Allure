describe('template spec', () => {
    it('Excluir Parametro texto', () => {
                      cy.visit('http://127.0.0.1/manager/login.php5')
               // cy.viewport(550, 750)
                // cy.get - buscar elemento
                // .type - insere texto
                cy.login('1','2291755')
                cy.visit('http://127.0.0.1/manager/cad_texto.php5?id_menu=20301')
                cy.get('#FLT_COD_TEXTO').type('555')
                cy.get('#EXEC_FILTRO').click()
        
                cy.get('#texto_excluir').click()
                cy.get('#btn_Salvar').click() 
                cy.get('#alert_message_internal').should('have.text', 'Operação(Exc) Executada com Sucesso.')
    })
    
     it('consultar Parametro texto', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
      // cy.get - buscar elemento
      // .type - insere texto
      cy.login('1','2291755')
      cy.visit('http://127.0.0.1/manager/cad_texto.php5?id_menu=20301')
      cy.get('#FLT_COD_TEXTO').type('555')
      cy.get('#EXEC_FILTRO').click()
  
      cy.get('#SEL_texto_TBODY tr').should('have.length', 1)
      cy.get('.dataTables_empty').should("exist")


})
})