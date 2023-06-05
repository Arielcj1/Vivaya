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
       // dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(3)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Daily()
        eventCreationPage.press_Add()
        cy.get('#w3-success-0').should('contain', 'Events have been created.')
    })

    it('Delete recurrent Daily Class',()=>{
        cy.wait(1500)
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[3]/div/div[2]/div[3]/div/p/a[1]').click()
        cy.wait(1000)
        cy.get('#modalBodyBulk > ul > :nth-child(2) > a').click()
        cy.get('.text-center').should('contain', 'Cancel Events')
        cy.get('#bt-cancel-bulk-events').click()
        cy.wait(1000)
        cy.get('.btn-success').click()
        cy.get('#w3-success-0').should('be.visible')
        //cy.get('.profile-box > .btn').click()
        //cy.get('h1').should('contain', 'Account Information')
        //dashboard.cancel_Several_Events_AtOnce_repeat()
    })

    it('Create a recurrent Weekly Class', () => { 
        //dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(4)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Weekly()
        eventCreationPage.press_Add()
        cy.get('#w3-success-0').should('contain', 'Events have been created.')
    })

    it('Delete recurrent Weekly Class',()=>{
        cy.wait(1500)
        //dashboard.cancel_Several_Events_AtOnce_repeat()
        cy.get('.cancel-bulk-event').click()
        cy.get('#modalBodyBulk > ul > :nth-child(2) > a').click()
        cy.get('.text-center').should('contain', 'Cancel Events')
        cy.get('#bt-cancel-bulk-events').click()
        cy.wait(1000)
        cy.get('.btn-success').click()
        cy.get('#w3-success-0').should('be.visible')
    })

    it('Create a Weekly Class by days', () => { 
        //dashboard.add_NewEvent()
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
        cy.get('#w3-success-0').should('contain', 'Events have been created.')
    })

    it('Delete recurrent Weekly by days Class',()=>{
        cy.wait(1500)
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/div[3]/div/div[2]/div[3]/div/p/a[1]').click()
        cy.wait(1000)
        cy.get('#modalBodyBulk > ul > :nth-child(2) > a').click()
        cy.get('.text-center').should('contain', 'Cancel Events')
        cy.get('#bt-cancel-bulk-events').click()
        cy.wait(1000)
        cy.get('.btn-success').click()
        cy.get('#w3-success-0').should('be.visible')
        //dashboard.cancel_Several_Events_AtOnce_repeat()
    })

    it.skip('Create class and delte using Bulk', () => { 
        dashboard.verify_events()
        //dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Class1')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.select_Repeater_Checkbox()
        eventCreationPage.add_Custom_Start_Date(3)
        eventCreationPage.add_Custom_End_Date(10)
        eventCreationPage.select_Repeater_Daily()
        eventCreationPage.press_Add()
        cy.get('#w3-success-0').should('contain', 'Events have been created.')
    })

    it.skip('Delete class with bulk',()=>{
        cy.wait(1500)
        dashboard.cancel_Several_Events_AtOnce_repeat()
        //cy.get('#w1-success-0').should('include.text','Events have been canceled.')
    })
})