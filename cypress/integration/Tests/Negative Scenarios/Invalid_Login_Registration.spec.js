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
    cy.get('#loginform-email').type("user_123@user.com")
    cy.wait(2000)
    cy.get('#loginform-password').type("perrodelmal")
    homePage.submit_Credentials()
    cy.get('.field-loginform-password > .col-sm-8 > .help-block').should('be.visible').and('have.text', 'Incorrect email or password.')
    //Verify empty fields
    cy.get('#loginform-email').clear()
    cy.wait(2000)
    cy.get('#loginform-password').clear()
    homePage.submit_Credentials()
    cy.get('.field-loginform-email > .col-sm-8 > .help-block').should('be.visible').and('have.text', 'Email cannot be blank.')
    cy.get('.field-loginform-password > .col-sm-8 > .help-block').should('be.visible').and('have.text', 'Password cannot be blank.')

})

  it('Verify Negative messages in Free trial page', ()=>{
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