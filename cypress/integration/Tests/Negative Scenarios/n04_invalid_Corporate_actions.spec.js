/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePromotionPage} from "../../../page-objects-admin/CorporatePromotionPage"
import {CorporatePage} from "../../../page-objects/CorporatePage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Negative scenarios for Corporates',()=>{
    const commons = new Commons()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()
    const corporate = new CorporatePage()

    beforeEach(()=>{
            
        
    })

    it('Verify validation of the fields the new Corporate from Admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        admin_corporate.select_Add_New_Corporate()
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-corporate-name > .help-block').should('contain','Corporate Name cannot be blank.')
        cy.get('.field-corporate-domain > .help-block').should('contain','Domains cannot be blank.')
        cy.get('.field-corporate-contact_name > .help-block').should('contain','Contact Name cannot be blank.')
        cy.get('.field-corporate-contact_email > .help-block').should('contain','Contact e-mail cannot be blank.')

    })

    it('Verify validation of the fields the new Promo Corporate from Admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_promo_code.select_Corporate_Promotions_From_List()
        admin_promo_code.select_Create_New_Promo()
        cy.get('.box-footer > .btn').click({force:true})
        cy.get('.field-promotion-name > .help-block').should('contain','Name cannot be blank.')
        cy.get('.field-promotion-code > .help-block').should('contain','Code cannot be blank.')
        cy.get(':nth-child(3) > .form-group > .help-block').should('contain','Select Corporate Name cannot be blank.')
        cy.get('.field-promotion-discount > .help-block').should('contain','Discount cannot be blank.')

    })

    it('Verify validation of the "Email" Corporate from WebSite',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        cy.get('.container-banner > .container > #corporate-entry-form > .from-group > .btn').click({force:true})
        cy.get('.container-banner > .container > #corporate-entry-form > .form-group > .help-block').should('contain','Email cannot be blank.')
        
    })

    it('Verify validation of the "Email" Corporate from WebSite',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_Corporate_Email('manu@automation.com')
        corporate.select_register_Now()
        cy.get('#continueStep1').click({force:true})
        cy.get('.field-corporatesignupform-first_name > .col-sm-9 > .help-block').should('contain','First Name cannot be blank.')
        cy.get('.field-corporatesignupform-last_name > .col-sm-9 > .help-block').should('contain','Last Name cannot be blank.')
        cy.get('.field-corporatesignupform-company_name > .col-sm-9 > .help-block').should('contain','Company Name cannot be blank.')
        
    })

    it('Delete the last corporated created',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        cy.get('.table').find('.glyphicon-trash').first().click()
        cy.get('#w0-success').should('be.visible')
    })

    

})   
  


