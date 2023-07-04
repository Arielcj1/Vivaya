/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {Commons} from "../../../Commons/Common"
import { OneoOneAvailability } from "../../../page-objects/OneoOneAvailability";
import common from "mocha/lib/interfaces/common";
import { GuidesPage } from "../../../page-objects/GuidesPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Booking 1-1 session with Guest', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()
    const guidePage = new GuidesPage()

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
        cy.get('#oneononebookingform-offer').select('Power Yoga - 60 min - 60$')
        cy.wait(1000)
        cy.get(':nth-child(1) > .btn > span').click()   // Select the first available time
        cy.get(':nth-child(1) > strong').should('contain', 'Start Date/Time:')
        cy.get(':nth-child(2) > strong').should('contain', 'End Date/Time:')
        cy.get(':nth-child(3) > strong').should('contain', 'Duration:')
        cy.get(':nth-child(4) > strong').should('contain', 'Price:')

        cy.get('#oneone-btn-submit').click()

        cy.get('.col-md-12 > h1').should('contain', 'Book 1-1 SESSION')
        cy.get('.col-md-12 > :nth-child(3) > strong').should('contain','Start Date/Time:')
        cy.get('.col-md-12 > :nth-child(4) > strong').should('contain','Duration:')
        cy.get(':nth-child(5) > strong').should('contain','Price:')

        cy.get('.position-relative > .btn').click()   //click on Buy Now button

        cy.get('.title').should('contain', 'Book 1-1 SESSION')
        cy.get('#guestprebuyeventform-first_name').type('Guest')
        cy.get('#guestprebuyeventform-last_name').type('One One')
        cy.get('#guestprebuyeventform-email').type('guestuser1o1@automa.com')

        cy.get('.col-8 > h4').should('contain','1-1 Session')
        cy.get('.col-8 > :nth-child(2)').should('contain','Guide: manu rex')
        cy.get('.col-8 > :nth-child(3)').should('contain','Power Yoga')
        cy.get(':nth-child(4) > strong').should('contain','Start Date/Time:')
        cy.get(':nth-child(5) > strong').should('contain','Duration:')

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
})