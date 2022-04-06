/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { EventsPage } from "../../../page-objects-admin/EventsPage";
import { GuestPage } from "../../../page-objects-admin/GuestPage";
import { SeekerPage } from "../../../page-objects-admin/SeekerPage";
import { SeekerCreation } from "../../../page-objects/SeekerCreation";



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Events page', ()=>{
    const commons = new Commons()
    const guestpage = new GuestPage()
    const seekerPage = new SeekerPage()
    const eventsPage = new EventsPage()
    var user = '2guesttest@user.com'

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Delete the Guest user created', ()=>{
        guestpage.select_Guest_Option()
        guestpage.select_Guest_List()
        guestpage.make_a_Search_by_email(user)
        guestpage.guests_Options('2') // num 2 in order to delete guest
        cy.get('#w2-success').should('be.visible')
    })

    it('Delete the Seeker created from a Guest user', ()=>{
        seekerPage.select_Seeker_Option()
        seekerPage.select_Seeker_List()
        seekerPage.type_Seeker_Email(user)
        seekerPage.select_Seeker_options('5')
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })

    it('Delete a Festival Event', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        eventsPage.find_Event('Festival Event Auto', '3') // option 3 is used for elimination
        cy.get('#w2-success').should('contain','Event has been canceled')
    })
})