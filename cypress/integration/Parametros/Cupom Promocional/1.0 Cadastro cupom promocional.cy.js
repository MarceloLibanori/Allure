describe('Cadastrar Cupom Promocional', () => {
    it('Cadastrar Cupom Promocional', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
     //cy.get - buscar elemento
     //.type - insere texto
     cy.login('1','2291755')
     cy.visit('http://127.0.0.1/manager/cad_cupom_promocional.php5?id_menu=20303')
     cy.get('#btn_Incluir').click()
     cy.get('#COD_TEXTO').type('851')
     cy.get('#QUANTIDADE_CUPONS').type('5')
     cy.get('#btn_Salvar').click()
     cy.get('#alert_message_internal').should('have.text', 'Operação(Inc) Executada com Sucesso.')
     
     
     
      })

       it('consultar Cupom Promocional', () => {
       cy.visit('http://127.0.0.1/manager/login.php5')
       // cy.get - buscar elemento
       // .type - insere texto
       cy.login('1','2291755')
       cy.visit('http://127.0.0.1/manager/cad_cupom_promocional.php5?id_menu=20303')
       cy.get('#EXEC_FILTRO').click()

       cy.get('#SEL_cupom_promocional_TBODY tr').should('have.length', 1)
       cy.get('.class_link_simples').should('exist')
    })
})

    
      

       
  
      
  
      
  