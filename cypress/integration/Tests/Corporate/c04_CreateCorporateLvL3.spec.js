/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage";
import { CorporatePromotionPage } from "../../../page-objects-admin/CorporatePromotionPage";
import { SeekerCreation } from "../../../page-objects/SeekerCreation";
import { SeekerCreationSingle } from "../../../page-objects/SeekerCreationSingle";



Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to create a new corporate as Administrator',()=>{

    const commons = new Commons()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()
    const seekerCreation = new SeekerCreation()
    const seekerCreationSingle = new SeekerCreationSingle()

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

    it.skip('Create a Corporate user, using the "Corporate Promotion Lvl3" code',()=>{
      cy.visit('https://stage.vivayalive.com/signup/seeker/form')
      seekerCreation.type_First_Name('Auto Lvl3')
      seekerCreation.type_Last_Name('Mation2')
      seekerCreation.type_Seeker_Email('automation2@testlvl3.com')
   
      seekerCreation.marking_Checkbox()
      seekerCreation.type_Seeker_Password('password')
      //adding the promo code
      seekerCreation.promo_code_option()
      seekerCreation.type_promo_code('promo lvl3')
      
      cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
      cy.wait(4000)
      seekerCreation.seeker_dashboard()
      cy.contains('Monthly Unlimited Membership').should("be.visible")
    })

    it('Create a Corporate user with a corporate email Level three', () =>{
      cy.visit('https://stage.vivayalive.com/signup/seeker/form')
      seekerCreation.type_First_Name('Auto Lvl3')
      seekerCreation.type_Last_Name('Mation1')
      seekerCreation.type_Seeker_Email('automation2@automationlvl3.com')
   
      seekerCreation.marking_Checkbox()
      seekerCreation.type_Seeker_Password('password')

      cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
      cy.wait(4000)
      seekerCreation.seeker_dashboard()
      cy.contains('Monthly Unlimited Membership').should("be.visible")
    })

    it.skip('A/B testing', () => {

      cy.visit('https://stage.vivayalive.com/signup/seeker/single')
      //Seeker Data
      seekerCreationSingle.type_First_Name_Single('Auto Lvl3')
      seekerCreationSingle.type_Last_Name_Single('Mation2')
      seekerCreationSingle.type_Seeker_Email_Single('automation2@testlvl3.com')
      seekerCreationSingle.type_Seeker_Password_Single('password')
      //Apply corporate promotion Lvl3
      seekerCreationSingle.promo_code_option()
      seekerCreationSingle.type_promo_code('promo lvl3')
      seekerCreationSingle.apply_Code()

      //Credit Card
      seekerCreationSingle.type_Card_Name_Single('Auto Mation Lvl3')
      seekerCreationSingle.type_Card_Number_Single('4242424242424242')
      seekerCreationSingle.type_Card_ExpDate_Single('0225')
      seekerCreationSingle.type_Security_Code_Single('1234')
      seekerCreationSingle.marking_Checkbox()
      //seekerCreationSingle.click_On_Submit()
    })

  })