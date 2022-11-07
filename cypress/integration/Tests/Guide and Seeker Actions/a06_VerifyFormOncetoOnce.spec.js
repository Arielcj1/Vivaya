/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {GuidesPage} from "../../../page-objects/GuidesPage"
import {Commons} from "../../../Commons/Common";
import {EventDetailPage} from "../../../page-objects/EventDetailPage"
import {SchedulePage} from "../../../page-objects/SchedulePage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Verify form of One to One', ()=> {
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const commons = new Commons()
    const guidesPage = new GuidesPage()                


    beforeEach(()=>{
        
        commons.open_Web_Site()
        cy.wait(4000)
        
    })

    it('Verify form "one to one" from Guide profile', ()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000)
        guidesPage.select_Guide_Tab_when_Login()
        guidesPage.perform_a_Search('manu rex')
        cy.wait(3000)
        cy.get('.img').click()
        cy.scrollTo(0, 800)   
        guidesPage.Select_request_OnetoOne()
        cy.wait(1500)
        cy.get('.mheader-title').should('contain','REQUEST 1-1 SESSION')
        cy.get('#request-one-on-one-form > p').should('contain','Please select an offering and up to 3 possible dates for a 1-1 session with manu rex')
        cy.get('#requestoneononeform-offer').should('be.visible')
        cy.get(':nth-child(4) > .offset-sm-1 > .form-group > label.col-sm-12').contains('Start Date1')
        cy.get(':nth-child(4) > :nth-child(2) > .form-group > label.col-sm-12').contains('Start Time1')
        cy.get('#RequestOneOnOne').contains('REQUEST 1-1 SESSION')
    })

    it('Verify form "one to one" is sent', ()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000)
        guidesPage.select_Guide_Tab_when_Login()
        guidesPage.perform_a_Search('manu rex')
        cy.wait(3000)
        cy.get('.img').click()
        cy.scrollTo(0, 800)   
        guidesPage.Select_request_OnetoOne()
        cy.wait(1500)
        cy.get('.mheader-title').should('contain','REQUEST 1-1 SESSION')
        guidesPage.form_OnetoOne(5)
        cy.get('#w4-success-0').should('contain','The request has been sent, we will send you an email soon.')
        
    })

   

   

})