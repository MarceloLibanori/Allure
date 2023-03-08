describe('Cadastrar Parametro texto', () => {
    it('Cadastrar Parametro texto', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
     //cy.get - buscar elemento
     //.type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_texto.php5?id_menu=20301')
     cy.get('#btn_Incluir').click()
     cy.get('.form-group > #COD_TEXTO').type('555')
     cy.get('#DESCRICAO').type('Marcelo Cypress')
     cy.get('#DIV_ABA_H_1').click()
     cy.get('#COD_LINHA').type('123')
     cy.get('#CLASSE_1_BOTAO').click()
     cy.get('#btn_Salvar').click()
     cy.get('#alert_message_internal').should('have.text', 'Operação(Inc) Executada com Sucesso.')
     
     

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
      cy.get('.class_link_simples').should('exist')


})
})

    
      

       
  
      
  
      
  