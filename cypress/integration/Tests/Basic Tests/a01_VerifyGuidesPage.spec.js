/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {GuidesPage } from "../../../page-objects/GuidesPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Schedule and elements',()=>{
    const homePage = new HomePage()
    const guidesPage = new GuidesPage()
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/

    it('Verify the Schedule page as Logged out',()=>{
        guidesPage.select_Guide_Tab_when_Logout()
        cy.url().should('eq', 'https://stage.vivayalive.com/guides')
    })

    it('Verify the Schedule Page as Logged in user',()=>{
        homePage.select_Login()
        //homePage.fill_Email('manu@guidetester.com')
        //homePage.fill_Password('perrodelmal')
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000) 
        guidesPage.select_Guide_Tab_when_Login()
        cy.url().should('eq', 'https://stage.vivayalive.com/guides')   

    })



  })