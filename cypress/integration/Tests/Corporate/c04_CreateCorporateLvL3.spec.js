/// <reference types="cypress"/>

import { Commons } from "../../../Commons/Common";
import { CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage";
import { CorporatePromotionPage } from "../../../page-objects-admin/CorporatePromotionPage";
import { SeekerPage } from "../../../page-objects-admin/SeekerPage";
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
    const seekerPage = new SeekerPage()

    beforeEach(()=>{
      
        
        commons.open_Admin_Site()
        
    })

    it('The Admin is able to create a Corporation LvL3 from admin',()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_corporate.select_Corporate_List()
        admin_corporate.select_Add_New_Corporate()
        admin_corporate.type_Corporate_Name('Corporate L3')
        admin_corporate.type_Corporate_Domain('automationL3.com')
        admin_corporate.type_Corporate_Address('Address automation3')
        admin_corporate.type_Corporate_PhoneNumber('73575919')
        admin_corporate.type_Corporate_ContactName('Corporate L3 automation')
        admin_corporate.type_Corporate_ContactEmail('manuel.rojas@automationL3.com')
        cy.get('#corporate-level').select('Level 3 (Partnership)')
        cy.wait(2000)
        admin_corporate.add_Corporate_From_Form()
        cy.get('#w0-success').should('contain', 'Corporate has been created.')
    })

    it('Create a Corporate Promotion LvL3 for last created Corporation',()=>{
      commons.set_Admin_Credentials()
      admin_corporate.select_Corporate_Option()
      cy.get('.menu-open > .treeview-menu > :nth-child(5) > a > span').click()   //click on "Corporate Promotion LvL3"
      admin_promo_code.select_Create_New_Promo()
      admin_promo_code.type_Promotion_Name('promo automation L3')
      admin_promo_code.type_Promotion_Code('Promo L3')

      cy.get('#w1').type('Corporate L3').wait(3000).type('{downarrow}').type('{enter}')
      cy.get('#promotion-price').type('600')
      //cy.get('#promotion-membership_id').select('MONTHLY UNLIMITED MEMBERSHIP')
      cy.get('.box-footer > .btn').click()
      cy.wait(500)
      
      cy.get('#w0-success').should('contain', 'Promotion for Level 3 Corporate has been created.')
    })

    it('Create a Corporate user, using the "Corporate Promotion Lvl3" code',()=>{
      //cy.visit('https://stage.vivayalive.com/signup/seeker/form')
      commons.open_Web_Site()
      seekerCreation.select_Free_trial_option()
      seekerCreation.type_First_Name('Auto Lvl3')
      seekerCreation.type_Last_Name('Mation')
      seekerCreation.type_Seeker_Email('automation2@testlvl3.com')
   
      seekerCreation.marking_Checkbox()
      seekerCreation.type_Seeker_Password('password')
      //adding the promo code
      seekerCreation.promo_code_option()
      //seekerCreation.type_promo_code('Promo L3')
      seekerCreation.Fill_promo_code('Promo L3')
      
      cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
      cy.wait(4000)
      seekerCreation.seeker_dashboard()
      cy.contains('Monthly Unlimited Membership').should("be.visible")
    })

    it('Create a Corporate user with a corporate email Level three', () =>{
      //cy.visit('https://stage.vivayalive.com/signup/seeker/form')
      commons.open_Web_Site()
      seekerCreation.select_Free_trial_option()
      seekerCreation.type_First_Name('Auto Lvl3')
      seekerCreation.type_Last_Name('Mation1')
      seekerCreation.type_Seeker_Email('automation2@automationL3.com')
      seekerCreation.type_Seeker_Password('password')
      seekerCreation.marking_Checkbox()
      cy.get('#corporate-form-submit').click()

      cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
      cy.wait(4000)
      seekerCreation.seeker_dashboard()
      cy.contains('Monthly Unlimited Membership').should("be.visible")
    })

    it('Delete corporate users Level Three',()=>{
      commons.set_Admin_Credentials()
      seekerPage.select_Seeker_Option()
      seekerPage.select_Seeker_List()
      seekerPage.type_Seeker_Email('automation2@testlvl3.com')
      seekerPage.select_Seeker_options('5') //num 5 for elimination
      cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
      seekerPage.type_Seeker_Email('automation2@automationL3.com')
      seekerPage.select_Seeker_options('5') //num 5 for elimination
      cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
  })

  it('Delete the last corporated created',()=>{
      commons.set_Admin_Credentials()
      admin_corporate.select_Corporate_Option()
      admin_corporate.select_Corporate_List()
      cy.get('.table').find('.glyphicon-trash').first().click()
      cy.get('#w0-success').should('be.visible')
  })
  it('Delete the Corporate Promotion Code', ()=>{
      commons.set_Admin_Credentials()
      admin_corporate.select_Corporate_Option()
      //admin_promo_code.select_Corporate_Promotions_From_List()
      cy.get('.menu-open > .treeview-menu > :nth-child(5) > a > span').click()
      //admin_promo_code.disable_last_Promo_created()
      cy.get(':nth-child(1) > :nth-child(7) > .glyphicon-remove').click()
      cy.get('#w0-success').should('be.visible')
  })

  
  })