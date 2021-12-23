
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
        cy.get('.col-md-7 > .title').should('contain','Your new home for live-streaming yoga and wellness classes, workshops and 1-1 sessions')
        cy.get('.col-md-7 > .btn-content > .btn').should('be.visible')
        cy.get('.lazyloaded').should('be.visible')
        cy.get('.box-shadow > picture > .lazyload').should('be.visible')
        cy.get('.container > .title').should('contain','FAQs')
        //signature
        cy.get('.signature > img').should('be.visible')
        cy.get('.guide-description > .btn-content > .btn').should('be.visible')
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

    it('Verify the Seminars First Responders',()=>{
        cy.scrollTo('bottom')
        bottomBar.select_first_responders_link()
        cy.url().should('eq', 'https://stage.vivayalive.com/first-responders')
        cy.get('.free-months').should('be.visible')
        cy.get('.free-months > .btn').should('be.visible')
    })
  })