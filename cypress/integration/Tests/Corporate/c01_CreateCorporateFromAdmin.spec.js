/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePromotionPage} from "../../../page-objects-admin/CorporatePromotionPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to create a new corporate as Administrator',()=>{
    const commons = new Commons()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()

    beforeEach(()=>{
        
        commons.open_Admin_Site()
        //cy.wait(4000)
        
    })

    it('The Admin is able to create a Corporation from admin',()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        admin_corporate.select_Add_New_Corporate()
        admin_corporate.type_Corporate_Name('corporate automation uno')
        admin_corporate.type_Corporate_Domain('automation.com')
        admin_corporate.type_Corporate_Address('address automation')
        admin_corporate.type_Corporate_PhoneNumber('73575915')
        admin_corporate.type_Corporate_ContactName('corporate automation user')
        admin_corporate.type_Corporate_ContactEmail('manuel.rojas@automation.com')
        cy.wait(2000)
        admin_corporate.add_Corporate_From_Form()
        cy.get('#w0-success').should('contain', 'Corporate has been created.')
    })

    it('Create and Delete a Promo Code for last created Corporation',()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_promo_code.select_Corporate_Promotions_From_List()
        admin_promo_code.select_Create_New_Promo()
        admin_promo_code.type_Promotion_Name('promo automation')
        admin_promo_code.type_Promotion_Code('pr automation')
        //admin_promo_code.type_Promotion_Domain_Name('automation')
        cy.get('#w1').type('automation')
        .wait(2000)
        .type('{downarrow}')
        .type('{enter}')
        admin_promo_code.type_Promotion_Discount('25')
        cy.get('#w0-success').should('contain', 'Promotion for Corporate has been created.')
    })

    it('Delete the las corporated created',()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        cy.get('.table').find('.glyphicon-trash').first().click()
        cy.get('#w0-success').should('contain', 'Corporate successfully deleted')
    })
})   
  


