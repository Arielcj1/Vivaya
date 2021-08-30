/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common";
import { HomePage } from "../../../page-objects/Home"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  describe('Negative scenarios for Login and Users creation', ()=>{
    const commons = new Commons()
    const homePage = new HomePage()

      

  it('Verify messages validations in seeker actions', ()=>{
    commons.open_Web_Site()
    homePage.select_Login()
    cy.get('#loginform-email').type("manurex@manu.com")
    cy.wait(2000)
    cy.get('#loginform-password').type("perrodelmal")
    homePage.submit_Credentials()
    cy.wait(3000)
    cy.get('.profile-box > .btn').click()
    cy.get('#accountinformationform-first_name').clear()
    cy.get('#accountinformationform-last_name').clear()
    cy.get('#accountinformationform-email').clear()
    cy.get('#accountinformationform-phone_number').clear()
    cy.get('#accountinformationform-password').click()
    cy.get('.field-accountinformationform-first_name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'First name cannot be blank.')
    cy.get('.field-accountinformationform-last_name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Last name cannot be blank.')
    cy.get('.field-accountinformationform-email > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Email cannot be blank.')
    cy.get('.field-accountinformationform-phone_number > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Mobile number cannot be blank.')
    cy.go('back')
    //validate event creation fields
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[href="/events/class/create"]').click()
    cy.get('#btnCreateEvent').click()
    cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
    cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Name cannot be blank.')

    cy.get('.field-eventform-name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.col-xs-12 > .help-block').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.event-start-date > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.field-eventform-starttime > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start time cannot be selected in past.')

    cy.go('back')
    cy.go('back')
    //validate Workshop creation fields
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[href="/events/workshop/create"]').click()
    cy.get('#btnCreateEvent').click()
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

    cy.go('back')
    cy.go('back')
    //validate 1-1 creation fields
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[href="/events/1-on-1/create"]').click()
    cy.get('#btnCreateEvent').click()
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

    cy.go('back')
    cy.go('back')
    //validate event seminar creation fields
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[href="/events/seminar/create"]').click()
    cy.get('#btnCreateEvent').click()

    cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')
    cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Name cannot be blank.')

    cy.get('.field-eventform-name > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.col-xs-12 > .help-block').should('be.visible').and('have.text', 'Body cannot be blank.')
    cy.get('.event-start-date > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Start Date cannot be blank.')
    cy.get('.field-eventform-starttime > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')
    cy.get(':nth-child(8) > .form-group > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')

    cy.go('back')
    cy.go('back')
    //validate seminar creation fields
    cy.get(':nth-child(4) > .btn').click()
    cy.get('.box-footer > .btn-primary').click()

    cy.get('.field-seminar-name > .help-block').should('be.visible').and('have.text', 'Name cannot be blank.')
    cy.get('.field-seminar-description > .help-block').should('be.visible').and('have.text', 'Description cannot be blank.')
    cy.get('.field-seminar-offer_id > .help-block').should('be.visible').and('have.text', 'Offer Id cannot be blank.')
    cy.get('.field-seminar-price > .help-block').should('be.visible').and('have.text', 'Price cannot be blank.')

    cy.go('back')
    //Verify Offerings
    cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
    cy.get('#addNewOffer').click()
    cy.get(':nth-child(7) > .btn').click()
    cy.get('.error-summary > ul > :nth-child(1)').should('be.visible').and('have.text', 'Offer cannot be blank.')
    cy.get('.error-summary > ul > :nth-child(2)').should('be.visible').and('have.text', 'Years Teaching cannot be blank.')
    cy.get('.col-sm-5 > .form-group > .col-sm-12 > .help-block').should('be.visible').and('have.text', 'Offer cannot be blank.')
    cy.get('.col-sm-4 > .form-group > .col-sm-12 > .help-block').should('be.visible').and('have.text', 'Years Teaching cannot be blank.')

})

}) 