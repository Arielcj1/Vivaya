/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {GuidesPage} from "../../../page-objects/GuidesPage"
import {Commons} from "../../../Commons/Common";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Negative scenarios for Form One to One ', ()=> {
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const commons = new Commons()
    const guidesPage = new GuidesPage()                


    beforeEach(()=>{
        
        commons.open_Web_Site()
        cy.wait(4000)
        
    })

    it('Verify validation of the Form "one to one"', ()=>{
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
        cy.get('#RequestOneOnOne').click({force:true})
        cy.get('.col-sm-10 > .form-group > .col-xs-12 > .help-block').should('contain','Offer cannot be blank.')
        cy.get(':nth-child(4) > .col-sm-offset-1 > .form-group > .col-xs-12 > .help-block').should('contain','Start Date1 cannot be blank.')




        
    })

   

   

})