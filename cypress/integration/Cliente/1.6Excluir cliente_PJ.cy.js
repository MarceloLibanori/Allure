describe('Excluir cliente', () => {
  it('Excluir cliente', () => {
      cy.visit('http://127.0.0.1/manager/login.php5')
      // cy.get - buscar elemento
      // .type - insere texto
      cy.login('1','2291755')
      cy.visit('http://127.0.0.1/manager/cad_cliente.php5?id_menu=202')
      cy.buscarpj('CNPJ')
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
        cy.buscarpj('CNPJ')
        
  
        cy.get('.dataTables_empty').should("exist")
        
    })
       
  })