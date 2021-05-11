/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Verify the Referral Link and Popup', ()=>{
    const homePage = new HomePage()
    const dashBoard = new Dashboard()
    const commons = new Commons()
   
    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/

    it('Verify the Referral Popup',()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()

        dashBoard.select_My_Referral_From_Menu()
        cy.get('#modal-referral').should('contain.text', 'Refer a friend, get $10!')
        cy.get('#modal-referral').should('contain.text', 'Invite your friends and family to practice with you at VIVAYA. You receive $10 for every new seeker referral.*')
        cy.get('#modal-referral').should('contain.text', '*You will receive a $10 credit for every successful referral. This credit will be added to your seeker account and can be applied toward your next VIVAYA purchase.  Successful referral requires that the new seeker makes their first VIVAYA purchase. Multiple referrals are possible.')
        cy.get('.field-btn > .btn').should('be.visible')

        cy.get('.col-md-7 > .nav > :nth-child(2) > a').click() //Verify Facebook button in the modal
        cy.get('#r-share-facebook').should('be.visible')
        
        cy.get('.col-md-7 > .nav > :nth-child(3) > a').click() //Verify Twitter button in the modal
        cy.get('#r-share-twitter').should('be.visible')
    })
})