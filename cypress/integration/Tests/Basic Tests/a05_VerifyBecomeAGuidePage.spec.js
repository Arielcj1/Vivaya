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
        cy.get('.col-md-9 > .text-blue').should('contain', 'YOUR NEW HOME FOR LIVE-STREAMING YOGA AND WELLNESS CLASSES, WORKSHOPS AND 1-1 SESSIONS')
        cy.get('.bag-button > .btn').should('be.visible')
        cy.get('.become-list > h2.text-center').should('contain', 'We created VIVAYA for exceptional yogis, teachers and healers like you and we would be honored to have you on board!')
        cy.get('.container > h2.text-center').should('contain', 'FAQs')
    })




  })