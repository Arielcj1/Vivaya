/// <reference types = "cypress"/>

import {Commons} from "../../../Commons/common"
import {AdminMembershipPage} from "../../../page-objects-admin/AdminMembershipPage"
import {PricingPage} from "../../../page-objects/PricingPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Admin Membership Page', ()=>{
    const commons = new Commons()
    const adminMembership = new AdminMembershipPage()
    const pricingPage = new PricingPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
    })

    it.skip('Verify element within Memberships Page',()=>{
        commons.set_Admin_Credentials()
        adminMembership.select_Membership_Option()
        adminMembership.select_Membership_List()
        //Verify elements within the page
       cy.get('h1').should('contain', 'Memberships')
       cy.get(':nth-child(1) > .form-group > .control-label').should('have.text','Title')
       cy.get(':nth-child(2) > .form-group > .control-label').should('have.text','Price')
       cy.get(':nth-child(3) > .form-group > .control-label').should('have.text','Type')
       cy.get(':nth-child(4) > .form-group > .control-label').should('have.text','Language')
       cy.get('.box-footer > .btn').should('contain', 'Search')
       cy.get('.box-tools > .btn').should('contain', 'Add new')
    })

    it.skip('Create a New Membership', ()=>{
        commons.set_Admin_Credentials()
        adminMembership.select_Membership_Option()
        adminMembership.select_Membership_List()
        adminMembership.click_On_AddNew()
        adminMembership.type_New_Membership_Name('Automating')
        adminMembership.type_Membership_Body('automation test')
        adminMembership.check_Offer('1')//1. Yoga, 2. Meditation, 3. Coaching
        adminMembership.check_Event_Type('1')//1. class, 2. workshop, 3. 1-1 sesion, Seminar Event
        adminMembership.type_Price('90')
        adminMembership.type_Valid_For('3')
        adminMembership.select_Type('Normal')//Normal, Time Based, Promotional
        adminMembership.select_Purchase_Type('None')//None, 1 use only, Autorenewal
        adminMembership.date_Valid_Until('3')
        adminMembership.type_Quantity('3') //this line will add the new membership
        cy.get('#w2-success').should('contain', 'Membership has been created.')
    })

    it.skip('Edit the Membership record',()=>{
        commons.set_Admin_Credentials()
        adminMembership.select_Membership_Option()
        adminMembership.select_Membership_List()
        adminMembership.type_Title('Automating') //must be equal as "type_New_Membership_Name" data
        adminMembership.select_Membership_option('1') //1. editon, 2. delete
        adminMembership.type_Membership_Body('The Body was updated by automation')
        adminMembership.check_Offer('3')//1. Yoga, 3. Meditation, 5. Coaching
        adminMembership.check_Event_Type('3')//1. class, 3. workshop, 5. 1-1 sesion, Seminar Event
        adminMembership.type_Price('120')
        adminMembership.type_Valid_For('1')
        adminMembership.date_Valid_Until('5')
        adminMembership.type_Quantity('5') //this line will add the new membership
        cy.get('#w2-success').should('contain', 'Membership has been updated.')
    })

    it('Verify Membership creation on Web page VIVAYA',()=>{
        commons.open_Web_Site()
        pricingPage.select_Pricing_When_Logout()
        //Verify the existence of the new Membership
        cy.get('[data-slick-index="1"] > .membership-list-item').click({force:true}).type('{leftarrow}') //move the packages one position
        cy.wait(500)
        //cy.get('.slick-current > .membership-list-item > h2').should('contain', 'automating')
        cy.contains('Automating').should('be.visible')
    })

    it('Delete The Membership created', ()=>{
        commons.set_Admin_Credentials()
        adminMembership.select_Membership_Option()
        adminMembership.select_Membership_List()
        adminMembership.type_Title('Automating') //must be equal as "type_New_Membership_Name" data
        adminMembership.select_Membership_option('2') //1. editon, 2. delete
        cy.get('#w2-success').should('contain', 'Membership successfully deleted')
    })
})