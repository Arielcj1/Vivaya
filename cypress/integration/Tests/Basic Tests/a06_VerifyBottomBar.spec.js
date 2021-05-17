/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {BottomBar} from "../../../page-objects/BottomBar";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Schedule and elements',()=>{
    const homePage = new HomePage()
    const bottomBar = new BottomBar()
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    it('Verify About Page',()=>{
        cy.scrollTo('bottom')
        bottomBar.select_About_Link()
        cy.url().should('eq', 'https://stage.vivayalive.com/about')
        cy.get('#banner').should('be.visible')
        cy.get('.orange-text-color').should('contain', 'VIVAYA is the first interactive live-streaming Yoga and Wellness Center to share a vast array of holistic practices like yoga, meditation, nutrition, healing arts and coaching.' )
        cy.get('.about-page-jumbotron > picture > .lazy').should('be.visible')
        cy.get(':nth-child(2) > .col-md-offset-2 > picture > .lazy').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > picture > .lazy').should('be.visible')
        cy.get(':nth-child(5) > .col-md-offset-2 > picture > .lazy').should('be.visible')
        cy.get(':nth-child(5) > :nth-child(2) > picture > .lazy').should('be.visible')
    })

    it('Verify the FAQ link',()=>{
        cy.scrollTo('bottom')
        bottomBar.select_FAQ()
        cy.url().should('eq', 'https://stage.vivayalive.com/faqs')
        cy.get('.text-center').should('contain', 'FAQs')
    })

    it('Verify the Become a Guide Link',()=>{
        cy.scrollTo('bottom')
        bottomBar.select_BecomeAGuide_Link()
        cy.url().should('eq', 'https://stage.vivayalive.com/become-a-guide')
        cy.get('.col-md-9 > .text-blue').should('contain', 'YOUR NEW HOME FOR LIVE-STREAMING YOGA AND WELLNESS CLASSES, WORKSHOPS AND 1-1 SESSIONS')
        cy.get('.bag-button > .btn').should('be.visible')
        cy.get('.become-list > h2.text-center').should('contain', 'We created VIVAYA for exceptional yogis, teachers and healers like you and we would be honored to have you on board!')
        cy.get('.container > h2.text-center').should('contain', 'FAQs')
    })

    it('Verify the Workshops link',()=>{
        cy.scrollTo('bottom')
        bottomBar.select_Worshops_Link()
        cy.url().should('eq', 'https://stage.vivayalive.com/workshops')
        cy.get('#banner').should('contain', 'Find your next VIVAYA Workshop')
    })

    it('Verify the Seminars link',()=>{
        cy.scrollTo('bottom')
        bottomBar.select_Seminars_Link()
        cy.url().should('eq', 'https://stage.vivayalive.com/seminars')
        cy.get('#banner').should('contain', 'Seminars')
    })
  })