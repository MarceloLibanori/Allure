
it('Alterar Mercadoria existente', () => {
    cy.visit('http://127.0.0.1/manager/login.php5')
 //   // cy.get - buscar elemento
 //   // .type - insere texto
    cy.login('login')
   cy.visit('http://127.0.0.1/manager/cad_mercadoria.php5?id_menu=21101')
   cy.get('#FLT_COD_MERCADORIA').type('00000000000000006')
   cy.get('#FLT_DESCRICAO').type('cypress')
  cy.get('#EXEC_FILTRO').click()
  cy.get('#SEL_mercadoria_TBODY tr').should('have.length', 1)
   cy.get('.class_link_simples').should('exist')
   cy.get('#mercadoria_excluir').click()
    cy.get('#btn_Salvar').click()
    cy.get('.sa-success').should("exist")
    cy.get('#alert_message_internal').should('have.text', 'Operação(Exc) Executada com Sucesso.')

    })

    it('consultar Exclusão Mercadoria', () => {
        cy.visit('http://127.0.0.1/manager/login.php5')
     //   // cy.get - buscar elemento
     //   // .type - insere texto
     cy.login('login')
       cy.visit('http://127.0.0.1/manager/cad_mercadoria.php5?id_menu=21101')
       cy.get('#FLT_COD_MERCADORIA').type('00000000000000006')
       cy.get('#FLT_DESCRICAO').type('cypress123')
        cy.get('#EXEC_FILTRO').click()
    
       
       cy.get('.dataTables_empty').should("exist")

})
