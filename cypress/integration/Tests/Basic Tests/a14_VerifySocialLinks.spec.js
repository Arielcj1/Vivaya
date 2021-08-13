/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Schedule and elements',()=>{
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        
    })

    it('Verify Link to Facebook', () => {
        cy.get('.clearfix > .social-links > :nth-child(1) > a')
        .should('have.attr', 'href')
        .and('include', 'https://www.facebook.com/VIVAYALIVE/')
     })

    it('Verify Link to Twitter',()=>{
        cy.get('.clearfix > .social-links > :nth-child(2) > a')
        .should('have.attr', 'href')
        .and('include', 'https://twitter.com/vivayalive')
    })
    
    it('Verify Link to Instagram',()=>{
        cy.get('.clearfix > .social-links > :nth-child(3) > a')
        .should('have.attr', 'href')
        .and('include', 'https://www.instagram.com/vivayalive/')
    })

      })