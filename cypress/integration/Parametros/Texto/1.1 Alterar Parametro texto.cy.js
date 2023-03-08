describe('Alterar Parametro', () => {
    it('Alterar Parametro texto', () => {
        cy.visit('http://127.0.0.1/manager/login.php5')
       // cy.viewport(550, 750)
        // cy.get - buscar elemento
        // .type - insere texto
        cy.login('1','2291755')
        cy.visit('http://127.0.0.1/manager/cad_texto.php5?id_menu=20301')
        cy.get('#FLT_COD_TEXTO').type('555')
        cy.get('#EXEC_FILTRO').click()

        cy.get('#texto_alterar').click()
        cy.get('#DESCRICAO').clear()
        .type('Cypress')
        cy.get('#DIV_ABA_H_1').click()
       // cy.get('#texto_linha_excluir_1').click()
       // cy.get('.sa-confirm-button-container').click()  
        cy.get('#DIV_ABA_H_1').click()
        cy.get('#COD_LINHA').type('321')
        cy.get('#CLASSE_1_BOTAO').click()
    
       //cy.get('.notifications-menu > .dropdown-toggle').click()
        cy.get('#btn_Salvar').click() 
        cy.get('#alert_message_internal').should('have.text', 'Operação(Alt) Executada com Sucesso.')

   

})

it('consultar Parametro texto', () => {
    cy.visit('http://127.0.0.1/manager/login.php5')
    // cy.get - buscar elemento
    // .type - insere texto
    cy.login('1','2291755')
    cy.visit('http://127.0.0.1/manager/cad_texto.php5?id_menu=20301')
    cy.get('#FLT_COD_TEXTO').type('555')
    cy.get('#EXEC_FILTRO').click()
    cy.get('#texto_alterar').click()

    cy.get('#DESCRICAO').should('have.value', 'CYPRESS')   
    cy.get('#DIV_ABA_H_1').click()
    cy.get('#SEL_texto_linha_TBODY tr').should('have.length', 2)
    cy.get('.class_link_simples').should('exist')

      
            
         // cy.get('#SEL_texto_linha_TBODY').should('have.value', '365')
         // cy.get(':nth-child(1) > .form-group > #APELIDO_ENDERECO').should('have.value', 'Marcelo')
        
         
    })

    })