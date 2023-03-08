describe('Exluir  Cupom Promocional', () => {
    it('Exluir  Cupom Promocional', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
     //cy.get - buscar elemento
     //.type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_cupom_promocional.php5?id_menu=20303')
     cy.get('#EXEC_FILTRO').click()
     cy.get('#valor_combo_excluir').click()
     cy.get('#btn_Salvar').click()
     cy.get('#alert_message_internal').should('have.text', 'Operação(Exc) Executada com Sucesso.')
     
     
      })

       it('Exluir  Cupom Promocional', () => {
       cy.visit('http://127.0.0.1/manager/login.php5')
       // cy.get - buscar elemento
       // .type - insere texto
       cy.login('1','2291755')
       cy.visit('http://127.0.0.1/manager/cad_cupom_promocional.php5?id_menu=20303')
       cy.get('#EXEC_FILTRO').click()
       cy.get('#SEL_cupom_promocional_TBODY tr').should('have.length', 1)
       cy.get('.dataTables_empty').should("exist")
       
    })
})
