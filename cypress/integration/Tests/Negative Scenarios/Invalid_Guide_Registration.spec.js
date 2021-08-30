/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common";
import { HomePage } from "../../../page-objects/Home"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Negative scenarios for Login and Users creation', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()

      

  it('Verify Negative messages in Guide registarion', ()=>{
    commons.open_Web_Site()
    cy.get('.become-a-guide > a').click()
    cy.get('.bag-button > .btn').click()
    cy.get('.form-group.text-center > .btn').click()

    cy.get('.field-signupform-first_name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'First name cannot be blank.')
    cy.get('.field-signupform-last_name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Last name cannot be blank.')
    cy.get('.field-signupform-email > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Email cannot be blank.')
    cy.get('.field-signupform-phone_number > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Mobile number cannot be blank.')
    cy.get('#divState > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'State cannot be blank.')
    cy.get('.field-signupform-password > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Password cannot be blank.')
    cy.get('.col-sm-12 > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'You must accept terms and conditions')
   
   

})


})  