describe('Cadastrar Motivos', () => {
    it('Cadastrar Motivos', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
     //cy.get - buscar elemento
     //.type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_motivo_devolucao.php5?id_menu=20306')
     cy.get('#btn_Incluir').click()
     cy.get(':nth-child(2) > .form-group > .input-group > #VALOR_BTN > #B_VALOR_BTN').click()
     cy.get(':nth-child(1) > .form-group > #DESCRICAO').type('Cypress')
     cy.get('#FLG_TIPOS_DIV > :nth-child(1) > .control__indicator').click()
     cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control > .control > .control__indicator').click()     
     cy.get('#btn_Salvar').click()
     cy.get('#alert_message_internal').should('have.text', 'Operação(Inc) Executada com Sucesso.')
     
     
      })

       it('consultar Motivos', () => {
       cy.visit('http://127.0.0.1/manager/login.php5')
       // cy.get - buscar elemento
       // .type - insere texto
       cy.login('1','2291755')
       cy.visit('http://127.0.0.1/manager/cad_motivo_devolucao.php5?id_menu=20306')
       cy.get('#FLT_DESCRICAO').type('CYPRESS')
       cy.get('#EXEC_FILTRO').click()
       

       cy.get('#SEL_motivo_devolucao_TBODY tr').should('have.length', 1)
       cy.get('.class_link_simples').should('exist')
    })
})

    
      

       
  
      
  
      
  