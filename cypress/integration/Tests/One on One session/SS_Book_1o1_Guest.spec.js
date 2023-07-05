/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Commons} from "../../../Commons/Common"
import { GuidesPage } from "../../../page-objects/GuidesPage";
import { EventsPage } from "../../../page-objects-admin/EventsPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Booking 1-1 session with Guest', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()
    const guidePage = new GuidesPage()
    const eventsPage = new EventsPage()

    beforeEach(()=>{
        commons.open_Web_Site()
        
    })

    it('Booking 1-1 session with a guest', () => {
        cy.wait(1000)
        guidePage.select_Guide_Tab()
        guidePage.perform_a_Search('Manu Rex')
        cy.wait(3000)
        cy.get('.img-circle').should('be.visible')
        cy.get('.img-circle').click({force:true})

        //select date
        cy.get('.offset-xl-0').contains('29').click({force:true})
        cy.wait(200)

        cy.get('#oneononebookingform-offer').select('Power Yoga - 60 min - 60$')
        cy.wait(1000)
        //Validate little description of the event
        cy.get(':nth-child(1) > .btn > span').click()   // Select the first available time
        cy.get(':nth-child(1) > strong').should('contain', 'Start Date/Time:')
        cy.get(':nth-child(2) > strong').should('contain', 'End Date/Time:')
        cy.get(':nth-child(3) > strong').should('contain', 'Duration:')
        cy.get(':nth-child(4) > strong').should('contain', 'Price:')

        cy.get('#oneone-btn-submit').click()
        //Validate little description of the event
        cy.get('.col-md-12 > h1').should('contain', 'Book 1-1 SESSION')
        cy.get('.col-md-12 > :nth-child(3) > strong').should('contain','Start Date/Time:')
        cy.get('.col-md-12 > :nth-child(4) > strong').should('contain','Duration:')
        cy.get(':nth-child(5) > strong').should('contain','Price:')

        cy.get('.position-relative > .btn').click()   //click on Buy Now button
        //Guest information
        cy.get('.title').should('contain', 'Book 1-1 SESSION')
        cy.get('#guestprebuyeventform-first_name').type('Guest')
        cy.get('#guestprebuyeventform-last_name').type('One One')
        cy.get('#guestprebuyeventform-email').type('guestuser1o1@automa.com')
        
        cy.get('.col-8 > h4').should('contain','1-1 Session')
        cy.get('.col-8 > :nth-child(2)').should('contain','Guide: manu rex')
        cy.get('.col-8 > :nth-child(3)').should('contain','Power Yoga')
        cy.get(':nth-child(4) > strong').should('contain','Start Date/Time:')
        cy.get(':nth-child(5) > strong').should('contain','Duration:')
        //Card information
        cy.get('.n-group > .form-control').type('Guest 1o1 Card')
        cy.get(':nth-child(2) > .input-group > .form-control').type('4242424242424242')
        cy.get('.expiration-date > .form-group > .form-control').type('0525')
        cy.get('.security-code > .form-group > .input-group > .form-control').type('1234')
        cy.get('#stripe-form-submit').click()

        cy.get('.logoVivaya').should('be.visible')
        cy.wait(1000)
        cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.wait(1000)
        cy.get('#w3-success-0').should('contain','Your 1-1 Session has been booked successfully')
    })


    it('Verify that the 1-1 session class was created in the guide dashboard', () => {
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(1000)
        cy.get('#guide_dashboard_events_oneone > .col-lg-4 > :nth-child(1)').should('be.visible')
        //cy.get(':nth-child(1) > h4 > a')
        cy.wait(1000)
    })

    it('Delete 1-1 Session events from Admin', () => {
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()

        eventsPage.select_Events_Option()
        eventsPage.select_Events_List()
        cy.get('#eventsearch-guidename').type('manu')
        cy.get('#eventsearch-name').type('1-1 Session')
        cy.get('.box-footer > .btn').click()
        cy.wait(2000)
        cy.xpath('/html/body/div[1]/div/section[2]/div/div/div/div/div[3]/div/table/tbody/tr/td[10]/a[3]/span').click()
        cy.get('#w2-success').should('contain','Event has been canceled')
    })
})