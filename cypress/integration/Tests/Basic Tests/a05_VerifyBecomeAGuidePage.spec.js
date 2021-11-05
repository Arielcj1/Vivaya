/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {BecomeAGuidePage} from "../../../page-objects/BecomeAGuidePage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Become a guide and some elements in the page',()=>{
    const homePage = new HomePage()
    const becomeAGuide = new BecomeAGuidePage()
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    it('Verify the Schedule page as Logged out',()=>{
        becomeAGuide.select_Become_A_Guide_Page()
        cy.url().should('eq', 'https://stage.vivayalive.com/become-a-guide')
        cy.get('.col-md-7 > .title').should('contain','Your new home for live-streaming yoga and wellness classes, workshops and 1-1 sessions')
        cy.get('.col-md-7 > .btn-content > .btn').should('be.visible')
        cy.get(':nth-child(2) > .col-md-5 > .box-shadow > picture > .lazy').should('be.visible')
        cy.get('.box-shadow > .btn-content > .btn').should('be.visible')
        cy.get(':nth-child(3) > .col-md-5 > .box-shadow > picture > .lazy').should('be.visible')
        cy.get('.container > .title').should('contain','FAQs')
        //signature
        cy.get('.signature > img').should('be.visible')
        cy.get('.guide-description > .btn-content > .btn').should('be.visible')





          
          
    })




  })