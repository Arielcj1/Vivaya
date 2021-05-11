/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {HomePage} from "../../../page-objects/Home"
import {FirstResponderPage} from "../../../page-objects/FirstResponderPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Schedule and elements',()=>{
    const firstResponderPage = new FirstResponderPage()
    const commons = new Commons()
    const homePage = new HomePage()


    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/

    it('Verify the First Responder page as Logged out',()=>{
        firstResponderPage.select_FirstResponders_When_LoggedOut()
        cy.url().should('eq', 'https://stage.vivayalive.com/first-responders')
        cy.get('.free-months > h2').should('contain', 'Our Gift of Gratitude to First Responders, Healthcare and Emergency Workers')
        cy.get('.free-months > :nth-child(3)').should('contain', 'VIVAYA is offering 2 FREE months of Unlimited Access to all VIVAYA Classes for First Responders, Healthcare and Emergency Workers.')
        firstResponderPage.select_Register_Button()
        //cy.url().should('eq','https://stage.vivayalive.com/signup/number?isFirstResponder=1')
        //cy.get('#banner > div > h1').should('contain', 'Welcome to VIVAYA')
       
    })

    it('Verify the First Responder Page as Logged in Guide',()=>{
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000) 
        firstResponderPage.select_FirstResponders_When_LogIn()
        cy.url().should('eq', 'https://stage.vivayalive.com/first-responders')   
        cy.get('.free-months > h2').should('contain', 'Our Gift of Gratitude to First Responders, Healthcare and Emergency Workers')
        cy.get('.free-months > :nth-child(3)').should('contain', 'VIVAYA is offering 2 FREE months of Unlimited Access to all VIVAYA Classes for First Responders, Healthcare and Emergency Workers.')
        firstResponderPage.select_Register_Button()
        //cy.get('#appModal > div > div').should('be.visible')


    })

    it('Verify the First Responder Page as Logged in Seeker',()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000) 
        firstResponderPage.select_FirstResponders_When_LogIn()
        cy.url().should('eq', 'https://stage.vivayalive.com/first-responders')   
        cy.get('.free-months > h2').should('contain', 'Our Gift of Gratitude to First Responders, Healthcare and Emergency Workers')
        cy.get('.free-months > :nth-child(3)').should('contain', 'VIVAYA is offering 2 FREE months of Unlimited Access to all VIVAYA Classes for First Responders, Healthcare and Emergency Workers.')
        firstResponderPage.select_Register_Button()
        //cy.get('#appModal > div > div').should('be.visible')
    })



  })