/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Elements verification in responsive mode', ()=>{

    const commons = new Commons()

    context('Iphone 12Pro resolution', () => {
        
        beforeEach(() => {
          
          cy.viewport(390, 844)
          commons.open_Web_Site()
        })

        it('Verify Elements in Home page', ()=>{
            cy.get('.brand').should('exist').and('be.visible')
            cy.get('.nav-icons > .btn')
            cy.get('h1').should('be.visible').and('have.text', 'Meet VIVAYA, Your New Home for Live-Streaming Yoga and Wellness')
            cy.get('.home-description > :nth-child(2) > span').should('be.visible').and('have.text', 'Practice LIVE Yoga, Meditation and Healing Arts with exceptional teachers across the US and worldwide')
            cy.get('.home-description > .btn').should('be.visible')
            cy.get('.player-skin').should('be.visible')
            cy.get('.homepage-offerings').scrollIntoView()
            cy.get('.homepage-offerings').should('be.visible').and('contain.text','What We Offer')
            cy.get('.schedule-list-event > .container').should('be.visible').and('contain.text','Upcoming Classes')
            cy.get('.testimonials-container > .container').should('be.visible').and('contain.text','Testimonials')
            cy.get('.homepage-guides > .container').scrollIntoView()
            cy.get('.homepage-guides > .container').should('be.visible').and('contain.text','Explore Our Guides')
            cy.get('.col-sm-8').should('be.visible').and('contain.text','Become a VIVAYA Guide or Teacher')
            cy.scrollTo("bottom")
            cy.get('.footer-social > .social-links > :nth-child(1) > a').should('exist').and('be.visible')
            cy.get('.footer-social > .social-links > :nth-child(2) > a').should('exist').and('be.visible')
            cy.get('.footer-social > .social-links > :nth-child(3) > a').should('exist').and('be.visible')
            cy.get('.mobile-footer > #signup-newsletter > h3').should('be.visible').and('contain.text','Sign up for our VIVAYA Newsletter')
            cy.get('#w2 > .field-subscribeform-firstname > #subscribeform-firstname').should('be.visible')
            cy.get('#w2 > .field-subscribeform-lastname > #subscribeform-lastname').should('be.visible')
            cy.get('#w2 > .field-subscribeform-lastname > #subscribeform-lastname').should('be.visible')
            cy.get('#w2 > .field-subscribeform-lastname > #subscribeform-lastname').should('be.visible')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(1) > a').should('be.visible').and('have.text','About')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(2) > a').should('be.visible').and('have.text','FAQ')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(3) > a').should('be.visible').and('have.text','Become a Guide')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(4) > a').should('be.visible').and('have.text','Workshops')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(5) > a').should('be.visible').and('have.text','Seminars')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(6) > a').should('be.visible').and('have.text','Blog')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(7) > a').should('be.visible').and('have.text','Contact')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(8) > a').should('be.visible').and('have.text','Privacy Policy')
            cy.get('.menu-mobile-footer-part > :nth-child(1) > #footernav > :nth-child(9) > a').should('be.visible').and('have.text','Terms & Conditions')
        })
    })

})