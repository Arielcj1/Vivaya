/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('View the Recording with different users',()=>{
    const commons = new Commons()

    beforeEach(()=>{
      commons.open_Web_Site()
      
    })

    it('Verify that a Seeker with Free trial can access the recording by pressing the Play Recording button.', () => {
        cy.get('.login-link').click()
        commons.set_Seeker_Credentials_One()
        cy.get('.col-12 > .btn').click()
        cy.wait(3000)
        cy.visit('https://stage.vivayalive.com/recordings')
        cy.wait(5000)
        cy.get(':nth-child(1) > .e-btn').click()        //Click on the first Play Recording button
        cy.get('#banner').should('contain','Recordings')
        
    })

    it('Verify that a seeker with Monthly Unlimited Membership can access the recording from the event detail with the Play Recording button.', () => {
        cy.get('.login-link').click()
        
        cy.wait(1000)
        cy.get('#loginform-email').type("automation.two@test.com")
        cy.wait(2000)
        cy.get('#loginform-password').type("password")
        cy.get('.col-12 > .btn').click()
        cy.wait(3000)
        cy.visit('https://stage.vivayalive.com/events/2022/12/23/12318-test-class-stage-2')
        cy.get('h1 > strong').should('be.visible')
        cy.get('.guide-name').should('be.visible')
        cy.get('.offset-md-4 > .btn-primary').click()
        cy.wait(5000)
        
    })

    it('Verify that a Seeker with Monthly 3 Pack Membership cannot access the recording and an informative message is displayed.', () => {
        cy.get('.login-link').click()
        
        cy.wait(1000)
        cy.get('#loginform-email').type("stage@testing.com")
        cy.wait(2000)
        cy.get('#loginform-password').type("control123")
        cy.get('.col-12 > .btn').click()
        cy.wait(3000)
        cy.visit('https://stage.vivayalive.com/recordings')
        cy.wait(3000)
        cy.get(':nth-child(1) > .e-btn').click()
        cy.get('.alert-success').should('be.visible')
        cy.wait(3000)

        
    })

    it('Verify that a Seeker with Monthly 5 Pack Membership cannot access the recording.', () => {
        cy.get('.login-link').click()
        
        cy.wait(1000)
        cy.get('#loginform-email').type("testuno@test.com")
        cy.wait(2000)
        cy.get('#loginform-password').type("control123")
        cy.get('.col-12 > .btn').click()
        cy.wait(3000)
        cy.visit('https://stage.vivayalive.com/recordings')
        cy.wait(3000)
        cy.get(':nth-child(1) > .e-btn').click()
        cy.get('.alert-success').should('be.visible')
        cy.wait(3000)

        
    })

    it('Verify that a guest cannot access the recording and an informative message is displayed.', () => {
        cy.get('.login-link').click()
        
        cy.wait(1000)
        cy.get('#loginform-email').type("automateguest@mailinator.com")
        cy.wait(2000)
        cy.get('#loginform-password').type("control123")
        cy.get('.col-12 > .btn').click()
        cy.wait(3000)
        cy.visit('https://stage.vivayalive.com/recordings')
        cy.wait(3000)
        cy.get(':nth-child(1) > .e-btn').click()
        cy.get('.alert-success').should('be.visible')
        cy.wait(3000)

        
    })

    it('Verify that you can filter by Main Offering with the Offering filter.', () => {
      cy.visit('https://stage.vivayalive.com/recordings')
      cy.get('.CaptionCont').click()
      cy.get(':nth-child(1) > label').click()
      cy.wait(3000)
      cy.get('.CaptionCont').click()
      cy.get('#reset-select-offering').click()
      cy.get('.CaptionCont').click()
    })

  })