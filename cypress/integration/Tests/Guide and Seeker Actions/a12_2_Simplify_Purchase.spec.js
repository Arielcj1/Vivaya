/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import { SeekerCreation } from "../../../page-objects/SeekerCreation";
import { SeekerPage } from "../../../page-objects-admin/SeekerPage";
import { GuestPage } from "../../../page-objects-admin/GuestPage";


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Simplity Purchase', ()=> {
    
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const seekerPage = new SeekerPage()
    const guestpage = new GuestPage()

    beforeEach(()=>{
        commons.open_Web_Site()  
    })

    it('Verify that a guest can do a simplify purchase', () => {
        cy.scrollTo(0, 1300) 
        cy.contains('BOOK NOW').first().click({force:true})  
        cy.wait(1000)
        cy.get('.row > :nth-child(1) > h1').should('contain', 'Book Single Class')
        cy.get(':nth-child(1) > span.btn-bottom > .btn').should('be.visible')
        cy.get(':nth-child(3) > h1').should('contain','Start Free Trial')
        cy.get(':nth-child(3) > .btn-bottom > .btn').should('be.visible')
        cy.get(':nth-child(1) > span.btn-bottom > .btn').click()

        //prebuy event page
        cy.get('.title').should('contain','Book Single Class')
        cy.wait(500)
        cy.get('#guestprebuyeventform-first_name').type('Guest')
        cy.get('#guestprebuyeventform-last_name').type('User')
        cy.get('#guestprebuyeventform-email').type('guestuser@automa.com')
        cy.get('#promoCollapse').click()
        cy.get('#guestprebuyeventform-discountcode').type('code20')
        cy.get('#apply-code').click()
        cy.wait(500)
        cy.get('.event-discount').should('be.visible')

        cy.get('.n-group > .form-control').type('Guest Card')
        cy.get(':nth-child(2) > .input-group > .form-control').type('4242424242424242')
        cy.get('.expiration-date > .form-group > .form-control').type('0225')
        cy.get('.security-code > .form-group > .input-group > .form-control').type('1234')
        cy.get('#stripe-form-submit').click()

        cy.get('.logoVivaya').should('be.visible')
        cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.wait(500)
        cy.get('#w3-success-0').should('contain','Event has been booked successfully')
        //cy.contains('This event has been booked.').should('be.visible')

    })

    it('Verify that a seeker can buy a class or workshop without logging in.', () => {
        cy.scrollTo(0, 1300) 
        cy.contains('BOOK NOW').first().click({force:true})  
        cy.wait(1000)
        cy.get('.row > :nth-child(1) > h1').should('contain', 'Book Single Class')
        cy.get(':nth-child(1) > span.btn-bottom > .btn').click()

        //prebuy event page
        cy.get('.title').should('contain','Book Single Class')
        cy.wait(500)
        cy.get('#guestprebuyeventform-first_name').type('Auto')
        cy.get('#guestprebuyeventform-last_name').type('Yoon')
        cy.get('#guestprebuyeventform-email').type('automation@test.com')
        cy.get('#promoCollapse').click()
        cy.get('#guestprebuyeventform-discountcode').type('auto-code')
        cy.get('#apply-code').click()
        cy.get('.error').should('contain','The promotion code is not valid.')


        cy.wait(500)
        cy.get('.n-group > .form-control').type('Auto Card')
        cy.get(':nth-child(2) > .input-group > .form-control').type('4242424242424242')
        cy.get('.expiration-date > .form-group > .form-control').type('0225')
        cy.get('.security-code > .form-group > .input-group > .form-control').type('1234')
        cy.get('#stripe-form-submit').click()
        cy.get('#stripe-form-submit').click({force:true})

        cy.get('.logoVivaya').should('be.visible')
        cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.wait(500)
        cy.get('#w3-success-0').should('contain','Your Class has been booked successfully')
    })

    //Corporate domain: @corpol1.com    discount: 20%
    it('Sign up corporates seekers lvl1', () => {

        seekerCreation.select_Free_trial_option()
        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email('automation1@corpol1.com')
        seekerCreation.type_Seeker_Password('password')
        
        seekerCreation.marking_Checkbox()
        
        //Verification the discount for being a corporate email
        
        cy.get('.monthly-unlimited-box > .panel-body > .p-corporate > .right > .amount-total').should('contain','$72.00')
        //adding card information
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.type_ZipCode('1234')
        cy.wait(1500)
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    //Corporate domain: @corpol3.com
    it('Sign up corporates seekers lvl3', () => {
        seekerCreation.select_Free_trial_option()
        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email('autoc3@corpol3.com')
        
        seekerCreation.type_Seeker_Password('password')
        cy.wait(3000)
        
        seekerCreation.marking_Checkbox()
        
        cy.get('#corporate-form-submit').click()
        cy.wait(1500)
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    it('Verify that seeker corporates lvl1 can make a simple purchase.', () => {
        cy.scrollTo(0, 1300) 
        cy.contains('BOOK NOW').first().click({force:true})  
        cy.wait(1000)
        cy.get('.row > :nth-child(1) > h1').should('contain', 'Book Single Class')
        cy.get(':nth-child(1) > span.btn-bottom > .btn').click()

        //prebuy event page
        cy.get('.title').should('contain','Book Single Class')
        cy.wait(500)
        cy.get('#guestprebuyeventform-first_name').type('Auto')
        cy.get('#guestprebuyeventform-last_name').type('Mation')
        cy.get('#guestprebuyeventform-email').type('automation1@corpol1.com')
        cy.wait(500)
        cy.get('.n-group > .form-control').type('Auto Card')
        cy.get(':nth-child(2) > .input-group > .form-control').type('4242424242424242')
        cy.get('.expiration-date > .form-group > .form-control').type('0225')
        cy.get('.security-code > .form-group > .input-group > .form-control').type('1234')
        cy.get('#stripe-form-submit').click()

        cy.get('.logoVivaya').should('be.visible')
        cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.wait(500)
        cy.get('#w3-success-0').should('contain','Your Class has been booked successfully')
    })

    it('Verify that seeker corporates lvl3 can make a simple purchase.', () => {
        cy.get('#mainNav > :nth-child(2) > .nav-link').click()

        cy.contains('BOOK NOW').first().click({force:true})  
        cy.wait(1000)
        cy.get('.row > :nth-child(1) > h1').should('contain', 'Book Single Class')
        cy.get(':nth-child(1) > span.btn-bottom > .btn').click()

        //prebuy event page
        cy.get('.title').should('contain','Book Single Class')
        cy.wait(500)
        cy.get('#guestprebuyeventform-first_name').type('Auto')
        cy.get('#guestprebuyeventform-last_name').type('Mation')
        cy.get('#guestprebuyeventform-email').type('autoc3@corpol3.com')
        cy.wait(500)
        cy.get('.n-group > .form-control').type('Auto Card')
        cy.get(':nth-child(2) > .input-group > .form-control').type('4242424242424242')
        cy.get('.expiration-date > .form-group > .form-control').type('0225')
        cy.get('.security-code > .form-group > .input-group > .form-control').type('1234')
        cy.get('#stripe-form-submit').click()

        cy.get('.logoVivaya').should('be.visible')
        cy.get('#appModal > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.wait(500)
        cy.get('#w3-success-0').should('contain','Event has been booked successfully')
    })

    it('Delete corporate users Level One and Level 3',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        seekerPage.select_Seeker_Option()
        seekerPage.select_Seeker_List()
        seekerPage.type_Seeker_Email('automation1@corpol1.com')
        seekerPage.select_Seeker_options('5') //num 5 for elimination
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
        seekerPage.type_Seeker_Email('autoc3@corpol3.com')
        seekerPage.select_Seeker_options('5') //num 5 for elimination
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })

    it('Delete the Guests users created by Simple Purchase', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        guestpage.select_Guest_Option()
        guestpage.select_Guest_List()
        guestpage.make_a_Search_by_email('guestuser@automa.com')
        guestpage.guests_Options('3') // num 2 in order to delete guest
        cy.get('#w2-success').should('be.visible')

        guestpage.make_a_Search_by_email('automation@test.com')
        guestpage.guests_Options('3') // num 2 in order to delete guest
        cy.get('#w2-success').should('be.visible')

        guestpage.make_a_Search_by_email('automation1@corpol1.com')
        guestpage.guests_Options('3') // num 2 in order to delete guest
        cy.get('#w2-success').should('be.visible')

        guestpage.make_a_Search_by_email('autoc3@corpol3.com')
        guestpage.guests_Options('3') // num 2 in order to delete guest
        cy.get('#w2-success').should('be.visible')
    })
})

