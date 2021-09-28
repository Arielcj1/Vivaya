/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePage} from "../../../page-objects/CorporatePage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to verify validations in Corporates',()=>{
    const commons = new Commons()
    const admin_corporate = new CorporateAdminPage()
    const corporate = new CorporatePage()

    beforeEach(()=>{
        
        commons.open_Admin_Site()
        //cy.wait(4000)
        
    })

    it('Verify validation "coporate name" from Admin',()=>{
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
        cy.wait(1000)
        cy.get('.field-corporate-name > .help-block').should('contain','ActiveCampaign account exists.')
    })

    it('Verify validation "coporate name" from Site',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_Corporate_Email('manu1@automation.com')
        corporate.select_register_Now()
        corporate.type_First_Name('manu')
        corporate.type_Last_Name('automation')
        corporate.type_Company_Name('Automation corp')
        corporate.continue_From_Step1()
        cy.get('.field-corporatesignupform-company_name > .col-sm-9 > .help-block').should('contain','There is already a company registered with this name.')
        
    })

    it('Delete the last corporated created',()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        cy.get('.table').find('.glyphicon-trash').first().click()
        cy.get('#w0-success').should('be.visible')
    })
    
})   
  


