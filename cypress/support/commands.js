// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (user , password) => { 
    cy.get('#USUARIO').type('1');
    cy.get('#SENHA').type('2291755');
    cy.get('.btn').click();

 })
 Cypress.Commands.add('buscarpj', (cpf , buton) => { 
    cy.get('#FLT_NUM_CGC').type('23751378000122')
    cy.get('#EXEC_FILTRO').click()

 })

 Cypress.Commands.add('buscarpf', (cpf , buton) => { 
    cy.get('#FLT_NUM_CGC').type('37032399053')
    cy.get('#EXEC_FILTRO').click()

 })

 Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
   // failing the test
   return false
 })