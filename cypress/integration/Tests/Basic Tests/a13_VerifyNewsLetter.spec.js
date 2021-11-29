/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {SchedulePage } from "../../../page-objects/SchedulePage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Test for verify the NewsLetter',()=>{
    const homePage = new HomePage()
    const schedulePage = new SchedulePage()
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    it('Verify the NewsLetter',()=>{
      homePage.Fill_newsletter('Automation','test','automation@test.com')
      cy.get('h2.text-center').should('contain', 'Newsletter')
           
     })

    it('Verify validation of fields of NewsLetter ',()=>{
      cy.wait(500)
      cy.scrollTo(0, 800) 
      cy.get('#subscribe-form > .btn').click({force:true})
      cy.get('#subscribe-form > .field-subscribeform-firstname > .invalid-feedback').should('contain','First Name cannot be blank.')
      cy.get('#subscribe-form > .field-subscribeform-lastname > .invalid-feedback').should('contain','Last Name cannot be blank.')
      cy.get('#subscribe-form > .field-subscribeform-email > .invalid-feedback').should('contain','Email Address cannot be blank.')
     
      })

    



  })