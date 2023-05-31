/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { GuestPage } from "../../../page-objects-admin/GuestPage";
import { Dashboard } from "../../../page-objects/Dashboard";
import { SeekerCreation } from "../../../page-objects/SeekerCreation";



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })


describe('Events page', ()=>{
    const commons = new Commons()
    const dashboard = new Dashboard()
    const guestPage = new GuestPage()
    const seekerCreation = new SeekerCreation()
    var user = '2guesttest@user.com'

    beforeEach(()=>{
        cy.clearLocalStorage()
        commons.open_Web_Site()
    })

    it('Book a Festival Event from Dashboard', ()=>{
        cy.contains('FESTIVAL EVENT').first().click()
        cy.wait(1000)
        
        dashboard.free_Event_Confirmation('Guest', 'User', user)
        cy.wait(1500)
        cy.get('.title-confirmation').should('be.visible')
        cy.wait(500)
        cy.get('.brand').click({force:true})
        cy.contains('This event has been booked.').first().should('be.visible')
        cy.wait(1000)

    })

    it('Verify the Guest creation in admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        guestPage.select_Guest_Option()
        guestPage.select_Guest_List()
        guestPage.make_a_Search_by_email(user)
        cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[4]/label').should('contain', 'Unconverted')
    })

    it('Convert a Guest user to Seeker user',()=>{
        cy.contains('FESTIVAL EVENT').first().click()
        cy.wait(1000)
        dashboard.free_Event_Confirmation('Guest', 'User', user)
        dashboard.free_event_Free_Trial()
        //sign Up Seeker
        seekerCreation.type_First_Name('Guest')
        seekerCreation.type_Last_Name('User')
        seekerCreation.type_Seeker_Email(user)
        cy.wait(500)
      
        seekerCreation.marking_Checkbox()
        cy.wait(500)
        seekerCreation.type_Seeker_Password('password') //always password as last step because it has the Submit option
        seekerCreation.type_Card_Name('Guest User')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.type_ZipCode('00000')// zip code include the submit button
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

      it('Verify the Convertion of a Guest user to a Seeker',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        guestPage.select_Guest_Option()
        guestPage.select_Guest_List()
        guestPage.make_a_Search_by_email(user)
        cy.xpath('//*[@id="w1"]/table/tbody/tr[1]/td[4]/label').should('contain', 'Converted')
    })
})