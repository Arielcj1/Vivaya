/// <reference types="cypress"/>

import {Commons} from "../../../Commons/Common"
import {CorporateAdminPage } from "../../../page-objects-admin/CorporateAdminPage"
import {CorporatePromotionPage} from "../../../page-objects-admin/CorporatePromotionPage"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"
import { HomePage } from "../../../page-objects/Home"
import { Dashboard } from "../../../page-objects/Dashboard"
import { EventCreationPage } from "../../../page-objects/EventCreationPage"


Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  describe('Tests to create a new corporate as Administrator',()=>{
    const commons = new Commons()
    const admin_corporate = new CorporateAdminPage()
    const admin_promo_code = new CorporatePromotionPage()
    const seekerCreation = new SeekerCreation()
    const seekerPage = new SeekerPage()
    const homePage = new HomePage()
    const dashboard = new Dashboard()
    const eventCreationPage = new EventCreationPage()
    

    beforeEach(()=>{
        
        commons.open_Admin_Site()
        
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
        cy.get('#w1-success').should('contain', 'Promotion for Corporate has been created.')
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

    it('Create Workshop Event', () => {
        commons.open_Web_Site()
        homePage.select_Login()
        commons.set_Guide_Credentials_One()
        homePage.submit_Credentials()
        cy.get(':nth-child(1) > .dashboard-box > :nth-child(5) > .count').invoke('text').then((text) =>{
             cy.log(text)
            if(text != 0){
                cy.wait(300)
                 dashboard.cancel_Created_Event_Workshop()
                 cy.get('#w2-success-0').should('contain', 'Event has been canceled.')
            }
            else{
                 //dashboard.add_NewEvent()
                 dashboard.add_Workshop()
                 eventCreationPage.add_EventName('Workshop Automation')
                 cy.wait(2000)
                 eventCreationPage.add_Description('This is a Test Workshop')
                 eventCreationPage.add_Custom_Number_Of_Days(2)
                 eventCreationPage.add_Price('40')
                 cy.wait(500)
                 eventCreationPage.press_Add()
                 cy.get('#w3-success-0').should('contain', 'Events have been created.')
            }
        })
    })

    it('Verify that corporate user can buy a workshop', () => {
        commons.open_Web_Site()
        homePage.select_Login()
       
        cy.wait(1000)
        cy.get('#loginform-email').type("automation1@automation.com")
        cy.wait(1000)
        cy.get('#loginform-password').type("password")
        homePage.submit_Credentials()
        cy.wait(1000)
        //cy.get('[href="/schedule"]').click({ force: true })
        cy.visit('https://stage.vivayalive.com/schedule')
        cy.get('#eventsearch-q').type('Workshop Automation{enter}')

        cy.xpath('/html/body/div[2]/div[4]/div[2]/div/div[1]/div/div[8]/div[1]/a').click({ force: true })

        cy.wait(1000)

        cy.get('.form-group > h3').should('be.visible')
        cy.get('.col-md-12 > .btn').click()   //Click on Checkout button
        cy.get('#stripe-form-submit').click()    //click on confirm button
        cy.get('.close > span').click()
        cy.get('.order-summary').should('contain','Purchase Confirmation')
        cy.get('a > .btn').click()   //Click on Go to Dashboard button
        cy.get('.b-options > .btn').click()   //click on Cancel button
        cy.get('.btn-success').click()
        cy.wait(2000)
        cy.get('#w3-success-0').should('contain','Event has been canceled.')
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
        cy.wait(1000)
        cy.get('.table').find('.glyphicon-trash').first().click()
        cy.wait(1000)
        cy.get('#w0-success').should('contain', 'Corporate successfully deleted')
    })
    it('Delete the Corporate Promotion Code', ()=>{
        commons.set_Admin_Credentials()
        admin_corporate.select_Corporate_Option()
        admin_promo_code.select_Corporate_Promotions_From_List()
        admin_promo_code.disable_last_Promo_created()
        cy.get('#w1-success').should('contain', 'The Promotion is now disabled')
    })
})   
  


