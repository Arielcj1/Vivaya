/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {Commons} from "../../../Commons/Common"
import {Gympass} from "../../../page-objects-admin/Gympass"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Events Creation for Gympass', ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const commons = new Commons()
    const gympass = new Gympass()

    beforeEach(()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
    })

    it('Create class for Gympass', () =>{
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(3) > .count').invoke('text').then((text)=>{
            cy.log(text)
            if(text != 1){
                dashboard.cancel_Created_Event_class()
                cy.get('#w1-success-0').should('contain', 'Event has been canceled.') 
            }
            else{
                dashboard.add_NewEvent()
                dashboard.add_Class()
                eventCreationPage.add_EventName('Class Gympass')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test Class')
                eventCreationPage.add_Custom_Number_Of_Days(2)
                eventCreationPage.custom_Start_Time(5)
                eventCreationPage.press_Add()
                cy.get('#w1-success-0').should('contain', 'Events have been created.')
                //Verify Time Of Event
                cy.wait(1000)
                cy.get('.dashboard-events > :nth-child(3) > :nth-child(4)').should('contain', '60 min')
                
            }
        })
    })

    it('Verify Event in Gympass', () =>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        gympass.select_gympass()
        gympass.select_list()
        gympass.search_event_gympass('Class Gympass')
        gympass.button_search_gympass()
        cy.get(':nth-child(7) > .label').should('contain','Connected')



    })


    it('Cancel Class Event', () =>{
        cy.wait(1000)
        //Delete Event created
        dashboard.cancel_verify_minEvents()
        cy.get('#w1-success-0').should('contain', 'Event has been canceled.')
    })

    
})