/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {PromotionPage} from "../../../page-objects-admin/PromotionPage"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

describe('Negative scenarios for Promotions', ()=>{
    const commons = new Commons()
    const promotionPage = new PromotionPage()
    const seekerCreation = new SeekerCreation()

    beforeEach(()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
    })
    
    //This test verify the validation fields when a super Admin attemps to create a new Admin
    it('Validations for Admin user creation',()=>{
        cy.get(':nth-child(2) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
        cy.get('.box-footer > .btn').click()
        cy.get('.field-admin-first_name > .help-block').should('be.visible').and('have.text', 'First name cannot be blank.')
        cy.get('.field-admin-last_name > .help-block').should('be.visible').and('have.text', 'Last name cannot be blank.')
        cy.get('.field-admin-email > .help-block').should('be.visible').and('have.text', 'Email cannot be blank.')
        cy.get('.field-admin-newpassword > .help-block').should('be.visible').and('have.text', 'New Password cannot be blank.')
        cy.get('.field-admin-newpasswordconfirm > .help-block').should('be.visible').and('have.text', 'New Password Confirm cannot be blank.')
        cy.get('.field-admin-status > .help-block').should('be.visible').and('have.text', 'Status cannot be blank.')
        cy.wait(2000)
        cy.reload()

    })
    //This test verify and validate the fields while Seeker creation from admin
    it('Validations for Seeker creation',()=>{
        cy.get(':nth-child(3) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a > span').click()
        cy.get('.box-footer > .btn').click()
        cy.get('.field-user-first_name > .help-block').should('be.visible').and('have.text', 'First Name cannot be blank.')
        cy.get('.field-user-last_name > .help-block').should('be.visible').and('have.text', 'Last Name cannot be blank.')
        cy.get('.field-user-email > .help-block').should('be.visible').and('have.text', 'Email cannot be blank.')
        cy.get('.field-user-newpassword > .help-block').should('be.visible').and('have.text', 'New Password cannot be blank.')
        cy.get('.field-user-newpasswordconfirm > .help-block').should('be.visible').and('have.text', 'New Password Confirm cannot be blank.')
    })

    //This test verify the validations fields while creating a new Guide
    it('Validation for Guide creation',()=>{
        cy.get(':nth-child(5) > [href="#"] > :nth-child(2)').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(3) > a > span').click()
        cy.get('.box-footer > .btn').click()
        cy.get('.field-guide-about_me > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'About Me cannot be blank.')
        cy.get('.field-guide-mantra > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'Mantra cannot be blank.')
        cy.get('.field-guide-uploadedpicture > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'Guide Picture cannot be blank.')
        cy.get('.field-guide-uploadedinsurance > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'Liability Insurance cannot be blank.')
        cy.get('.field-guide-insurance_expiry_date > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'Insurance Expiry Date cannot be blank.')
        cy.get('.field-guide-provide_classes > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'You have to select at least 1 option that the guide will provide')
        
        cy.get('.field-user-first_name > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'First Name cannot be blank.')
        cy.get('.field-user-last_name > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'Last Name cannot be blank.')
        cy.get('.field-user-email > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'Email cannot be blank.')
        cy.get('.field-user-phone_number > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'Phone Number cannot be blank.')
        cy.get('#divState > .form-group > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'State cannot be blank.')
        cy.get('.field-user-newpassword > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'New Password cannot be blank.')
        cy.get('.field-user-newpasswordconfirm > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'New Password Confirm cannot be blank.')
        cy.get('.field-guide-one_on_one_session_price > .col-sm-6 > .help-block').should('be.visible').and('have.text', 'One On One Session Price cannot be blank.')
        

    })

})    