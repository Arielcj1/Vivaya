/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporatePage} from "../../../page-objects/CorporatePage"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePromotionPage} from "../../../page-objects-admin/CorporatePromotionPage"

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to verify the Corporate creation, edition and Deletion',()=>{
    const commons = new Commons()
    const corporate = new CorporatePage()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()

    it('The Corp user creates his Corporation from the Front end',()=>{
        commons.open_Web_Site()
        corporate.select_Corporate_As_Loggedout()
        corporate.type_Corporate_Email('manu@automation.com')
        corporate.select_register_Now()
        corporate.type_First_Name('manu')
        corporate.type_Last_Name('automation')
        corporate.type_Company_Name('Automation corp')
        corporate.continue_From_Step1()
        cy.wait(500)
        cy.get('#calendly-schedule > iframe').should('be.visible')
        
    })

    it('Verify that the Corporate is created from the Frontend, after that edited and deleted by the Admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        //edit the corporate Info and Update
        admin_corporate.select_the_corporate(2) //num 2 for edit
        admin_corporate.type_Corporate_Address('address automation')
        admin_corporate.type_Corporate_PhoneNumber('73575915')
        admin_corporate.update_Corporate_From_Form()
        admin_corporate.select_the_corporate(3) //num 3 for delete
        cy.get('#w0-success').should('contain', 'Corporate successfully deleted')
    })
})   
  


