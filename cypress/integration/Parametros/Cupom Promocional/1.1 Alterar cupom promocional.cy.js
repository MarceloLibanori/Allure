describe('Alterar  Cupom Promocional', () => {
    it('Alterar  Cupom Promocional', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
     //cy.get - buscar elemento
     //.type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_cupom_promocional.php5?id_menu=20303')
     cy.get('#EXEC_FILTRO').click()
     cy.get('#valor_combo_alterar').click()
     cy.get('#NUMERO_PONTOS').type('200')
     cy.get('#QUANTIDADE_CUPONS').clear()
     .type('10')
     cy.get('#btn_Salvar').click()
     cy.get('#alert_message_internal').should('have.text', 'Operação(Alt) Executada com Sucesso.')
     
     
      })

       it('Alterar  Cupom Promocional', () => {
       cy.visit('http://127.0.0.1/manager/login.php5')
       // cy.get - buscar elemento
       // .type - insere texto
       cy.login('1','2291755')
       cy.visit('http://127.0.0.1/manager/cad_cupom_promocional.php5?id_menu=20303')
       cy.get('#EXEC_FILTRO').click()
       cy.get('#SEL_cupom_promocional_TBODY tr').should('have.length', 1)
       cy.get('.class_link_simples').should('exist')
       cy.get('#valor_combo_alterar').click()
       cy.get('#NUMERO_PONTOS').should('have.value', '200')
       cy.get('#QUANTIDADE_CUPONS').should('have.value', '10')
       
    })
})
