/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Events Creation', ()=>{
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

    it('Create a recurrent Daily Class', () => { 
        dashboard.verify_events()
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(3)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Daily()
        eventCreationPage.press_Add()
        cy.get('#w1-success-0').should('contain', 'Events have been created.')
    })

    it('Delete recurrent Daily Class',()=>{
        cy.wait(1500)
        dashboard.cancel_Several_Events_AtOnce()
        cy.get('#w1-success-0').should('contain','Event has been canceled.')
    })

    it('Create a recurrent Weekly Class', () => { 
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(4)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Weekly()
        eventCreationPage.press_Add()
        cy.get('#w1-success-0').should('contain', 'Events have been created.')
    })

    it('Delete recurrent Weekly Class',()=>{
        cy.wait(1000)
        dashboard.cancel_Several_Events_AtOnce()
    })

    it('Create a Weekly Class by days', () => { 
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(4)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Weekday()
        eventCreationPage.select_Weekday_Friday()
        eventCreationPage.select_Weekday_Monday()
        eventCreationPage.select_Weekday_Saturday()
        eventCreationPage.press_Add()
        cy.get('#w1-success-0').should('contain', 'Events have been created.')
    })

    it('Delete recurrent Weekly by days Class',()=>{
        cy.wait(1000)
        dashboard.cancel_Several_Events_AtOnce()
    })

    it('Create Repeated class Bulk', () => { 
        dashboard.verify_events()
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(3)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Daily()
        eventCreationPage.press_Add()
        cy.get('#w1-success-0').should('contain', 'Events have been created.')
    })

    it('Edit class with bulk', () => {
        cy.wait(1500)
        dashboard.edit_Several_Events_AtOnce_bulk()
        eventCreationPage.edit_New_Start_Date(1)    
        cy.get('#w1').clear().type('11:58 PM')   //Edit hour
        cy.get('.text-center > .btn').click()    //click on the button "Update"
        cy.wait(1500)
        cy.get('#w1-success-0').should('contain','Bulk Events has been updated.')
    }) 

    it('Delete class with bulk',()=>{
        cy.wait(1500)
        dashboard.cancel_Several_Events_AtOnce_bulk()
        //cy.get('#w1-success-0').should('include.text','Events have been canceled.')
    })
})