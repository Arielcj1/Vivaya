/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporatePage} from "../../../page-objects/CorporatePage"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePromotionPage} from "../../../page-objects-admin/CorporatePromotionPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to verify the Corporate creation, edition and Deletion',()=>{
    //const homePage = new HomePage()
    //const guidesPage = new GuidesPage()
    const commons = new Commons()
    const corporate = new CorporatePage()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()

    it('The Corp user creates his Corporation from the Front end',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_Corporate_Email('manu@automation.com')
        corporate.select_register_Now()
        cy.wait(2000)
        corporate.type_First_Name('manu')
        corporate.type_Last_Name('automation')
        corporate.type_Company_Name('Automation corp')
        corporate.continue_From_Step1()
        cy.wait(2000)
        cy.get('#calendly-schedule > iframe').should('be.visible')
        
    })

    it('Verify that the Corporate is created from the Frontend, after that edited and deleted by the Admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        //edit the corporate Info and Update
        cy.wait(3000)
        cy.get('.table').find('.glyphicon-pencil').last().click()
        admin_corporate.type_Corporate_Address('address automation')
        admin_corporate.type_Corporate_PhoneNumber('73575915')
        admin_corporate.update_Corporate_From_Form()
        cy.wait(2000)
        cy.get('.table').find('.glyphicon-trash').last().click()
       
        
    })
})   
  


