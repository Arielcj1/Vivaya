/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {EventsPage} from "../../../page-objects-admin/EventsPage"


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

    it('Create a Free Public Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_New()
        eventsPage.type_Event_Name('Free public Event')
        eventsPage.type_Description_Event('Automation description for free public event')
        eventsPage.type_Start_Date()
        eventsPage.type_Start_Time('7')
        eventsPage.type_End_Time('9')
        eventsPage.type_Event_Guide('ariel guide')
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

    it('Delete a Free Public Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        //eventsPage.find_Element_List_Events('3', 'Free public Event') // option 3 is used for elimination
        eventsPage.find_Event('Free public Event', '3')
        cy.get('#w2-success').should('contain','Event has been canceled')
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
        eventsPage.type_Event_Guide('ariel guide')
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

    it('Delete a Free Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        eventsPage.find_Event('Free Event', '3') // option 3 is used for elimination
        cy.get('#w2-success').should('contain','Event has been canceled')
    })
})
