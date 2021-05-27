/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {Dashboard} from "../../../page-objects/Dashboard"
import {HomePage} from "../../../page-objects/Home"
import {GuestPage} from "../../../page-objects-admin/GuestPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Web Page for Guest', ()=>{
    const dashboard = new Dashboard()
    const commons = new Commons()
    const homePage = new HomePage()
    const guestPage = new GuestPage()
    
    beforeEach(()=>{
      cy.clearLocalStorage()
      commons.open_Web_Site()
    })
    it('Book a Free public Event from Dashboard', ()=>{
        dashboard.select_First_FreePublicEvent()
        dashboard.free_Event_Confirmation('Guest', 'User', 'guest@user.com')
        cy.get('.title-confirmation').should('contain', 'Free Event Confirmation')
    })

    it('Verify the Guest creation in admin',()=>{
      commons.open_Admin_Site()
      guestPage.select_Guest_Option()
      guestPage.select_Guest_List()
      guestPage.make_a_Search_by_email('guest@user.com')
      cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[4]/label').should('contain', 'No')
    })

    it('Convert a Guest user to Seeker user',()=>{
      dashboard.select_First_FreePublicEvent()
      dashboard.free_event_Free_Trial()
    })

    it.skip('Book a Free Event from Dashboard', ()=>{
      dashboard.select_First_FreeEvent()
      dashboard.select_LogIn_option_from_PopUp()
      commons.set_Seeker_Credentials_One()
      homePage.submit_Credentials()
      cy.get('#w0-success-0').should('contain', 'Free event has been booked successfully')
    })
})