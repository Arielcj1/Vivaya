/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Verify creation events using "Custom Date"', ()=>{
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

    it('Create classes using Custom Date', () => { 
        dashboard.verify_events()
        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(3)
        eventCreationPage.select_Repeater_customdate()
        eventCreationPage.add_Custom_date(10)
        eventCreationPage.add_Custom_date(12)
        cy.get('#w0-success-0').should('contain', 'Events have been created.')
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(3) > .count').should('contain','3')
    })

    it('Delete classes custom date',()=>{
        cy.wait(1500)
        dashboard.cancel_Several_Events_AtOnce()
    })
})