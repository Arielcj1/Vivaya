/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


describe('Elements verification in responsive mode for Guide page', ()=>{

    const commons = new Commons()

    context('Iphone 12Pro resolution', () => {
        
        beforeEach(() => {
        
          cy.viewport(390, 844)
          commons.open_Web_Site()
          commons.login_As_Guide_Mobile()
        })

        it('Verify Elements in Guide Dashboard after Login', ()=>{
            
            cy.get('#header').should('contain.html', 'user-item')

             //Verify main menu options
             cy.get('.user-item').click()
             cy.get('.menu-item-expanded > .menu > :nth-child(1) > a').should('be.visible').and('contain.text', 'Dashboard')
             cy.get('.menu > :nth-child(2) > a').should('be.visible').and('contain.text', 'Account')
             cy.get('.menu > :nth-child(3) > a').should('be.visible').and('contain.text', 'Switch to Seeker Profile')
             cy.get(':nth-child(4) > form > .btn').should('be.visible').and('contain.text', 'Logout')
             cy.wait(2000)
             cy.get('.user-item').click()

             cy.get('.circle-box').should('be.visible')
             cy.get('.profile-box > h2').should('be.visible').and('contain.text', 'manurex')
             cy.get('body > div.wrap > div.container > div > div.col-sm-9 > div:nth-child(1) > h3').should('be.visible').and('have.text', 'Your Schedule:')
             cy.get('.col-sm-9 > :nth-child(1) > :nth-child(2) > :nth-child(1) > .btn').should('be.visible').and('have.text', 'All upcoming events')
             cy.get(':nth-child(2) > .btn').should('be.visible').and('have.text', 'Edit 1-1 availability')
             cy.get(':nth-child(3) > .btn').should('be.visible').and('have.text', 'Add new event')
             cy.get(':nth-child(4) > .btn').should('be.visible').and('have.text', 'Add Seminar')
             cy.get('.quick-links > h3').scrollIntoView()
             cy.get('.col-sm-9 > :nth-child(2) > h3').should('be.visible').and('have.text', 'Your Seminars:')
             cy.get('.quick-links > h3').should('be.visible').and('have.text', 'Quick Links')
             //quick links
             cy.get('.quick-links > :nth-child(2) > :nth-child(1)').should('be.visible').and('have.text', 'View My Full Class History')
             cy.get('.quick-links > :nth-child(2) > :nth-child(2)').should('be.visible').and('have.text', 'Write Blog Article')
             cy.get('body > div.wrap > div.container > div > div.col-sm-9 > div.dashboard-box.round-corners.border-box.quick-links > div:nth-child(2) > div:nth-child(3) > a').should('be.visible').and('have.text', 'Switch to Seeker Profile')
             cy.get('.quick-links > :nth-child(3) > :nth-child(1)').should('be.visible').and('have.text', 'View My Public Profile')
             cy.get('.quick-links > :nth-child(3) > :nth-child(2)').should('be.visible').and('have.text', 'Edit My Offerings')
             cy.get('.quick-links > :nth-child(3) > :nth-child(3)').should('be.visible').and('have.text', 'Edit My Password')
             cy.get('.quick-links > :nth-child(4) > :nth-child(1)').should('be.visible').and('have.text', 'Contact VIVAYA')
             cy.get('.quick-links > :nth-child(4) > :nth-child(2)').should('be.visible').and('have.text', 'Update Liability Insurance')
             cy.get('.quick-links > :nth-child(4) > :nth-child(3)').should('be.visible').and('have.text', 'Edit Contact Information')

             cy.get('.mobile > .dashboard-box > h3').should('be.visible').and('have.text', 'Your Success')
             cy.get('.mobile > .dashboard-box > :nth-child(2) > :nth-child(2)').should('be.visible').and('have.text', 'Month to date earnings')
             cy.get('.mobile > .dashboard-box > :nth-child(3) > :nth-child(2)').should('be.visible').and('have.text', 'Classes')
             cy.get('.mobile > .dashboard-box > :nth-child(4) > :nth-child(2)').should('be.visible').and('have.text', 'Workshops')
             cy.get('.mobile > .dashboard-box > :nth-child(5) > :nth-child(2)').should('be.visible').and('have.text', 'Class & Workshop Clients')
             cy.get('.mobile > .dashboard-box > :nth-child(6) > :nth-child(2)').should('be.visible').and('have.text', '1-1 Session Clients')
        })
        
        it('Verify Event buttons in Guide Dashboard after Login', ()=>{  
          cy.get(':nth-child(3) > :nth-child(1) > .btn').click()
          cy.get('.text-center').should('be.visible').and('have.text', 'Upcoming events')
          cy.go('back')
          cy.get(':nth-child(2) > .btn').click()
          cy.get('.text-center').should('be.visible').and('have.text', 'Calendar')
          cy.go('back')
          cy.get(':nth-child(3) > .btn').click()
          cy.get('#appModal > .modal-dialog > .modal-content > .modal-body').should('be.visible')
          //cy.get('.mheader-title').and('have.text', 'Add new event')
          cy.get('[href="/events/workshop/create"]').should('be.visible').and('have.text', 'Add Workshop')
          cy.get('[href="/events/1-on-1/create"]').should('be.visible').and('have.text', 'Add 1-1 Session')
          cy.get('[href="/events/class/create"]').should('be.visible').and('have.text', 'Add Class')
          cy.get('#modalContent > div > a:nth-child(4)').should('be.visible').and('contain.text', 'Add Seminar Event')
          cy.get('#modalHeader > .close').click()

          cy.get(':nth-child(4) > .btn').click()
          cy.get('h1.text-center').should('be.visible').and('have.text', 'Add Seminar')
          cy.go('back')
        })  

        it('Verify quick link redirections in Guide Dashboard after Login', ()=>{  
          cy.get('.quick-links > :nth-child(2) > :nth-child(1)').click()
          cy.get('.text-center').should('have.text', 'Full Class History')
          cy.go('back')
          
          cy.get('body > div.wrap > div.container > div > div.col-sm-9 > div.dashboard-box.round-corners.border-box.quick-links > div:nth-child(2) > div:nth-child(2) > a').click()
          cy.get('h1.text-center').should('have.text', 'Write blog post')
          cy.go('back')

          cy.get('body > div.wrap > div.container > div > div.col-sm-9 > div.dashboard-box.round-corners.border-box.quick-links > div:nth-child(3) > div:nth-child(1) > a').click()
          cy.get('h1').should('be.visible').and('have.text','manu rex')
          cy.get('.lazy').should('be.visible')
          cy.get('.col-md-4 > h3').should('be.visible').and('have.text','OFFERINGS')
          cy.get('.col-md-3 > h3').should('be.visible').and('have.text','CERTIFICATIONS')
          cy.get('.col-sm-12 > h2').should('be.visible').and('have.text','My Philosophy')
          cy.go('back')
          
          cy.get('.quick-links > :nth-child(3) > :nth-child(2) > a').click()
          cy.get('h1.text-center').should('be.visible').and('have.text','Offerings')
          cy.get('#addNewOffer').should('be.visible')
          cy.go('back')

          cy.get('.quick-links > :nth-child(3) > :nth-child(3) > a').click()
          cy.get('h1').should('be.visible').and('have.text','Account Information')
          cy.get('#form-signup > :nth-child(4)').should('be.visible').and('have.text','Personal')
          cy.get('.field-accountinformationform-first_name > .control-label').should('be.visible').and('have.text','First name')
          cy.get('#accountinformationform-first_name').should('be.visible')
          cy.get('.field-accountinformationform-last_name > .control-label').should('be.visible').and('have.text','Last name')
          cy.get('#accountinformationform-last_name').should('be.visible')
          cy.get('.field-accountinformationform-email > .control-label').should('be.visible').and('have.text','Email')
          cy.get('#accountinformationform-email').should('be.visible')
          cy.get('.field-accountinformationform-phone_number > .control-label').should('be.visible').and('have.text','Mobile number')
          cy.get('#accountinformationform-phone_number').should('be.visible')
          cy.get('.field-accountinformationform-timezone > .control-label').should('be.visible').and('have.text','Timezone')
          cy.get('#accountinformationform-timezone').should('be.visible')
          cy.get('#form-signup > :nth-child(10)').should('be.visible').and('have.text','Change password')
          cy.get('.field-accountinformationform-password > .control-label').should('be.visible').and('have.text','Password')
          cy.get('#accountinformationform-password').should('be.visible')
          cy.get('#form-signup > :nth-child(12)').should('be.visible').and('have.text','Address')
          cy.get('.field-address-address_one > .control-label').should('be.visible').and('have.text','Address One')
          cy.get('#address-address_one').should('be.visible')
          cy.get('.field-address-address_two > .control-label').should('be.visible').and('have.text','Address Two')
          cy.get('#address-address_two').should('be.visible')
          cy.get('.field-address-city > .control-label').should('be.visible').and('have.text','City')
          cy.get('#address-city').should('be.visible')
          cy.get('.field-address-country > .control-label').should('be.visible').and('have.text','Country')
          cy.get('#address-country').should('be.visible')
          cy.get('.field-address-zip_code > .control-label').should('be.visible').and('have.text','Zip Code')
          cy.get('#address-zip_code').should('be.visible')
          cy.go('back')

          cy.get('.quick-links > :nth-child(4) > :nth-child(1) > a').click()
          cy.get('h1').should('be.visible').and('have.text','Contact')
          cy.get(':nth-child(1) > p').should('be.visible').and('have.text','If you have business inquiries or other questions, please fill out the following form to contact us. Thank you.')
          cy.get('.field-contactform-name > .control-label').should('be.visible').and('have.text','Name')
          cy.get('#contactform-name').should('be.visible')
          cy.get('.field-contactform-email > .control-label').should('be.visible').and('have.text','Email')
          cy.get('#contactform-email').should('be.visible')
          cy.get('.field-contactform-subject > .control-label').should('be.visible').and('have.text','Subject')
          cy.get('#contactform-subject').should('be.visible')
          cy.go('back')

          cy.get('.quick-links > :nth-child(4) > :nth-child(2) > a').click()
          cy.get('h1.text-center').should('be.visible').and('have.text','Liability Insurance')
          cy.get('.md-fields > .control-label').should('be.visible').and('have.text','Upload File')
          cy.go('back')

          cy.get('.quick-links > :nth-child(4) > :nth-child(3) > a').click()
          cy.get('h1.text-center').should('be.visible').and('have.text','Profile Information')
          cy.get(':nth-child(3) > .col-xs-8 > h3').should('be.visible').and('have.text','About me')
          cy.get('#guideapplicationstep4-about_me').should('be.visible')
          cy.get(':nth-child(5) > .col-xs-8 > h3').should('be.visible').and('have.text','Your personal Mantra')
          cy.get('#guideapplicationstep4-mantra').should('be.visible')
          cy.get(':nth-child(7) > .col-xs-8 > h3').should('be.visible').and('have.text','Your Headshot')
          cy.get('.img-circle').should('be.visible')
          cy.get(':nth-child(10) > .col-xs-8 > h3').should('be.visible').and('have.text','Your Philosophy')
          cy.get('#guideapplicationstep4-philosophy').should('be.visible')
          cy.get(':nth-child(12) > .col-xs-8 > h3').should('be.visible').and('have.text','Social Media')
          cy.get('.field-guideapplicationstep4-facebook_url > .control-label').should('be.visible').and('have.text','Facebook')
          cy.get('#guideapplicationstep4-facebook_url').should('be.visible')
          cy.get('.field-guideapplicationstep4-twitter_url > .control-label').should('be.visible').and('have.text','Twitter')
          cy.get('#guideapplicationstep4-twitter_url').should('be.visible')
          cy.get('.field-guideapplicationstep4-linkedin_url > .control-label').should('be.visible').and('have.text','LinkedIn')
          cy.get('#guideapplicationstep4-linkedin_url').should('be.visible')
          cy.get('.field-guideapplicationstep4-instagram_url > .control-label').should('be.visible').and('have.text','Instagram')
          cy.get('#guideapplicationstep4-instagram_url').should('be.visible')
          cy.get('.field-guideapplicationstep4-video_url > .control-label').should('be.visible').and('have.text','Youtube Link')
          cy.get('#guideapplicationstep4-video_url').should('be.visible')

        
        })

    })    

})    