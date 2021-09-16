/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {Dashboard} from "../../../page-objects/Dashboard"
import {HomePage} from "../../../page-objects/Home"
import {GuestPage} from "../../../page-objects-admin/GuestPage"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Web Page for Guest', ()=>{
    const dashboard = new Dashboard()
    const commons = new Commons()
    const homePage = new HomePage()
    const guestPage = new GuestPage()
    const seekerCreation = new SeekerCreation()
    var user = '14guesttest@user.com'
    
    beforeEach(()=>{
      cy.clearLocalStorage()
      commons.open_Web_Site()
    })

    it('Verify validation "GUEST" of the fields from Site', ()=>{
      dashboard.select_First_FreePublicEvent()
      cy.get('.text-center > .btn').click({force:true})
      cy.wait(1000)
      cy.get('.field-guest-firstname > .col-sm-9 > .help-block').should('contain','First Name cannot be blank.')
      cy.get('.field-guest-lastname > .col-sm-9 > .help-block').should('contain','Last Name cannot be blank.')
      cy.get('.field-guest-email > .col-sm-9 > .help-block').should('contain','Email cannot be blank.')

  })

    it('Book a Free public Event from Dashboard', ()=>{
        dashboard.select_First_FreePublicEvent()
        dashboard.free_Event_Confirmation('Guest', 'User', user)
        cy.wait(2000)
        cy.get('.title-confirmation').should('be.visible')
    })

    it('Verify the Guest creation in admin',()=>{
      commons.open_Admin_Site()
      commons.set_Admin_Credentials()
      guestPage.select_Guest_Option()
      guestPage.select_Guest_List()
      guestPage.make_a_Search_by_email(user)
      cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[4]/label').should('contain', 'No')
    })

    it('Convert a Guest user to Seeker user',()=>{
      dashboard.select_First_FreePublicEvent()
      dashboard.free_Event_Confirmation('Guest', 'User', user)
      dashboard.free_event_Free_Trial()
      seekerCreation.type_First_Name('Guest')
      seekerCreation.type_Last_Name('User')
      seekerCreation.type_Seeker_Email(user)
      //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
      seekerCreation.marking_Checkbox()
      seekerCreation.type_Seeker_Password('password') //always password as last step because it has the Submit option
      seekerCreation.type_Card_Name('Guest User')
      seekerCreation.type_Card_Number('4242424242424242')
      seekerCreation.type_Card_ExpDate('0225')
      seekerCreation.type_Security_Code('123')
      seekerCreation.type_ZipCode('00000')// zip code include the submit button
      cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    it('Book a Free Event from Dashboard', ()=>{
      dashboard.select_First_FreeEvent()
      dashboard.select_LogIn_option_from_PopUp()
      commons.set_Seeker_Credentials_One()
      homePage.submit_Credentials()
      cy.get('#w0-success-0').should('be.visible')
    })
})