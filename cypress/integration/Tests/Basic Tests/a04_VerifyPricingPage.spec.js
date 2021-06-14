/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {PricingPage} from "../../../page-objects/PricingPage";
import {CartPage} from "../../../page-objects/CartPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Schedule and elements',()=>{
    const homePage = new HomePage()
    const pricingPage = new PricingPage()
    const commons = new Commons()
    const cartPage = new CartPage()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/

    it('Verify the Pricing page as Logged out',()=>{
        pricingPage.select_Pricing_When_Logout()
        cy.url().should('eq', 'https://stage.vivayalive.com/membership')
        cy.get('.membership-timebased > .container > :nth-child(1) > strong').should('contain','Memberships')
        cy.get('.membership-normal-type > .container > :nth-child(1) > strong').should('contain','Packages')
        cy.get('.content-other-offerings > .container > h2 > strong').should('contain','All Other Offerings')
    })

    it('Verify the Pricing Page as Logged in Guide',()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000) 
        pricingPage.select_Pricing_When_Login()
        cy.get('.membership-timebased > .container > :nth-child(1) > strong').should('contain','Memberships')
        cy.get('.membership-normal-type > .container > :nth-child(1) > strong').should('contain','Packages')
        cy.get('.content-other-offerings > .container > h2 > strong').should('contain','All Other Offerings') 


    })

    it('Verify the Pricing page as Loggedin Seeker, Free trial plan is expired',()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_Two()
        homePage.submit_Credentials()
        cy.wait(2000)
        pricingPage.select_Pricing_When_Login()
        pricingPage.select_Suscribe_Monthly_5Pack()
        cy.wait(2000)
        cy.get('.remove-button').click()
        cartPage.confirm_Remove_From_Cart()
        pricingPage.select_Pricing_When_Login()
        cy.scrollTo(0, 800)
        pricingPage.buy_5Pack_Package({force:true})
        cy.wait(2000)
        cy.get('.remove-button').click({force:true})
        cartPage.confirm_Remove_From_Cart()


    })



  })