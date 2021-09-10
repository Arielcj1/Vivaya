/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { HomePage } from "../../../page-objects/Home";
import {Dashboard} from "../../../page-objects/Dashboard";
import {EventCreationPage} from "../../../page-objects/EventCreationPage"
import {SeminarCreationPage} from "../../../page-objects/SeminarCreationPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Elements verification in responsive mode for Events creation', ()=>{

    const commons = new Commons()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    const seminars = new SeminarCreationPage()

    context('Iphone 12Pro resolution', () => {
        
        beforeEach(() => {
        
          cy.viewport(390, 844)
          commons.open_Web_Site()
          commons.login_As_Guide_Mobile()
        })

        it('Verify validations in Guide Dashboard while creating a class', ()=>{
            cy.get(':nth-child(3) > .btn').click()
            cy.get('[href="/events/class/create"]').click()

            cy.get('#btnCreateEvent').click()

            //validations
            cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
            cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
            cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Body cannot be blank.')
            cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Name cannot be blank.')

            cy.get('.field-eventform-name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Name cannot be blank.')
            cy.get('.col-xs-12 > .help-block').should('be.visible').and('have.text', 'Body cannot be blank.')
            cy.get('.event-start-date > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start Date cannot be blank.')
            cy.get('.field-eventform-starttime > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
            cy.get('#eventform-repeatevent').click()
            cy.get('#eventform-repeats').select('Select Custom')
            cy.get('#btnCreateEvent').click()
            cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Custom Dates cannot be blank.')
        })

        it('Verify validations in Guide Dashboard while creating a workshop', ()=>{
          cy.get(':nth-child(3) > .btn').click()
          cy.get('[href="/events/workshop/create"]').click()
          cy.get('#btnCreateEvent').click()

          //validations
          cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Workshop Price cannot be blank.')
          cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
          cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Body cannot be blank.')
          cy.get('.error-summary > div > ul > :nth-child(5)').should('be.visible').and('have.text', 'Name cannot be blank.')

          cy.get('.field-eventform-name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Name cannot be blank.')
          cy.get('.col-xs-12 > .help-block').should('be.visible').and('have.text', 'Body cannot be blank.')
          cy.get('.event-start-date > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          cy.get('.field-eventform-starttime > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
          cy.get('.field-eventform-workshop_price > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Workshop Price cannot be blank.')

        })  

        it('Verify validations in Guide Dashboard while creating a 1-1', ()=>{
          cy.get(':nth-child(3) > .btn').click()
          cy.get('[href="/events/1-on-1/create"]').click()
          cy.get('#btnCreateEvent').click()

          //validations
          cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Session Offering Id cannot be blank.')
          cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
          cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Body cannot be blank.')
          cy.get('.error-summary > div > ul > :nth-child(5)').should('be.visible').and('have.text', 'Name cannot be blank.')

          cy.get('.field-eventform-name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Name cannot be blank.')
          cy.get('.col-xs-12 > .help-block').should('be.visible').and('have.text', 'Body cannot be blank.')
          cy.get('.event-start-date > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          cy.get('.field-eventform-starttime > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
          cy.get('.field-eventform-session_offering_id > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Session Offering Id cannot be blank.')


        })  

        it('Verify validations in Guide Dashboard while creating a seminar event', ()=>{
          cy.get(':nth-child(3) > .btn').click()
          cy.get('[href="/events/seminar/create"]').click()
          cy.get('#btnCreateEvent').click()

          //validations
          cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')
          cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Body cannot be blank.')
          cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Name cannot be blank.')

          cy.get('.field-eventform-name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Name cannot be blank.')
          cy.get('.col-xs-12 > .help-block').should('be.visible').and('have.text', 'Body cannot be blank.')
          cy.get('.event-start-date > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          cy.get('.field-eventform-starttime > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')
          cy.get(':nth-child(8) > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')


        })  
        
    })
    
})             