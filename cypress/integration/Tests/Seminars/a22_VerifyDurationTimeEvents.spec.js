/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Verify Duration time in Events', ()=>{
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

    it('Create and Cancel Class Event with 60 min by default', () =>{
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{
            cy.log(text)
            if(text != 1){
                dashboard.cancel_Created_Event_class()
                cy.get('#w0-success-0').should('contain', 'Event has been canceled.') 
            }
            else{
                dashboard.add_NewEvent()
                dashboard.add_Class()
                eventCreationPage.add_EventName('CLASS 60')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test Class')
                eventCreationPage.add_Custom_Number_Of_Days(2)
                eventCreationPage.custom_Start_Time(5)
                eventCreationPage.press_Add()
                cy.get('#w1-success-0').should('contain', 'Events have been created.')
                //Verify Time Of Event
                cy.wait(1000)
                cy.get('.dashboard-events > :nth-child(3) > :nth-child(4)').should('contain', '60 min')
                cy.wait(1000)
                //Delete Event created
                dashboard.cancel_verify_minEvents()
                cy.get('#w1-success-0').should('contain', 'Event has been canceled.')
            }
        })
    })
    
    it('Create and Cancel Class Event with 45 min', () =>{
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{
            cy.log(text)
            if(text != 1){
                dashboard.cancel_Created_Event_class()
                cy.get('#w0-success-0').should('contain', 'Event has been canceled.') 
            }
            else{
                dashboard.add_NewEvent()
                dashboard.add_Class()
                eventCreationPage.add_EventName('CLASS 45')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test Class')
                eventCreationPage.select_duration_time('45 minutes')
                eventCreationPage.add_Custom_Number_Of_Days(2)
                eventCreationPage.custom_Start_Time(6)
                eventCreationPage.press_Add()
                cy.get('#w1-success-0').should('contain', 'Events have been created.')
                //Verify Time Of Event
                cy.wait(1000)
                cy.get('.dashboard-events > :nth-child(3) > :nth-child(4)').should('contain', '45 min')
                cy.wait(1000)
                //Delete Event created
                dashboard.cancel_verify_minEvents()
                cy.get('#w1-success-0').should('contain', 'Event has been canceled.')
            }
        })
    })

    it('Create and Cancel Class Event with 75 min', () =>{
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{
            cy.log(text)
            if(text != 1){
                dashboard.cancel_Created_Event_class()
                cy.get('#w0-success-0').should('contain', 'Event has been canceled.') 
            }
            else{
                dashboard.add_NewEvent()
                dashboard.add_Class()
                eventCreationPage.add_EventName('CLASS 75')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test Class')
                eventCreationPage.select_duration_time('75 minutes')
                eventCreationPage.add_Custom_Number_Of_Days(2)
                eventCreationPage.custom_Start_Time(7)
                eventCreationPage.press_Add()
                cy.get('#w1-success-0').should('contain', 'Events have been created.')
                //Verify Time Of Event
                cy.wait(1000)
                cy.get('.dashboard-events > :nth-child(3) > :nth-child(4)').should('contain', '75 min')
                cy.wait(1000)
                //Delete Event created
                dashboard.cancel_verify_minEvents()
                cy.get('#w1-success-0').should('contain', 'Event has been canceled.')
            }
        })
    })

    it('Create and Cancel Class Event with 90 min', () =>{
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(4) > .count').invoke('text').then((text)=>{
            cy.log(text)
            if(text != 1){
                dashboard.cancel_Created_Event_class()
                cy.get('#w1-success-0').should('contain', 'Event has been canceled.') 
            }
            else{
                dashboard.add_NewEvent()
                dashboard.add_Class()
                eventCreationPage.add_EventName('CLASS 90')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test Class')
                eventCreationPage.select_duration_time('90 minutes')
                eventCreationPage.add_Custom_Number_Of_Days(2)
                eventCreationPage.custom_Start_Time(8)
                eventCreationPage.press_Add()
                cy.get('#w1-success-0').should('contain', 'Events have been created.')
                //Verify Time Of Event
                cy.wait(1000)
                cy.get('.dashboard-events > :nth-child(3) > :nth-child(4)').should('contain', '90 min')
                cy.wait(1000)
                //Delete Event created
                dashboard.cancel_verify_minEvents()
                cy.get('#w1-success-0').should('contain', 'Event has been canceled.')
            }
        })
    })

})