/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { EventsPage } from "../../../page-objects-admin/EventsPage";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Events page', ()=>{
    const commons = new Commons()
    const eventsPage = new EventsPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Create a Festival Event', ()=>{
        
        eventsPage.select_Events_Option()
        eventsPage.select_Events_New()
        eventsPage.type_Event_Name('Festival Event Auto')
        eventsPage.type_Description_Event('Automation description for Festival event')
        eventsPage.type_Start_Date()
        eventsPage.type_Start_Time('7')
        eventsPage.type_End_Time('9')
        cy.get('#eventform-free_event_type').select('Festival Event')
        eventsPage.type_Event_Guide('Manu rex')

        eventsPage.type_Event_Focus('All your body')
        eventsPage.type_Event_HowToComePrepared('Auto test how to come prepared')
        cy.get('#w2-success').should('contain','Events have been created.')
    })

    
    it('Edit a Festival Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
      
        eventsPage.find_Event('Festival Event Auto', '2')
        eventsPage.type_Description_Event('Automation description for free public event Edited')
        eventsPage.type_Start_Time('6')
        eventsPage.type_End_Time('8')
        eventsPage.type_Event_Focus('All your body Edited')
        eventsPage.type_Event_HowToComePrepared('Auto test how to come prepared Edited')
        cy.get('#w2-success').should('contain','Event has been updated.')
    })

})

