/// <reference types = "cypress"/>

import { Commons } from "../../../Commons/Common";
import { PromotionPage } from "../../../page-objects-admin/PromotionPage";
import { ReportsTab } from "../../../page-objects-admin/ReportsTab";
import { SeekerPage } from "../../../page-objects-admin/SeekerPage";
import { SeekerCreation } from "../../../page-objects/SeekerCreation";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Influencers link and code', ()=>{
    const commons = new Commons()
    const promotionPage = new PromotionPage()
    const seekerCreation = new SeekerCreation()
    const reports = new ReportsTab()
    const seekerPage = new SeekerPage()


    it('Verify that the Admin can create Membership Promotion for influencer', () => {
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()

        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_New()
        promotionPage.type_Promotion_Name('AutomationCode')
        promotionPage.type_Promotion_Code_Name('AutCode')
        promotionPage.type_Promotion_Discount('35')
        //promotionPage.type_Promotion_ExpDate('30')
        cy.get('#promotion-expiration_date').type('30-Sep-2022')
        promotionPage.type_Promotion_Limit('10')
        cy.get('#w0-success').should('contain','Promotion auto renewal has been created.')
    })

    it('Verify that a user can register using the short link of the influencer', () => {
        cy.visit('https://stage.vivayalive.com/code/AutCode')     //Short link influencer code
        cy.get('.label-membership.moderate > .s-radio').click()   //Monthly 5 Pack Membership
        cy.get('.monthly-5-pack-box > .panel-body > .p-membership > .left > .name').should('be.visible')
        cy.get('.monthly-5-pack-box > .panel-body > .p-corporate > .left > .discount').should('be.visible')
        cy.get('.monthly-5-pack-box > .panel-body > .p-corporate > .right > .amount-total').should('contain','$28.60')

        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('Influ')
        seekerCreation.type_Seeker_Email('auto-influ@influencer.com')
        seekerCreation.type_Seeker_Password('password')
        //adding card information
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.marking_Checkbox()
        seekerCreation.type_ZipCode('1234')
        cy.wait(1500)
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    it('Verify that a user can register using the influencers promo code', ()=> {
        commons.open_Web_Site()
        seekerCreation.select_Free_trial_option()

        seekerCreation.type_First_Name('Auto')
        seekerCreation.type_Last_Name('InfluCode')
        seekerCreation.type_Seeker_Email('auto-influcode@influencer.com')
        seekerCreation.type_Seeker_Password('password')

        seekerCreation.promo_code_option()
        seekerCreation.Fill_promo_code('AutCode')
        cy.wait(1000)
        cy.get('.label-membership.moderate > .s-radio').click()   //Monthly 5 Pack Membership
        cy.get('.monthly-5-pack-box > .panel-body > .p-membership > .left > .name').should('be.visible')
        cy.get('.monthly-5-pack-box > .panel-body > .p-corporate > .left > .discount').should('be.visible')
        cy.get('.monthly-5-pack-box > .panel-body > .p-corporate > .right > .amount-total').should('contain','$28.60')
         //adding card information
         seekerCreation.type_Card_Name('Auto Mation')
         seekerCreation.type_Card_Number('4242424242424242')
         seekerCreation.type_Card_ExpDate('0225')
         seekerCreation.type_Security_Code('123')
         seekerCreation.marking_Checkbox()
         seekerCreation.type_ZipCode('1234')
         cy.wait(1500)
         cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
    })

    it('Check Membership Promo Report detail', () => {
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        reports.select_Reports_Tab()
        reports.select_Promotional_Report()

        cy.get(':nth-child(1) > .form-group > .control-label').should('contain','Promo Code')
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain','From Date')
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain','To Date')
        cy.get('.box > :nth-child(1) > .box-title').should('contain','Membership Promotions List')

        cy.get('#w1 > .table > thead > tr > :nth-child(1) > a').should('contain','Promo Name')
        cy.get('#w1 > .table > thead > tr > :nth-child(2) > a').should('contain','Code')
        cy.get('#w1 > .table > thead > tr > :nth-child(3) > a').should('contain','Discount (%)')
        cy.get('#w1 > .table > thead > tr > :nth-child(4) > a').should('contain','Full Name')
        cy.get('#w1 > .table > thead > tr > :nth-child(5) > a').should('contain','Package Name')
        cy.get('#w1 > .table > thead > tr > :nth-child(6) > a').should('contain','Purchase Price')
        cy.get('#w1 > .table > thead > tr > :nth-child(7) > .desc').should('be.visible')

        cy.get(':nth-child(3) > .box-header > .box-title').should('contain','Free Trial Registered with Code')
        cy.get('#w2 > .table > thead > tr > :nth-child(1) > a').should('contain','Promo Name')
        cy.get('#w2 > .table > thead > tr > :nth-child(2) > a').should('contain','Code')
        cy.get('#w2 > .table > thead > tr > :nth-child(3) > a').should('contain','Discount (%)')
        cy.get('#w2 > .table > thead > tr > :nth-child(4) > a').should('contain','Full Name')
        cy.get('#w2 > .table > thead > tr > :nth-child(5) > a').should('contain','Package Name')
        cy.get('#w2 > .table > thead > tr > :nth-child(6) > a').should('contain','Purchase Price')
        cy.get('#w2 > .table > thead > tr > :nth-child(7) > .desc').should('be.visible')

        cy.get(':nth-child(4) > .box-header > .box-title').should('contain','Other Purchases')
        cy.get('#w3 > .table > thead > tr > :nth-child(1) > a').should('contain','Promo Name')
        cy.get('#w3 > .table > thead > tr > :nth-child(2) > a').should('contain','Code')
        cy.get('#w3 > .table > thead > tr > :nth-child(3) > a').should('contain','Discount (%)')
        cy.get('#w3 > .table > thead > tr > :nth-child(4) > a').should('contain','Full Name')
        cy.get('#w3 > .table > thead > tr > :nth-child(5) > a').should('contain','Package Name')
        cy.get('#w3 > .table > thead > tr > :nth-child(6) > a').should('contain','Purchase Price')
        cy.get('#w3 > .table > thead > tr > :nth-child(7) > .desc').should('be.visible')

    })

    it('Verify that a search can be made by Promo Code.', () => {
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        reports.select_Reports_Tab()
        reports.select_Promotional_Report()

        cy.get('#reportsearch-promo_code').type('AutCode')
        cy.get('.btn-primary').click()
        cy.get('[data-key="0"] > :nth-child(2)').should('contain','AutCode')
    })

    it('Delete seeker and promo code from Admin', () => {
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()

        seekerPage.select_Seeker_Option()
        seekerPage.select_Seeker_List()
        seekerPage.type_Seeker_Email('auto-influ@influencer.com')
        seekerPage.select_Seeker_options('5') //num 5 for elimination
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
        seekerPage.type_Seeker_Email('auto-influcode@influencer.com')
        seekerPage.select_Seeker_options('5') //num 5 for elimination
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')

        
    })

    it('Delete Membership promo code "AutCode"', () => {
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        cy.wait(1000)
        promotionPage.select_Promotions_Option()
        promotionPage.select_PromoRenewal_List()
        cy.get(':nth-child(1) > :nth-child(7) > .glyphicon-remove').click()
        //promotionPage.find_Element_List_Promo_Renewal('4') //num 4 para eliminar, posicion de xpath
        cy.get('#w0-success').should('be.visible')
    })

})