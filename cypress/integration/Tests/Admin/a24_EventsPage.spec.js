/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {EventsPage} from "../../../page-objects-admin/EventsPage"
import {Dashboard} from "../../../page-objects/Dashboard"
import { HomePage } from "../../../page-objects/Home";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Events page', ()=>{
    const commons = new Commons()
    const eventsPage = new EventsPage()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify all elements within the Events page',()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        //Verify elements in the Events page
        cy.get('h1').should('contain', 'Events')
        cy.get(':nth-child(1) > .form-group > .control-label').should('have.text','Guide Name')
        cy.get('#eventsearch-guidename').should('be.visible')
        cy.get(':nth-child(2) > .form-group > .control-label').should('have.text','Event Name')
        cy.get('#eventsearch-name').should('be.visible')
        cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','From Date')
        cy.get('#eventsearch-fromdate').should('be.visible')
        cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','To Date')
        cy.get('#eventsearch-todate').should('be.visible')
        cy.get(':nth-child(5) > .form-group > .control-label').should('have.text','Status')
        cy.get('#eventsearch-status').should('be.visible')
        cy.get(':nth-child(6) > .form-group > .control-label').should('have.text','Zoom Status')
        cy.get('#eventsearch-zoom_status').should('be.visible')
        cy.get('.box-footer > .btn').should('be.visible').and('have.text', 'Search')
        cy.get(':nth-child(3) > .box-title').should('be.visible').and('have.text', 'List')

        //Verify List Elements
        cy.get('tr > :nth-child(1) > a').should('be.visible').and('have.text', 'ID')
        cy.get('tr > :nth-child(2) > a').should('be.visible').and('have.text', 'Event Name')
        cy.get('thead > tr > :nth-child(3)').should('be.visible').and('have.text', 'Record')
        cy.get('thead > tr > :nth-child(4)').should('be.visible').and('have.text', 'Guide Name')
        cy.get('tr > :nth-child(5) > a').should('be.visible').and('have.text', 'Start Date')
        cy.get('tr > :nth-child(6) > a').should('be.visible').and('have.text', 'Status')
        cy.get('tr > :nth-child(7) > a').should('be.visible').and('have.text', 'Zoom Status')



    })

    it('Create an Event from Web, locate and Delete from Admin',()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()

        dashboard.add_NewEvent()
        dashboard.add_Class()
        eventCreationPage.add_EventName('Super Event')
        cy.wait(2000)
        eventCreationPage.add_Description('This is a Test Class')
        eventCreationPage.add_Custom_Number_Of_Days(5)
        eventCreationPage.custom_Start_Time(5)
        eventCreationPage.press_Add()
        cy.get('#w0-success-0').should('contain', 'Events have been created.')

        //Go to Admin, locate and delete
        commons.open_Admin_Site()
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        eventsPage.type_EventName_To_Search('Super Event')
        eventsPage.press_Search_Button()
        cy.wait(2000)
        //Delete the event and verify is not longer available
        cy.xpath('//*[@id="w1"]/table/tbody/tr/td[8]/a[3]/span').click()
        eventsPage.type_EventName_To_Search('Super Event')
        eventsPage.press_Search_Button()
        cy.get('#w1 > table > tbody > tr > td > div').should('be.visible').and('contain.text', 'No results found.')

        

    })


    it('Create a Free Public Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_New()
        eventsPage.type_Event_Name('Free public Event')
        eventsPage.type_Description_Event('Automation description for free public event')
        eventsPage.type_Start_Date()
        eventsPage.type_Start_Time('7')
        eventsPage.type_End_Time('9')
        eventsPage.type_Event_Guide('Manu rex')
        eventsPage.type_Event_Focus('All your body')
        eventsPage.type_Event_HowToComePrepared('Auto test how to come prepared')
        cy.get('#w2-success').should('contain','Events have been created.')
    })

    
    it('Edit a Free Public Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        //eventsPage.find_Element_List_Events('2', 'Free public Event') // option 2 is used for edition
        eventsPage.find_Event('Free public Event', '2')
        eventsPage.type_Description_Event('Automation description for free public event Edited')
        eventsPage.type_Start_Time('6')
        eventsPage.type_End_Time('8')
        eventsPage.type_Event_Focus('All your body Edited')
        eventsPage.type_Event_HowToComePrepared('Auto test how to come prepared Edited')
        cy.get('#w2-success').should('contain','Event has been updated.')
    })

    it('Create a Free Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_New()
        eventsPage.type_Event_Name('Free Event')
        eventsPage.type_Description_Event('Automation description for free event')
        eventsPage.type_Start_Date()
        eventsPage.type_Start_Time('7')
        eventsPage.type_End_Time('9')
        eventsPage.select_Free_Event_Type()
        eventsPage.type_Event_Guide('Manu rex')
        eventsPage.type_Event_Focus('All your body')
        eventsPage.type_Event_HowToComePrepared('Auto test how to come prepared')
        cy.get('#w2-success').should('contain','Events have been created.')
    })

    it('Edit a Free Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        eventsPage.find_Event('Free Event', '2') // option 2 is used for edition
        eventsPage.type_Description_Event('Automation description for free event Edited')
        eventsPage.type_Start_Time('6')
        eventsPage.type_End_Time('8')
        eventsPage.type_Event_Focus('All your body Edited')
        eventsPage.type_Event_HowToComePrepared('Auto test how to come prepared Edited')
        cy.get('#w2-success').should('contain','Event has been updated.')
    })
})

