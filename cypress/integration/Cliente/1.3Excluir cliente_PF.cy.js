describe('Excluir cliente', () => {
  it('Excluir cliente', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
      // cy.get - buscar elemento
      // .type - insere texto
      cy.login('Login')
      cy.visit('http://127.0.0.1/manager/cad_cliente.php5?id_menu=202')
  //    cy.buscarpf('ÇPF')
      cy.get('#FLT_NUM_CGC').type('37032399053')
      cy.get('#EXEC_FILTRO').click()
      cy.get('#parametro_geral_excluir').click()
      //cy.get('.notifications-menu > .dropdown-toggle').click()
      cy.get('#btn_Salvar').click() 

      cy.get('.sa-success').should("exist")
      cy.get('#alert_message_internal').should('have.text', 'Operação(Exc) Executada com Sucesso.')
      
      
  })
  
    it('Consulta cliente', () => {
        cy.visit('http://127.0.0.1/manager/login.php5')
        // cy.get - buscar elemento
        // .type - insere texto
        cy.login('1','2291755')
        cy.visit('http://127.0.0.1/manager/cad_cliente.php5?id_menu=202')
        cy.get('#FLT_NUM_CGC').type('37032399053')
        cy.get('#EXEC_FILTRO').click()
        
  
        cy.get('.dataTables_empty').should("exist")
        
    })
       
  })