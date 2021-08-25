/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common";
import { HomePage } from "../../../page-objects/Home"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Negative scenarios for Login and Users creation', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()

      

  it('Verify Negative messages in Login page', ()=>{
    commons.open_Web_Site()
    homePage.select_Login()
    cy.get('#loginform-email').type("horcosio@gmail.com")
    cy.wait(2000)
    cy.get('#loginform-password').type("perrodelmal")
    homePage.submit_Credentials()
    cy.wait(3000)
    cy.get('.quick-links > :nth-child(2) > :nth-child(3) > a').click()
    cy.get('#accountinformationform-first_name').clear()
    cy.get('#accountinformationform-last_name').clear()
    cy.get('#accountinformationform-email').clear()
    cy.get('#accountinformationform-password').click()
    cy.get('.field-accountinformationform-first_name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'First name cannot be blank.')
    cy.get('.field-accountinformationform-last_name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Last name cannot be blank.')
    cy.get('.field-accountinformationform-email > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Email cannot be blank.')
    cy.go("back")
    //Verify error messages in Contact Vivaya page
    cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
    cy.get(':nth-child(7) > .btn').click()


})

  it.skip('Verify Negative messages in Free trial page', ()=>{
    commons.open_Web_Site()
    cy.get('.menu > :nth-child(1) > .btn').click()
    cy.get('.form-group.text-center > .btn').click()
    cy.get('.field-signupform-first_name > .col-md-8 > .help-block').should('be.visible').and('have.text', 'First name cannot be blank.')
    cy.get('.field-signupform-last_name > .col-md-8 > .help-block').should('be.visible').and('have.text', 'Last name cannot be blank.')
    cy.get('.field-signupform-email > .col-md-8 > .help-block').should('be.visible').and('have.text', 'Email cannot be blank.')
    cy.get('.field-signupform-password > .col-md-8 > .help-block').should('be.visible').and('have.text', 'Password cannot be blank.')
    cy.get('.withoutLeft > .form-group > .col-md-8 > .help-block').should('be.visible').and('have.text', 'You must accept terms and conditions')
  })  

})  