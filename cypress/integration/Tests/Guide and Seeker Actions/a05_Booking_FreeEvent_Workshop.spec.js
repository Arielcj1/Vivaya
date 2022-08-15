/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { EventsPage } from "../../../page-objects-admin/EventsPage";
import { GuestPage } from "../../../page-objects-admin/GuestPage";
import { GuidePage } from "../../../page-objects-admin/GuidePage";
import { SeekerPage } from "../../../page-objects-admin/SeekerPage";
import { Dashboard } from "../../../page-objects/Dashboard";
import { SeekerCreation } from "../../../page-objects/SeekerCreation";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


  describe('Booking Free Event and Workshop',()=>{
    const commons = new Commons()
    const dashboard = new Dashboard()
    const seekerCreation = new SeekerCreation
    const seekerPage = new SeekerPage
    const guestpage = new GuestPage
    const eventsPage = new EventsPage
    const guidePage = new GuidePage
    var user = 'guestuser@auto.com'

    beforeEach(()=>{
      commons.open_Web_Site()
      
    })

    it('Verify that a Guest can book a Free event and Workshop from the HomePage.', () => {
      cy.xpath('/html/body/div[2]/div[4]/div/div[2]/div/div[1]/div[7]/span/a').click()
      cy.wait(2000)
      dashboard.free_Event_Confirmation('Guest', 'User', user)
      cy.wait(2000)
      cy.get('.logoVivaya').should('be.visible')
      cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
      cy.get('h1 > strong').should('be.visible')
      cy.get('.waiting-free-event').should('contain', 'This event has been booked.')
      cy.wait(4000)
      cy.go('back')
      cy.xpath('/html/body/div[2]/div[4]/div/div[2]/div/div[2]/div[7]/div[1]/a').click()
      cy.get('.col-md-12 > h1').should('contain','Book Workshop')
      cy.wait(2000)
      cy.get('.position-relative > .btn').click()
      cy.get('.title').should('contain','Book Workshop')
      cy.get('#guestprebuyeventform-first_name').type('Guest')
      cy.get('#guestprebuyeventform-last_name').type('User')
      cy.get('#guestprebuyeventform-email').type(user)
      cy.get('.n-group > .form-control').type('Card Test')
      cy.get(':nth-child(2) > .input-group > .form-control').type('4242424242424242')
      cy.get('.expiration-date > .form-group > .form-control').type('0525')
      cy.get('.security-code > .form-group > .input-group > .form-control').type('123')
      cy.get('#stripe-form-submit').click()
      cy.wait(1000)
      cy.get('.logoVivaya').should('be.visible')
      cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
      cy.get('#w1-success-0').should('contain','Event has been booked successfully')
    })

    it('Verify that a Seeker with a free trial can book a free event from the Schedule, Profile of the Guide and the details of the event', ()=>{
      seekerCreation.select_Free_trial_option()
      seekerCreation.type_First_Name('Auto')
      seekerCreation.type_Last_Name('Mation')
      cy.wait(3000)
      seekerCreation.type_Seeker_Email('autoseeker@auto.com')
      cy.wait(3000)
      //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
      seekerCreation.marking_Checkbox()
      seekerCreation.type_Seeker_Password('password')
      seekerCreation.type_Card_Name('Auto Mation')
      cy.wait(3000)
      seekerCreation.type_Card_Number('4242424242424242')
      seekerCreation.type_Card_ExpDate('0225')
      seekerCreation.type_Security_Code('123')
      cy.wait(3000)
      seekerCreation.type_ZipCode('1234')
      cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
      cy.wait(500)
      cy.get('h1').should('contain','Schedule')
      cy.get('#mainNav > :nth-child(1) > .nav-link').click()
      cy.get('#eventsearch-q').type('Free Class{enter}')
      cy.xpath('/html/body/div[2]/div[4]/div[2]/div/div[1]/div/div[8]/div[1]/a').click({ force: true })
      cy.wait(1000)
      cy.get('.close > span').click()
      cy.wait(1000)
      cy.get('.logoVivaya').should('be.visible')
      cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
      cy.get('#w1-success-0').should('contain','Thanks for booking your class!')
    })

    it('Verify that a corporate Seeker can book a free event from the Schedule, Profile of the Guide and the details of the event.', () => {
      seekerCreation.select_Free_trial_option()
      seekerCreation.type_First_Name('Auto')
      cy.wait(3000)
      seekerCreation.type_Last_Name('Mation')
      seekerCreation.type_Seeker_Email('autocorp@corpol3.com')
      cy.wait(3000)
      seekerCreation.type_Seeker_Password('password')
      cy.wait(3000)
      seekerCreation.marking_Checkbox()
      
      cy.get('#corporate-form-submit').click()
      cy.wait(1500)
      cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')

      cy.get('#mainNav > :nth-child(2) > .nav-link').click()
      
      cy.get('#guidesearch-q').type('Nameaut{enter}')
      cy.wait(2000)
      cy.get('.img-circle').click()
      cy.wait(3000)
      //cy.xpath('/html/body/div[2]/div[2]/div[2]/div[8]/div[1]/div[9]/span/a').click({ force: true })
      cy.get(':nth-child(1) > .col-md-3 > .n').click({ force: true })
      cy.contains('FREE EVENT').click({ force: true })
      cy.get('.close > span').click()
      cy.wait(3000)
      cy.get('.logoVivaya').should('be.visible')
      cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
      cy.get('#w1-success-0').should('contain','Thanks for booking your class!')
    })

    it('Delete seeker and corporate', ()=> {
      commons.open_Admin_Site()
      commons.set_Admin_Credentials()
      seekerPage.select_Seeker_Option()
      seekerPage.select_Seeker_List()
      seekerPage.type_Seeker_Email('autoseeker@auto.com')
      seekerPage.select_Seeker_options('5') //num 5 for elimination
      cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
      seekerPage.type_Seeker_Email('autocorp@corpol3.com')
      seekerPage.select_Seeker_options('5') //num 5 for elimination
      cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })

    it('Delete the Guest user created', ()=>{
      commons.open_Admin_Site()
      commons.set_Admin_Credentials()
      guestpage.select_Guest_Option()
      guestpage.select_Guest_List()
      guestpage.make_a_Search_by_email(user)
      guestpage.guests_Options('2') // num 2 in order to delete guest
      cy.get('#w2-success').should('be.visible')
    })

    it('Delete events of influencer guide', ()=> {
      commons.open_Admin_Site()
      commons.set_Admin_Credentials()
      eventsPage.select_Events_Option()
      eventsPage.select_Events_List()
      eventsPage.find_Event('Free Class', '3') // option 3 is used for elimination
      cy.get('#w2-success').should('contain','Event has been canceled')
      eventsPage.find_Event('Class Free event', '3') // option 3 is used for elimination
      cy.get('#w2-success').should('contain','Event has been canceled')
      eventsPage.find_Event('Workshop1', '3') // option 3 is used for elimination
      cy.get('#w2-success').should('contain','Event has been canceled')
    })

    it('Deactivate guide influencer and Delete', () => {
      commons.open_Admin_Site()
      commons.set_Admin_Credentials()
      guidePage.select_Guide_Option()
      
      guidePage.select_Guide_List()
      guidePage.find_EmailGuide('influencerGuide@automation.com', '2') //num 2 for edition
      cy.wait(1000)
      cy.get('#guide-influencer > :nth-child(2) > input').click()
      cy.wait(1000)
      cy.get('.box-footer > .btn').click()
      cy.get('#w2-success').should('contain','Guide successfully updated')
      cy.wait(1000)
      guidePage.find_EmailGuide('influencerGuide@automation.com', '4')
      
    })

})