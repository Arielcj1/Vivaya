/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {MembershipPage} from "../../../page-objects/MembershipPage"
import {Commons} from "../../../Commons/Common"
import {CartPage} from "../../../page-objects/CartPage"



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Buy Plans from membership', ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const membershipPage = new MembershipPage()
    const cartPage = new CartPage()
    const commons = new Commons()

    beforeEach(()=>{
        commons.open_Web_Site()
        cy.wait(4000)
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
    })
    
    it('Buy Monthly 3 Pack Membership', () => {  
       cy.wait(3000) 
       membershipPage.select_MShip_Tab()
       membershipPage.select_Subscribe_3Pack()
       cy.wait(3000)
       cy.get('#checkout-form > div:nth-child(2) > div:nth-child(2) > h4').contains('Monthly 3 Pack Membership').should('be.visible')
       cy.get('.remove-button').click()
       cartPage.confirm_Remove_From_Cart()
       cy.get('#w1-success-0').contains('Item has been removed from cart.')
    })

    it('Buy Monthly 5 Pack Membership', () => {  
        cy.wait(3000) 
        membershipPage.select_MShip_Tab()
        membershipPage.select_Subscribe_5Pack()
        cy.wait(3000)
        cy.get('#checkout-form > div:nth-child(2) > div:nth-child(2) > h4').contains('Monthly 5 Pack Membership').should('be.visible')
        cy.get('.remove-button').click()
        cartPage.confirm_Remove_From_Cart()
        cy.get('#w1-success-0').contains('Item has been removed from cart.')
     })
    
     it('Buy Monthly Unlimited Membership', () => {  
        cy.wait(3000) 
        membershipPage.select_MShip_Tab()
        membershipPage.select_Monthly_Unlimited()
        cy.wait(3000)
        cy.get('.product > :nth-child(2) > h4').contains('MONTHLY UNLIMITED MEMBERSHIP').should('be.visible')
        cy.get('.remove-button').click()
        cartPage.confirm_Remove_From_Cart()
        cy.get('#w1-success-0').contains('Item has been removed from cart.')
     })

     it('Buy Annual Unlimited Membership', () => {  
        cy.wait(3000) 
        membershipPage.select_MShip_Tab()
        membershipPage.select_Annual_Unlimited()
        cy.wait(3000)
        cy.get('.product > :nth-child(2) > h4').contains('ANNUAL UNLIMITED MEMBERSHIP').should('be.visible')
        cy.get('.remove-button').click()
        cartPage.confirm_Remove_From_Cart()
        cy.get('#w1-success-0').contains('Item has been removed from cart.')
     })

     it('Buy 1 class', () => {  
        cy.wait(3000) 
        membershipPage.select_MShip_Tab()
        cy.scrollTo(0,300)
        membershipPage.select_Buy_1Class()
        cy.wait(3000)
        cy.get('.product > :nth-child(2) > h4').contains('1 CLASS').should('be.visible')
        cy.get('.remove-button').click()
        cartPage.confirm_Remove_From_Cart()
        cy.get('#w1-success-0').contains('Item has been removed from cart.')
     })

     it.skip('Buy 5 Package', () => {  
        cy.wait(3000) 
        membershipPage.select_MShip_Tab()
        cy.scrollTo(0,300)
        membershipPage.select_Buy_5Pack()
        cy.wait(3000)
        cy.get('.product > :nth-child(2) > h4').contains('5 PACK').should('be.visible')
        cy.get('.remove-button').click()
        cartPage.confirm_Remove_From_Cart()
        cy.get('#w1-success-0').contains('Item has been removed from cart.')
     })

     it.skip('Buy 10 Package', () => {  
        cy.wait(3000) 
        membershipPage.select_MShip_Tab()
        cy.scrollTo(0,300)
        membershipPage.select_Buy_10Pack()
        cy.wait(3000)
        cy.get('.product > :nth-child(2) > h4').contains('10 PACK').should('be.visible')
        cy.get('.remove-button').click()
        cartPage.confirm_Remove_From_Cart()
        cy.get('#w1-success-0').contains('Item has been removed from cart.')
     })
})