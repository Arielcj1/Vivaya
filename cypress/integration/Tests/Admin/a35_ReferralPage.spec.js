/// <reference types = "cypress"/>

//import {Commons} from "../../../Commons/common"
import {SeekerCreation} from "../../../page-objects/SeekerCreation"
import {ReferralPage} from "../../../page-objects-admin/ReferralPage"
import {SeekerPage} from "../../../page-objects-admin/SeekerPage"
import { Commons } from "../../../Commons/Common";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

describe('Admin Referral Page', ()=>{
    const commons = new Commons()
    const seekerCreation = new SeekerCreation()
    const referralPage = new ReferralPage()
    const seekerpage = new SeekerPage()
    var user = 'pedro.mota10@gmail.com'

    it('Verify element within Referral page', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        referralPage.select_Referral_Option()
        referralPage.select_Referral_Referred_Users()
        cy.get('h1').should('contain', 'Referred Users')
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .control-label').should('contain', 'First Name')
        cy.get(':nth-child(2) > .form-group > .control-label').should('contain', 'Last Name')
        cy.get(':nth-child(3) > .form-group > .control-label').should('contain', 'Email')
        cy.get(':nth-child(4) > .form-group > .control-label').should('contain', 'Type')
        cy.get(':nth-child(2) > .col-sm-3 > .form-group > .control-label').should('contain', 'Last Membership')
        cy.get('.box-footer > .btn').should('contain', 'Search')
    })

    it('Go to a Referral Link', ()=>{
        cy.visit('https://stage.vivayalive.com/?referral=6477bb23')//referral link of a test user 
        seekerCreation.select_Free_trial_option()
        seekerCreation.type_First_Name('referral')
        seekerCreation.type_Last_Name('Mation')
        seekerCreation.type_Seeker_Email(user)
        //seekerCreation.select_Time_Zone('(UTC-04:00) Georgetown, La Paz, Manaus, San Juan')
        seekerCreation.marking_Checkbox()
        seekerCreation.type_Seeker_Password('password')
        seekerCreation.type_Card_Name('Auto Mation')
        seekerCreation.type_Card_Number('4242424242424242')
        seekerCreation.type_Card_ExpDate('0225')
        seekerCreation.type_Security_Code('123')
        seekerCreation.type_ZipCode('1234')
        cy.wait(1500)
        cy.get('.seeker-registration-content > h2').should('contain', 'Thank You')
        cy.get('#mainNav > :nth-child(4) > a').click()
        cy.reload()
        cy.xpath('/html/body/div[2]/div[2]/div[2]/div/div[1]/div/div/div[2]/div/div/a').click({force: true})
        cy.get('.col-md-12 > .btn').click()
        cy.get('#stripe-form-submit').click()
        cy.wait(2500)
        cy.get('.order-summary').should('contain', 'Purchase Confirmation')
        cy.wait(2000)
    })

    it('Verify the User within Referral Tracking', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        referralPage.select_Referral_Option()
        referralPage.select_Referral_Tracking()
        referralPage.type_Email('automation@test.com')
        referralPage.search_Button()
        referralPage.select_the_result()
        cy.get('tbody > tr > :nth-child(4)').should('contain', user)
    })

    it('Verify the New referred user created', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        referralPage.select_Referral_Option()
        referralPage.select_Referral_Referred_Users()
        referralPage.type_Email(user)
        referralPage.search_Button()
        referralPage.select_the_result()
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > a').should('contain', 'Auto Yoon') //referred by:
    }) 

    it('Verify The amount paid by the referred user', ()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        referralPage.select_Referral_Option()
        referralPage.select_Referral_Referred_Income_Received()
        referralPage.type_Email('automation@test.com')
        referralPage.search_Button()
        //referralPage.select_the_result()
        cy.get('[style="text-align:center;"] > a > .glyphicon').last().click()//delete this line after fix the issue
        cy.get('tbody > tr > :nth-child(6)').should('be.visible')
    })

    it('Seeker elimination from admin',()=>{
        commons.open_Admin_Site()
        commons.set_Admin_Credentials()
        seekerpage.select_Seeker_Option()
        seekerpage.select_Seeker_List()
        seekerpage.type_Seeker_Email(user)
        seekerpage.select_Seeker_options('5') //num 5 for elimination 
        cy.get('#w3-success').should('contain', 'Seeker removed completely successful')
    })
})