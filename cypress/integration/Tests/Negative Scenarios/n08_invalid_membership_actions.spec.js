/// <reference types = "cypress"/>

//import {Commons} from "../../../Commons/common"
import { Commons } from "../../../Commons/Common";
import {AdminMembershipPage} from "../../../page-objects-admin/AdminMembershipPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Negative scenarios for Membership ', ()=>{
    const commons = new Commons
    const adminMembership = new AdminMembershipPage()

    beforeEach(()=>{
        commons.open_Admin_Site()
    })


    it('Verify validations of fields the Membership from Admin', ()=>{
        commons.set_Admin_Credentials()
        adminMembership.select_Membership_Option()
        adminMembership.select_Membership_List()
        adminMembership.click_On_AddNew()
        cy.wait(500)
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-membership-title > .help-block').should('contain','Title cannot be blank.')
        cy.get('.field-membership-body > .help-block').should('contain','Body cannot be blank.')
        cy.get('.field-membershipformmodel-offers > .help-block').should('contain','Offers cannot be blank.')
        cy.get('.field-membershipformmodel-event_types > .help-block').should('contain','Event Types cannot be blank.')
        cy.get('.field-membership-price > .help-block').should('contain','Price cannot be blank.')
        cy.get('.field-membership-valid_for > .help-block').should('contain','Valid For cannot be blank.')
        cy.get('.field-add-membershipformmodel-pack > .help-block').should('contain','Quantity cannot be blank.')

        
    })


})