/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common";
import { HomePage } from "../../../page-objects/Home"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Negative scenarios for Login and Users creation', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()

      

  it('Verify messages validations in seeker actions', ()=>{
    commons.open_Web_Site()
    homePage.select_Login()
    cy.get('#loginform-email').type("milton.paredes.mp@gmail.com")
    cy.wait(2000)
    cy.get('#loginform-password').type("password")
    homePage.submit_Credentials()
    cy.wait(3000)
    cy.get('.quick-links > :nth-child(2) > :nth-child(3) > a').click()
    cy.get('#accountinformationform-first_name').clear()
    cy.get('#accountinformationform-last_name').clear()
    cy.get('#accountinformationform-email').clear()
    cy.get('#accountinformationform-password').click()
    cy.get('.field-accountinformationform-first_name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'First name cannot be blank.')
    cy.get('.field-accountinformationform-last_name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Last name cannot be blank.')
    cy.get('.field-accountinformationform-email > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Email cannot be blank.')
    cy.go("back")
    //Verify error messages in Contact Vivaya page
    cy.get(':nth-child(3) > :nth-child(2) > a').click()
    cy.get('.btn-content > .btn').click()
    cy.get('.field-contactform-name > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.field-contactform-email > .invalid-feedback').should('be.visible').and('have.text', 'Email cannot be blank.')
    cy.get('.field-contactform-subject > .invalid-feedback').should('be.visible').and('have.text', 'Subject cannot be blank.')
    cy.get('.field-contactform-body > .invalid-feedback').should('be.visible').and('have.text', 'Body cannot be blank.')
    //cy.get('.field-contactform-verifycode > .help-block').should('be.visible').and('have.text', 'The verification code is incorrect.')


})

}) 