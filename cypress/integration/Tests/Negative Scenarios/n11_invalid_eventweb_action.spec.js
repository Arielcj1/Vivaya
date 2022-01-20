/// <reference types="cypress"/>

import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Negative scenarios of Event from WebSite',
{
    retries: {
      runMode: 2,
      openMode: 2,
    }
  }, ()=>{
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const commons = new Commons()

    beforeEach(()=>{
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        dashboard.go_to_Dashboard_From_Menu()
       
    })

    it('Verify validation the form for "WorkShop"', ()=>{
        dashboard.add_NewEvent()
        dashboard.add_Workshop()
        cy.get('#btnCreateEvent').click({force:true})
        cy.get('.error-summary > div > ul > :nth-child(5)').should('be.visible').and('have.text', 'Workshop Price cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
    cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Name cannot be blank.')

    cy.get('.field-eventform-name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.event-start-date > .form-group > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.field-eventform-starttime > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
    cy.get('.field-eventform-workshop_price > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Workshop Price cannot be blank.')


        
     })

     it('Verify validation the form for "One to One"', ()=>{
        dashboard.add_NewEvent()
        dashboard.add_One_One()
        cy.get('#btnCreateEvent').click({force:true})
        cy.get('.error-summary > div > ul > :nth-child(5)').should('be.visible').and('have.text', 'Session Offering Id cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
    cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Name cannot be blank.')

    cy.get('.field-eventform-name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.event-start-date > .form-group > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.field-eventform-starttime > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
    cy.get(':nth-child(8) > .invalid-feedback').should('be.visible').and('have.text', 'Session Offering Id cannot be blank.')
        
     })

     it('Verify validation the form for "New Class"', ()=>{
        dashboard.add_NewEvent()
        dashboard.add_Class()
        cy.get('#btnCreateEvent').click({force:true})
        cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
    cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Name cannot be blank.')

    cy.get('.field-eventform-name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.event-start-date > .form-group > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.field-eventform-starttime > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start time cannot be selected in past.')



     })

     it('Verify validation the form for "Seminar Event"', ()=>{
        dashboard.add_NewEvent()
        dashboard.add_Seminar_Event()
        cy.get('#btnCreateEvent').click({force:true})
        cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')
    cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Name cannot be blank.')

    cy.get('.field-eventform-name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.event-start-date > .form-group > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.field-eventform-starttime > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')
    cy.get(':nth-child(8) > .form-group > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')

     })

     it('Verify validation the form for "Seminar"', ()=>{
        dashboard.select_Add_Seminar()
        cy.get('.box-footer > .btn-primary').click({force:true})
        cy.get('.field-seminar-name > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.field-seminar-description > .invalid-feedback').should('be.visible').and('have.text', 'Description cannot be blank.')
    cy.get('.field-seminar-offer_id > .invalid-feedback').should('be.visible').and('have.text', 'Offer Id cannot be blank.')
    cy.get('.field-seminar-price > .invalid-feedback').should('be.visible').and('have.text', 'Price cannot be blank.')



     })
})     

    