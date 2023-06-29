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
          cy.get(':nth-child(3) > :nth-child(2) > .btn').click({force:true})

            cy.get('#btnCreateEvent').click()

            //validations
            cy.get('.field-eventform-name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
            cy.get('.col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Body cannot be blank.')
            cy.get('.event-start-date > .form-group > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start Date cannot be blank.')
            cy.get('.field-eventform-starttime > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
            //cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
            //cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
            //cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Body cannot be blank.')
            //cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Name cannot be blank.')

            cy.get('#eventform-repeatevent').click({force:true})
            cy.get('#eventform-repeats').select('Select Custom')
            cy.get('#btnCreateEvent').click({force:true})
            //cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Custom Dates cannot be blank.')
        })

        it('Verify validations in Guide Dashboard while creating a workshop', ()=>{
          cy.get(':nth-child(3) > .btn').click({force:true})
          cy.get('#btnCreateEvent').click()

          //validations
          cy.get('.field-eventform-name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
            cy.get('.col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Body cannot be blank.')
            cy.get('.event-start-date > .form-group > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start Date cannot be blank.')
            cy.get('.field-eventform-starttime-ws > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
            
            cy.get('.field-eventform-workshop_price > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Workshop Price cannot be blank.')
          //cy.get('.error-summary > div > ul > :nth-child(5)').should('be.visible').and('have.text', 'Workshop Price cannot be blank.')
          //cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
          //cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          //cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Body cannot be blank.')
          //cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Name cannot be blank.')
          
        })  

        it.skip('Verify validations in Guide Dashboard while creating a 1-1', ()=>{
          cy.get(':nth-child(4) > .btn').click({force:true})
          cy.get('#btnCreateEvent').click()

          //validations
          //cy.get('.error-summary > div > ul > :nth-child(5)').should('be.visible').and('have.text', 'Session Offering Id cannot be blank.')
          //cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
          //cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          //cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Body cannot be blank.')
          //cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Name cannot be blank.')

          cy.get('.field-eventform-name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
          cy.get('.col-sm-12 > .invalid-feedback').and('have.text', 'Body cannot be blank.')
          cy.get('.event-start-date > .form-group > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          cy.get('.field-eventform-starttime > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Start time cannot be selected in past.')
          cy.get(':nth-child(8) > .invalid-feedback').should('be.visible').and('have.text', 'Session Offering Id cannot be blank.')


        })  

        it.skip('Verify validations in Guide Dashboard while creating a seminar event', ()=>{
          //cy.get(':nth-child(3) > .btn').click()
          cy.wait(4000)
          cy.get(':nth-child(2) > .btn').click({force:true})
          cy.get('.box-footer > .btn-default').click()
          //cy.get('[href="/events/seminar/create"]').click()
          //cy.get('#btnCreateEvent').click()

          //validations
          //cy.get('.error-summary > div > ul > :nth-child(4)').should('be.visible').and('have.text', 'Event duration cannot be shorter than 1 hour')
          //cy.get('.error-summary > div > ul > :nth-child(3)').should('be.visible').and('have.text', 'Start Date cannot be blank.')
         // cy.get('.error-summary > div > ul > :nth-child(2)').should('be.visible').and('have.text', 'Body cannot be blank.')
          //cy.get('.error-summary > div > ul > :nth-child(1)').should('be.visible').and('have.text', 'Name cannot be blank.')

          cy.get('.field-seminar-name > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
          cy.get('.field-seminar-description > .invalid-feedback').should('be.visible').and('have.text', 'Description cannot be blank.')
          cy.get('.field-seminar-startdate > .invalid-feedback').should('be.visible').and('have.text', 'Start Date cannot be blank.')
          cy.get('.field-seminar-enddate > .invalid-feedback').should('be.visible').and('have.text', 'End Date cannot be blank.')
          cy.get('.field-seminar-offer_id > .invalid-feedback').should('be.visible').and('have.text', 'Main Offering cannot be blank.')
          cy.get('.field-seminar-price > .invalid-feedback').should('be.visible').and('have.text', 'Price cannot be blank.')

        })  

        it('Validate quick links', ()=>{
          //blog link
          //cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click()
          //cy.get('.box-footer > .btn').click()
          //cy.get('.field-blogpost-title > .col-sm-9 > .help-block').should('be.visible').and('have.text', 'Title cannot be blank.')
          //cy.get('.col-xs-12 > .help-block').should('be.visible').and('have.text', 'Content cannot be blank.')
          //cy.go('back')

          //edit offerings
          cy.get('.quick-links > :nth-child(2) > :nth-child(2) > a').click()
          //cy.scrollIntoView('#addNewOffer')
          cy.get('#addNewOffer').click({force:true})
          //cy.wait(2000)
          cy.get('#offering-form > :nth-child(7) > .btn').click()
          cy.get('.col-sm-5 > .form-group > .col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Offer cannot be blank.')
          cy.get('.col-sm-4 > .form-group > .col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Years Teaching cannot be blank.')
          //cy.get('.col-sm-5 > .form-group > .col-sm-12 > .help-block').should('be.visible').and('have.text', 'Offer cannot be blank.')
          //cy.get('.col-sm-4 > .form-group > .col-sm-12 > .help-block').should('be.visible').and('have.text', 'Years Teaching cannot be blank.')
          cy.get('#guideadditionaloffer-years_teaching').type('rrrrrr')
          cy.get('#offering-form > :nth-child(7) > .btn').click()
          cy.get('.col-sm-4 > .form-group > .col-sm-12 > .invalid-feedback').should('be.visible').and('have.text', 'Only numbers allowed')
          //Other Certifications
          cy.get('#addNewCertification').click({force:true})
          cy.get('#certification-form > :nth-child(7) > .btn').click()
          cy.get(':nth-child(6) > :nth-child(1) > .form-group > .col-sm-12 > .invalid-feedback').should('contain','Certification cannot be blank.')
          cy.get(':nth-child(6) > :nth-child(2) > .form-group > .col-sm-12 > .invalid-feedback').should('contain','Name of Program cannot be blank.')
          cy.get(':nth-child(6) > :nth-child(3) > .form-group > .col-sm-12 > .invalid-feedback').should('contain','Number of Hours cannot be blank.')

          cy.go('back')

          //Edit Password and personal info
          cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
          cy.get('#accountinformationform-first_name').clear()
          cy.get('#accountinformationform-last_name').clear()
          cy.get('#accountinformationform-email').clear()
          cy.get('#accountinformationform-phone_number').clear()
          cy.get('.text-center > .btn').click()

          cy.get('.alert > ul > :nth-child(1)').and('have.text', 'First name cannot be blank.')
          cy.get('.alert > ul > :nth-child(2)').and('have.text', 'Last name cannot be blank.')
          cy.get('.alert > ul > :nth-child(3)').and('have.text', 'Email cannot be blank.')
          cy.get('.alert > ul > :nth-child(4)').and('have.text', 'Mobile number cannot be blank.')

          cy.get('.field-accountinformationform-first_name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'First name cannot be blank.')
          cy.get('.field-accountinformationform-last_name > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Last name cannot be blank.')
          cy.get('.field-accountinformationform-email > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Email cannot be blank.')
          cy.get('.field-accountinformationform-phone_number > .col-sm-9 > .invalid-feedback').should('be.visible').and('have.text', 'Mobile number cannot be blank.')
          cy.go('back')

          //Contact Vivaya
          cy.get('.quick-links > :nth-child(4) > :nth-child(1) > a').click({force:true})
          cy.wait(500)
          cy.get('.btn-content > .btn').click({force:true})

          cy.get('.field-contactform-name > .invalid-feedback').should('be.visible').and('have.text', 'Name cannot be blank.')
          cy.get('.field-contactform-email > .invalid-feedback').should('be.visible').and('have.text', 'Email cannot be blank.')
          cy.get('.field-contactform-subject > .invalid-feedback').should('be.visible').and('have.text', 'Subject cannot be blank.')
          cy.get('.field-contactform-body > .invalid-feedback').should('be.visible').and('have.text', 'Body cannot be blank.')
          cy.go('back')

          //FAQs
          //cy.get('.link').click({force:true})
          cy.get(':nth-child(2) > .link').click({force:true})
          cy.get('.text-center').should('contain','FAQs')
          cy.get('.container > :nth-child(2)').should('contain','Free Trial & Membership')




        })
        
    })

      
    
})             