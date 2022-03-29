/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage";
import { CorporatePromotionPage } from "../../../page-objects-admin/CorporatePromotionPage";
import { SeekerCreation } from "../../../page-objects/SeekerCreation";



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to create a new corporate as Administrator',()=>{

    const commons = new Commons()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()
    const seekerCreation = new SeekerCreation()

    beforeEach(()=>{
        
        commons.open_Admin_Site()
        
    })

    it.skip('The Admin is able to create a Corporation LvL3 from admin',()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        admin_corporate.select_Add_New_Corporate()
        admin_corporate.type_Corporate_Name('Corporate Lvl3')
        admin_corporate.type_Corporate_Domain('automationlvl3.com')
        admin_corporate.type_Corporate_Address('address automation')
        admin_corporate.type_Corporate_PhoneNumber('73575916')
        admin_corporate.type_Corporate_ContactName('Corporate LVL3 automation')
        admin_corporate.type_Corporate_ContactEmail('manuel.rojas@automationlvl3.com')
        cy.get('#corporate-level').select('Level 3 (Partnership)')
        cy.wait(2000)
        admin_corporate.add_Corporate_From_Form()
        cy.get('#w0-success').should('contain', 'Corporate has been created.')
    })

    it.skip('Create a Corporate Promotion LvL3 for last created Corporation',()=>{
      commons.set_Admin_Credentials()
      admin_corporate.select_Corporate_Option()
      cy.get('.menu-open > .treeview-menu > :nth-child(5) > a > span').click()   //click on "Corporate Promotion LvL3"
      admin_promo_code.select_Create_New_Promo()
      admin_promo_code.type_Promotion_Name('promo automation lvl3')
      admin_promo_code.type_Promotion_Code('promo lvl3')

      cy.get('#w1').type('Corporate Lvl3').wait(3000).type('{downarrow}').type('{enter}')
      cy.get('#promotion-price').type('60')
      cy.get('#promotion-membership_id').select('MONTHLY UNLIMITED MEMBERSHIP')
      cy.get('.box-footer > .btn').click()
      cy.wait(500)
      
      cy.get('#w0-success').should('contain', 'Promotion for Level 3 Corporate has been created.')
    })

    it('Create a Corporate user, using the "Corporate Promotion Lvl3" code',()=>{
      commons.open_Web_Site()
      seekerCreation.select_Free_trial_option()
      seekerCreation.type_First_Name('Auto Lvl3')
      seekerCreation.type_Last_Name('Mation2')
      seekerCreation.type_Seeker_Email('automation2@testlvl3.com')
      //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
      seekerCreation.marking_Checkbox()
      seekerCreation.type_Seeker_Password('password')
      //adding the promo code
      seekerCreation.promo_code_option()
      seekerCreation.type_promo_code('promo lvl3')
      cy.get('#promoCollapse', {timeout:1000}).should('be.visible')
      //adding card information
      // seekerCreation.type_Card_Name('Auto Mation')
      // seekerCreation.type_Card_Number('4242424242424242')
      // seekerCreation.type_Card_ExpDate('0225')
      // seekerCreation.type_Security_Code('123')
      // seekerCreation.type_ZipCode()
      cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

  
  })