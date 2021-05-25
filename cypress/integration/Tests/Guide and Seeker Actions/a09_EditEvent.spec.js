/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Events Edition from web page', ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const commons = new Commons()

    beforeEach(()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()       
    })

    /*after(()=>{
        homePage.logout_Account()
    
    })*/
    it('Create an Event', ()=>{
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a class test')
        eventCreationPage.add_Custom_Number_Of_Days(2)
        eventCreationPage.custom_Start_Time(10)
        eventCreationPage.press_Add()
        cy.get('#w0-success-0').should('contain', 'Events have been created.')
    })
    it('Edit the Event created', ()=>{
        dashboard.select_Edit_Event()
        cy.get('#eventform-startdate').clear()
        eventCreationPage.add_Custom_Number_Of_Days(4)
        eventCreationPage.press_Update_After_Edit()
        cy.get('#w0-success-0').should('contain', 'Event has been updated.')
        dashboard.cancel_Created_Event_class()
        cy.get('#w0-success-0').should('contain', 'Event has been canceled.')
    })

})     

    