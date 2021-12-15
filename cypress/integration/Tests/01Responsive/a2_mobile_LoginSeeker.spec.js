/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Elements verification in responsive mode for Seeker page', ()=>{

    const commons = new Commons()

    context('Iphone 12Pro resolution', () => {
        
        beforeEach(() => {
        
          cy.viewport(390, 844)
          commons.open_Web_Site()
        })

        it('Verify Elements in Seeker Dashboard after Login', ()=>{
            commons.login_As_Seeker_Mobile()
            cy.get('#header').should('contain.html', 'user-item')
            //Verify main menu options
            cy.get('.user-item').click()
            cy.get('.menu-item-expanded > .menu > :nth-child(1) > a').should('be.visible').and('contain.text', 'Dashboard')
            cy.get('.menu > :nth-child(2) > a').should('be.visible').and('contain.text', 'Refer a Friend')
            //cy.get('.menu > :nth-child(3) > a').should('be.visible').and('contain.text', 'Switch to Guide Profile')
            cy.get('.menu > :nth-child(3) > a').should('contain','Cart')
            cy.get(':nth-child(4) > form > .btn').should('be.visible').and('contain.text', 'Logout')
            cy.wait(2000)
            cy.get('.user-item').click()
            
            cy.get('.profile-box > h2').should('include.text','Auto')
            cy.get('.dashboard-credits > h3').should('be.visible').and('have.text', 'Your Membership Status:')
            cy.get('.normal-classes-wrapper > h3').should('be.visible').and('have.text', 'Your Schedule:')
            cy.get('.replay-links-wrapper > h3').scrollIntoView()
            cy.get('.seminars-wrapper > h3').should('be.visible').and('have.text', 'Your Seminars:')
            cy.get('.replay-links-wrapper > h3').should('be.visible').and('have.text', 'Your Replay Links:')
            cy.get('.quick-links > h3').should('be.visible').and('have.text', 'Quick Links')

            cy.get('.quick-links > :nth-child(2) > :nth-child(1)').should('be.visible').and('have.text', 'Class History and Replay')
            cy.get('.quick-links > :nth-child(2) > :nth-child(2)').should('be.visible').and('have.text', 'My Password')
            cy.get('.quick-links > :nth-child(2) > :nth-child(3)').should('be.visible').and('have.text', 'My Account')
            cy.get('.quick-links > :nth-child(3) > :nth-child(1)').should('be.visible').and('have.text', 'Shopping Cart')
            cy.get('.quick-links > :nth-child(3) > :nth-child(2)').should('be.visible').and('have.text', 'Contact VIVAYA')
            cy.get(':nth-child(3) > :nth-child(3) > a').should('be.visible').and('have.text', 'Payment Information')
            //cy.get('.quick-links > :nth-child(4) > :nth-child(1) > a').should('be.visible').and('have.text', 'Switch to Guide Profile')
            cy.get('#referral-status-link').should('be.visible').and('have.text', 'My Referral')

            cy.get('.col-md-9 > .your-success > h3').should('be.visible').and('contain.text', 'Your Free Trial')
            cy.get('.col-md-9 > .your-success > div > .count').contains(/^[0-9]*$/)
        })  
        
        it('Verify redirections from Hamburguer Menu in Seeker account', ()=>{
            commons.login_As_Seeker_Mobile()
            cy.wait(3000)
            cy.get('#mainNavCollapseBtn > span.menu > img').click()
            cy.get('#mainNav > :nth-child(1) > a').click()
            cy.url().should('eq', 'https://stage.vivayalive.com/schedule')
            cy.get('#mainNavCollapseBtn > span.menu > img').click()
            cy.get('#mainNav > :nth-child(2) > a').click()
            cy.url().should('eq', 'https://stage.vivayalive.com/guides')
            cy.get('#mainNavCollapseBtn > span.menu > img').click()
            cy.get('#mainNav > :nth-child(3) > a').click()
            cy.url().should('eq', 'https://stage.vivayalive.com/offerings')
            cy.get('#mainNavCollapseBtn > span.menu > img').click()
            cy.get('#mainNav > :nth-child(4) > a').click()
            cy.url().should('eq', 'https://stage.vivayalive.com/membership')
            cy.get('#mainNavCollapseBtn > span.menu > img').click()
            cy.get('#mainNav > :nth-child(5) > a').click()
            cy.url().should('eq', 'https://stage.vivayalive.com/corporate')
            cy.get('#mainNavCollapseBtn > span.menu > img').click()
            //cy.get('#mainNav > :nth-child(6) > a').click()
            //cy.url().should('eq', 'https://stage.vivayalive.com/first-responders')

        })

   })   

})