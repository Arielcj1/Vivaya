/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {WhatweOfferPage } from "../../../page-objects/WhatweOfferPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Schedule and elements',()=>{
    const homePage = new HomePage()
    const whatWeOffer = new WhatweOfferPage()
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    after(()=>{
        homePage.logout_Account()
    
    })

    it('Verify the Schedule page as Logged out',()=>{
        whatWeOffer.select_WhatweOffer_When_Logout()
        cy.url().should('eq', 'https://stage.vivayalive.com/offerings')
        cy.get('.text-center > strong').should('contain','VIVAYA Offerings')
    })

    it('Verify the Schedule Page as Logged in user',()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000) 
        whatWeOffer.select_WhatweOffer_When_Login()
        cy.url().should('eq', 'https://stage.vivayalive.com/offerings') 
        cy.get('.text-center > strong').should('contain','VIVAYA Offerings')  

    })



  })