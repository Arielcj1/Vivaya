/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePromotionPage} from "../../../page-objects-admin/CorporatePromotionPage"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to create a new corporate as Administrator',()=>{
    const commons = new Commons()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()
    const seekerCreation = new SeekerCreation()
    const seekerPage = new SeekerPage()

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

    it('Create a Promo Code for last created Corporation',()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_promo_code.select_Corporate_Promotions_From_List()
        admin_promo_code.select_Create_New_Promo()
        admin_promo_code.type_Promotion_Name('promo automation')
        admin_promo_code.type_Promotion_Code('pr automation')
        //admin_promo_code.type_Promotion_Domain_Name('automation')
        cy.get('#w1').type('automation')
        .wait(3000)
        .type('{downarrow}')
        .type('{enter}')
        admin_promo_code.type_Promotion_Discount('25')
        cy.wait(500)
        //cy.get('.box-footer > .btn').click()
        cy.get('#w0-success').should('contain', 'Promotion for Corporate has been created.')
    })

    it('Create a Corporate user, using the Corp Code Level One',()=>{
        commons.open_Web_Site()
        seekerCreation.select_Free_trial_option()
        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email('pedrasasmota.luis1@gmail.com')
        //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        seekerCreation.marking_Checkbox()
        seekerCreation.type_Seeker_Password('password')
        //adding the promo code
        seekerCreation.promo_code_option()
        //seekerCreation.type_promo_code('pr automation')
        seekerCreation.Fill_promo_code('pr automation')
        //cy.get('#promoCollapse', {timeout:1000}).should('be.visible')
        //adding card information
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.type_ZipCode('1234')
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    it('Create a Corporate user with a corporate email Level One',()=>{
        commons.open_Web_Site()
        seekerCreation.select_Free_trial_option()
        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email('automation1@automation.com')
        //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        seekerCreation.marking_Checkbox()
        seekerCreation.type_Seeker_Password('password')
        //Verification the discount for being a corporate email
        //cy.get('.monthly-unlimited-box > .panel-body > .p-membership > .right > .amount').should('contain', '$67.50')
        cy.get('.monthly-unlimited-box > .panel-body > .p-corporate > .right > .amount-total').should('contain','$67.50')
        //adding card information
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.type_ZipCode('1234')
        cy.wait(1500)
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    it('Delete corp users Level One',()=>{
        commons.set_Admin_Credentials()
        seekerPage.select_Seeker_Option()
        seekerPage.select_Seeker_List()
        seekerPage.type_Seeker_Email('pedrasasmota.luis1@gmail.com')
        seekerPage.select_Seeker_options('5') //num 5 for elimination
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
        seekerPage.type_Seeker_Email('automation1@automation.com')
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
        admin_promo_code.select_Corporate_Promotions_From_List()
        admin_promo_code.disable_last_Promo_created()
        cy.get('#w0-success').should('be.visible')
    })
})   
  


