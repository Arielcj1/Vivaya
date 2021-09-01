/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {EventsPage} from "../../../page-objects-admin/EventsPage"
import {Dashboard} from "../../../page-objects/Dashboard"
import { HomePage } from "../../../page-objects/Home";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Negative scenarios of Event from Admi', ()=>{
    const commons = new Commons()
    const eventsPage = new EventsPage()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })

    it('Verify validation of "Create Event" from Admin', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_New()
        cy.wait(500)
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-eventform-name > .help-block').should('contain','Name cannot be blank.')
        cy.get('.field-eventform-body > .help-block').should('contain','Body cannot be blank.')
        cy.get('.field-eventform-startdate > .help-block').should('contain','Start Date cannot be blank.')
        cy.get('.field-eventform-guide_id > .help-block').should('contain','Guide Id cannot be blank.')

    })

    it('Verify validation of "Events" with dates', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Events_New()
        eventsPage.type_Event_Name('Free public Event')
        eventsPage.type_Description_Event('Automation description for free public event')
        eventsPage.type_Start_Date_validarion()
        eventsPage.type_Start_Time('0')
        eventsPage.type_End_Time('0')
        eventsPage.type_Event_Guide('Manu rex')
        eventsPage.type_Event_Focus('All your body')
        eventsPage.type_Event_HowToComePrepared('Auto test how to come prepared')
        cy.get('.field-eventform-starttime > .help-block').should('contain','Event duration cannot be shorter than 1 hour')
        cy.get('#workshop-end-time > .form-group > .help-block').should('contain','Event duration cannot be shorter than 1 hour')


    })


    it('Verify validation of "Events" with "Add Gallery"', ()=>{
        eventsPage.select_Events_Option()
        eventsPage.select_Add_gallery()
        cy.wait(500)
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-eventgalleryform-name > .help-block').should('contain','Name cannot be blank.')




    })


})

