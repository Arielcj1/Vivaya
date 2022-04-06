/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {EventsPage} from "../../../page-objects-admin/EventsPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Delete Free Events created',()=>{
    const commons = new Commons()
    const eventsPage = new EventsPage()
    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    it('Delete a Free Public Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        //eventsPage.find_Element_List_Events('3', 'Free public Event') // option 3 is used for elimination
        eventsPage.find_Event('Free public Event', '3')
        cy.get('#w2-success').should('contain','Event has been canceled')
    })

    it('Delete a Free Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        eventsPage.find_Event('Free Event', '3') // option 3 is used for elimination
        cy.get('#w2-success').should('contain','Event has been canceled')
    })
})
