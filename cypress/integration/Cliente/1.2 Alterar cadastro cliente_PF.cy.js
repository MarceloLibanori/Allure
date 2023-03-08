describe('Alterar cliente', () => {
    it('Alterar cliente', () => {
        cy.visit('http://127.0.0.1/manager/login.php5')
        // cy.get - buscar elemento
        // .type - insere texto
        cy.login('1','2291755')
        cy.visit('http://127.0.0.1/manager/cad_cliente.php5?id_menu=202')
        cy.get('#FLT_NUM_CGC').type('37032399053')
        cy.get('#EXEC_FILTRO').click()
        
        cy.get('#parametro_geral_alterar').click()
        cy.get(':nth-child(1) > .form-group > #APELIDO_ENDERECO').clear()
        .type('Marcelo')
        cy.get('#NUMERO').clear()
        .type(365)
        //cy.get('.notifications-menu > .dropdown-toggle').click()
        cy.get('#btn_Salvar').click() 
        cy.get('#alert_message_internal').should('have.text', 'Operação(Alt) Executada com Sucesso.')
        cy.get('.confirm').click()

})

        it('consultar cliente alterado', () => {
            cy.visit('http://127.0.0.1/manager/login.php5')
            // cy.get - buscar elemento
            // .type - insere texto
            cy.login('1','2291755')
            cy.visit('http://127.0.0.1/manager/cad_cliente.php5?id_menu=202')
            cy.get('#FLT_NUM_CGC').type('37032399053')
            cy.get('#EXEC_FILTRO').click()
            cy.get('#parametro_geral_alterar').click()
        

            
          cy.get('#NUMERO').should('have.value', '365')
          cy.get(':nth-child(1) > .form-group > #APELIDO_ENDERECO').should('have.value', 'Marcelo')
        
        
    })

    })