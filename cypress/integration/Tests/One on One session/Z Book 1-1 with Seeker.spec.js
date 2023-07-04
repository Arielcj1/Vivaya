/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {GuidesPage} from "../../../page-objects/GuidesPage"
import {Commons} from "../../../Commons/Common";
import {EventDetailPage} from "../../../page-objects/EventDetailPage"
import {SchedulePage} from "../../../page-objects/SchedulePage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Booking Event from Guide', ()=> {
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const commons = new Commons()
    const guidesPage = new GuidesPage()
    const eventDetailPage = new EventDetailPage()
    const schedulePage = new SchedulePage()                 


    beforeEach(()=>{
        
        commons.open_Web_Site()
        cy.wait(4000)
        
    })


    it('Book and cancel an event from Seeker', ()=>{
        homePage.select_Login()
        commons.set_Seeker_Credentials_One()
        homePage.submit_Credentials()
        cy.wait(2000)
        guidesPage.select_Guide_Tab_when_Login()
        guidesPage.perform_a_Search('manu rex')
        cy.wait(3000)
        cy.get('.img').click()
        //buy one to one
        //select date
        cy.get('.offset-xl-0').contains('31').click({force:true})
        cy.wait(200)
        cy.get('#oneononebookingform-offer').select('Power Yoga - 60 min - 60$')
        cy.wait(300)
        cy.get('#time_content_one_one > h2.text-center').should('contain','Select your start time')
        //select time
        cy.get(':nth-child(16) > .btn').click({force:true})
        cy.wait(300)

        //book
        cy.get('#oneone-btn-submit').click({force:true})
        cy.get('.col-md-12 > .btn').click({force:true})
        cy.get('#stripe-form-submit').click({force:true})
        //confirm
        cy.get('.order-summary').should('contain','Purchase Confirmation')
        cy.get('a > .btn').click()
        //Cancel
        cy.get('#seeker_dashboard_events_oneone').contains('Cancel').click({force:true})
        cy.get('.btn-success').click({force:true})
        cy.get('#w3-success-0').should('contain','Event has been canceled.')
    })

})