/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Elements verification in responsive mode for Events creation', ()=>{

    const commons = new Commons()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()

    context('Iphone 12Pro resolution', () => {
        
        beforeEach(() => {
        
          cy.viewport(390, 844)
          commons.open_Web_Site()
          commons.login_As_Guide_Mobile()
        })

        it('Verify Elements in Guide Dashboard after create a class', ()=>{
            cy.get(':nth-child(3) > .btn').click()
            cy.get('[href="/events/class/create"]').click()

            eventCreationPage.add_EventName('Class1')
            cy.wait(2000)
            eventCreationPage.add_Description('This is a Test Class')
            eventCreationPage.add_Custom_Number_Of_Days(2)
            eventCreationPage.custom_Start_Time(5)
            eventCreationPage.press_Add()
            cy.get('#w1-success-0').should('contain', 'Events have been created.')
            dashboard.cancel_event_mobile()
            cy.get('#w1-success-0').should('be.visible')

        })

        it('Verify Elements in Guide Dashboard after create a Dashboard', ()=>{
            cy.get(':nth-child(3) > .btn').click()
            cy.get('[href="/events/workshop/create"]').click()
            eventCreationPage.add_EventName('Workshop1')
            cy.wait(2000)
            eventCreationPage.add_Description('This is a Test Workshop')
            eventCreationPage.add_Custom_Number_Of_Days(2)
            eventCreationPage.add_Price('40')
            eventCreationPage.press_Add()
            cy.get('#w1-success-0').should('contain', 'Events have been created.')
            cy.get('#w1-success-0 > .close').click()
            dashboard.cancel_event_mobile()
            cy.get('#w1-success-0').should('contain', 'Event has been canceled.')

        })    

        it('Verify Elements in Guide Dashboard after create a 1-1', ()=>{
            cy.get(':nth-child(3) > .btn').click()
            cy.get('[href="/events/1-on-1/create"]').click()
            eventCreationPage.add_EventName('One-One')
                cy.wait(2000)
                eventCreationPage.add_Description('This is a Test for One on One')
                eventCreationPage.add_Custom_Number_Of_Days(3)
                eventCreationPage.custom_Start_Time(5)
                cy.get('#eventform-session_offering_id > :nth-child(1) > .custom-control-label').click({force:true})
                //cy.xpath('/html/body/div[2]/div[2]/div/div/div/form/div[11]/div/div/div[1]').click()
                //cy.xpath('/html/body/div[2]/div[2]/div/div/div/form/div[11]/div/div/div[2]').click()
                eventCreationPage.press_Add()
                cy.get('#w1-success-0').should('contain', 'Events have been created.')
                cy.get('#w1-success-0 > .close').click()
                dashboard.cancel_event_mobile()
                cy.get('#w1-success-0').should('contain', 'Event has been canceled.')


        })    


        
    })
    
})    