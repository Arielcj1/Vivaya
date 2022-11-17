/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {SchedulePage } from "../../../page-objects/SchedulePage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Tests to confirm the correct rediection to Schedule and elements',()=>{
    const homePage = new HomePage()
    const schedulePage = new SchedulePage()
    const commons = new Commons()

    beforeEach(()=>{
        
        commons.open_Web_Site()
        //cy.wait(4000)
        
    })

    after(()=>{
        homePage.logout_Account()
    
    })

    it('Verify the Schedule page as Logged out',()=>{
        schedulePage.select_Schedule_Tab_When_Logout()
        cy.get('#mainNav > :nth-child(2) > a').click({force:true})
        cy.get('#w1 > [href="/schedule"]').click()
        cy.url().should('eq', 'https://stage.vivayalive.com/schedule')
    })

    it('Verify the Schedule Page as Logged in user',()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000) 
        schedulePage.select_Schedule_Tab_When_Login()
        cy.get('#mainNav > :nth-child(1) > a').click({force:true})
        cy.get('[href="/schedule"]').click()
        cy.url().should('eq', 'https://stage.vivayalive.com/schedule')   

    })



  })