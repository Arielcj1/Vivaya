/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Commons} from "../../../Commons/Common"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Verify Buttons for "Sign Up" ', ()=>{
    const homePage = new HomePage()
    const commons = new Commons()
   
    beforeEach(()=>{
        
        commons.open_Web_Site()
        homePage.select_freeTrial()
        
    })

   
    it('Verify the Button of "Sign Up with google"',()=>{
        cy.get(':nth-child(1) > .auth-link > .auth-icon').should('be.visible')
        
    })

    it('Verify the Button of "Sign Up with Facebook"',()=>{
        cy.get(':nth-child(2) > .auth-link > .auth-icon').should('be.visible')
        
    })

    it('Verify the Button of "Sign Up with Apple"',()=>{
        cy.get('[style=" padding-right: 8%; padding-left: 8%; position: absolute; box-sizing: border-box; width: 100%; height: 100%;"]').should('be.visible')
        
    })

})