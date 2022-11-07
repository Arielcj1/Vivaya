/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Events duplicate creation', ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const commons = new Commons()

    beforeEach(()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        //dashboard.go_to_Dashboard_From_Menu()
    })

    it('Create an Event and Duplicate the event', () => {
                //dashboard.add_NewEvent()
                dashboard.add_Class()
                eventCreationPage.add_EventName('Class1')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test Class')
                eventCreationPage.add_Custom_Number_Of_Days(2)
                eventCreationPage.custom_Start_Time(5)
                eventCreationPage.press_Add()
                cy.wait(2000)
                //Go to Upcoming Events
                cy.get("[href='/dashboard/upcoming']").click({force:true})
                cy.wait(500)
                //duplicate event
                cy.get('#w0 > table > tbody > tr > td:nth-child(7)').click({ multiple: true})
                eventCreationPage.add_Custom_Number_Of_Days(4)
                eventCreationPage.press_Add()
                cy.wait(5000)
                
                
                for (let i = 0; i<2; i++){
                    cy.xpath("//*[contains(text(), 'Cancel Event')]").eq(0).click({ multiple: true}).should('not.exist')
                    cy.get('.btn-success').click()
                }                
                
    })    
})